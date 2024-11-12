<?php

/**
 * 获取最新版本
 */

$database = new database();
$echo = new resultEcho();

// 获取最新源代码版本
$latest_source_info = $database -> get_single_data("select * from `release_version` where `platform` = 'source' and `is_delete` = 0 order by `ID` desc limit 1");

// 获取最新mac版本
$latest_mac_info = $database ->  get_single_data("select * from `release_version` where `platform` = 'mac' and `is_delete` = 0 order by `ID` desc limit 1");

// 获取最新Windows版本
$latest_windows_info = $database ->  get_single_data("select * from `release_version` where `platform` = 'windows' and `is_delete` = 0 order by `ID` desc limit 1");

// echo json_encode($latest_windows_info);

// 构造输出内容。最新版本信息按照源代码版本的内容取。

$result = Array();

$result["versionName"] = $latest_source_info["version_name"];
$result["pullRequest"] = $latest_source_info["pull_request"];
$result["commit"] = $latest_source_info["commit"];
$result["author"] = $latest_source_info["author"];
$result["createBy"] = $latest_source_info["create_by"];
$result["createTime"] = $latest_source_info["create_time"];

$result["fileInfo"] = Array();
// 塞入源代码版本文件信息
$result["fileInfo"]["source"] = Array();
$result["fileInfo"]["source"]["versionName"] = $latest_source_info["version_name"];
$result["fileInfo"]["source"]["size"] = $latest_source_info["size"];
$result["fileInfo"]["source"]["sha256"] = $latest_source_info["sha256"];
$result["fileInfo"]["source"]["downloadUrl"] = $latest_source_info["download_url"];
$result["fileInfo"]["source"]["downloadCount"] = $latest_source_info["download_count"];


// 塞入mac版本文件信息
$result["fileInfo"]["mac"] = Array();
$result["fileInfo"]["mac"]["versionName"] = $latest_mac_info["version_name"];
$result["fileInfo"]["mac"]["size"] = $latest_mac_info["size"];
$result["fileInfo"]["mac"]["sha256"] = $latest_mac_info["sha256"];
$result["fileInfo"]["mac"]["downloadUrl"] = $latest_mac_info["download_url"];
$result["fileInfo"]["mac"]["downloadCount"] = $latest_mac_info["download_count"];

// 塞入windows版本文件信息
$result["fileInfo"]["windows"] = Array();
$result["fileInfo"]["windows"]["versionName"] = $latest_windows_info["version_name"];
$result["fileInfo"]["windows"]["size"] = $latest_windows_info["size"];
$result["fileInfo"]["windows"]["sha256"] = $latest_windows_info["sha256"];
$result["fileInfo"]["windows"]["downloadUrl"] = $latest_windows_info["download_url"];
$result["fileInfo"]["windows"]["downloadCount"] = $latest_windows_info["download_count"];


$echo -> printJson(true, "查询成功！", $result, 200);
