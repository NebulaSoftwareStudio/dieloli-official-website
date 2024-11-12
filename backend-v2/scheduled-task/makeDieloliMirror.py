# 此脚本用于获取 dieloli 在 Github 发布的发行版二进制文件，并将其上传至七牛云。
import datetime
import os
import json
import time
import requests
import pymysql
import qiniu
import hashlib


def get_latest_package():
    # 获取 Github 最新 Release 信息
    response = requests.get("https://api.github.com/repos/pokemonchw/dieloli/releases/latest")
    json_string = response.text
    dictionary = json.loads(json_string)
    print(dictionary["tag_name"])
    return dictionary


def get_local_package_tag_name():
    # 读取系统遗留的配置文件
    try:
        latest_version_tag_file = open("/opt/project/git/release/latestVersionTag.txt", "r")
    except FileNotFoundError:
        latest_version_tag_file = open("/opt/project/git/release/latestVersionTag.txt", "w")
        latest_version_tag_file.close()
        latest_version_tag_file = open("/opt/project/git/release/latestVersionTag.txt", "r")

    latest_version_tag = latest_version_tag_file.read()
    latest_version_tag_file.close()
    return latest_version_tag


def download_package(tag_name):
    # 调用 gh-cli 下载二进制包
    shell_str = "cd /opt/project/git/dieloli ; gh release download " + tag_name + " -D ../release/" + \
                tag_name
    os.system(shell_str)
    os.system(shell_str + " -A zip")


def upload_to_qiniu(tag_name):
    q = qiniu.Auth("xxxxx-xxx-xxxxx", "xxxxx")
    file_path = "/opt/project/git/release/" + tag_name
    for file_name in os.listdir(file_path):
        if os.path.isfile(os.path.join(file_path, file_name)):
            print("将文件" + file_name + "上传至七牛云")
            key = tag_name + '/' + file_name
            local_file = os.path.join(file_path, file_name)
            token = q.upload_token("dieloli", key, 3600)
            ret, info = qiniu.put_file(token, key, local_file, version='v2')
            if ret is not None:
                print('All is OK')
            else:
                print(info)  # error message in info
            assert ret['key'] == key
            assert ret['hash'] == qiniu.etag(local_file)


def add_to_database(package_info):
    file_path = "/opt/project/git/release/" + package_info["tag_name"]
    for file_name in os.listdir(file_path):
        if os.path.isfile(os.path.join(file_path, file_name)):
            print("解析文件" + file_name + "信息并添加进数据库")
            # 判断文件类型
            if "windows" in file_name:
                platform = "windows"
            elif "mac" in file_name:
                platform = "mac"
            else:
                platform = "source"
            # 获取文件大小
            file_size = os.path.getsize(os.path.join(file_path, file_name))
            file_size = round(file_size / (1024 * 1024), 2)
            # 计算文件SHA256
            file_sha256 = get_file_sha256(os.path.join(file_path, file_name))
            # 七牛的下载链接
            file_download_url = "[Mirror Service Domain]"+package_info["tag_name"] + "/" + file_name
            # 当前时间
            current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            print(current_time)

            sql_str = "INSERT INTO `release_version` (`id`, `version_name`, `platform`, `pull_request`, `commit`, `author`, `size`, `sha256`, `download_url`, `download_count`, `create_by`, `create_time`, `update_by`, `update_time`, `is_delete`) "+\
                "VALUES "+\
                "(NULL, '"+package_info["tag_name"]+"', '"+platform+"', '#183', '" + package_info["target_commitish"] + "', 'pokemonchw', '" + str(file_size) + "MB', '" + file_sha256 + "', '" + file_download_url + "', '0', 'system', '" + str(current_time) + "', 'system', '" + str(current_time) + "', '0')"
            print(sql_str)
            query_database(sql_str)


def query_database(sql_string):
    # 建立数据库连接
    conn = pymysql.Connect(
        host='localhost',
        port=3306,
        user='root',
        password='',
        database='dieloli'
    )
    cursor = conn.cursor()
    cursor.execute(sql_string)
    conn.close()
    return cursor


def get_file_sha256(file_path):
    sha256 = hashlib.sha256()
    with open(file_path, 'rb') as target_file:
        while True:
            data = target_file.read(65536)
            if not data:
                break
            sha256.update(data)
    return sha256.hexdigest()


# 主入口
if __name__ == '__main__':
    # 获取 Github 最新 Release 版本
    latest_package_info = get_latest_package()
    latest_tag_name = latest_package_info["tag_name"]
    # 获取 本地记录的 Release 版本
    local_latest_tag_name = get_local_package_tag_name()

    if latest_tag_name != local_latest_tag_name:
        print("当前版本(" + latest_tag_name + ")与先前版本(" + local_latest_tag_name + ")不一致。发起下载 >>> ")
        # 下载包
        download_package(latest_tag_name)
        # 等二进制文件下载完毕后进行下一步
        time.sleep(10)
        # 调用七牛API上传文件
        upload_to_qiniu(latest_tag_name)
        # 将已上传的文件信息添加进数据库
        add_to_database(latest_package_info)
        # 更新本地留存的版本号供下次校验
        file = open("/opt/project/git/release/latestVersionTag.txt", "w")
        file.write(latest_tag_name)
        file.close()
    else:
        print("当前版本(" + latest_tag_name + ")与先前版本(" + local_latest_tag_name + ")一致。更新程序结束。")
