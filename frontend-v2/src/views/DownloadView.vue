<template>
  <div class="download-view">
    <div class="banner-box">
      <h1>获取 DieLoli 死亡萝莉</h1>
    </div>
    <div class="download-box">
      <!-- 发行版列表 -->
      <div class="download-list">
        <div class="download-platform-type-list">
          <div
            :class="['item', currentSelectedPlatform==='windows'?'active':'']"
            @click="changeCurrentSelectedPlatform('windows')"
          >Windows</div>
          <div
            :class="['item', currentSelectedPlatform==='mac'?'active':'']"
            @click="changeCurrentSelectedPlatform('mac')"
          >Mac OS</div>
          <div
            :class="['item', currentSelectedPlatform==='source'?'active':'']"
            @click="changeCurrentSelectedPlatform('source')"
          >Linux</div>
          <div
            :class="['item', currentSelectedPlatform==='web'?'active':'']"
            @click="changeCurrentSelectedPlatform('web')"
          >Web</div>
        </div>
        <div class="download-item">
          <div class="version-info">
            <template v-if="currentSelectedPlatform === 'windows'">
              <div class="icon windows"></div>
              <div class="platform-name">适用于 Windows 的 Dieloli</div>
              <div class="platform-description">您可下载官方编译版二进制文件。二进制文件内建环境支持，目前兼容 Windows 7, 8,
                10 以及 11。</div>
              <a
                :href="currentSelectedPlatformLatestReleaseInfo.downloadUrl"
                class="download-button windows"
              >
                <download-outlined class="download-icon" />
                下载 .zip
              </a>
              <p class="version-info-item">版本: {{ currentSelectedPlatformLatestReleaseInfo.versionName?currentSelectedPlatformLatestReleaseInfo.versionName:'-' }}</p>
              <!-- certutil -hashfile ".\dieloli_windows.zip" SHA256 -->
              <p class="version-info-item" :title="currentSelectedPlatformLatestReleaseInfo.sha256">SHA-256: {{ currentSelectedPlatformLatestReleaseInfo.sha256?currentSelectedPlatformLatestReleaseInfo.sha256:'-' }}</p>
              <p class="version-info-item">估计大小: {{ currentSelectedPlatformLatestReleaseInfo.size?currentSelectedPlatformLatestReleaseInfo.size:'-MB' }}</p>
            </template>
            <template v-if="currentSelectedPlatform === 'mac'">
              <div class="icon mac"></div>
              <div class="platform-name">适用于 MacOS 的 Dieloli</div>
              <div class="platform-description">您可下载官方编译版二进制文件。二进制文件内建环境支持，目前兼容 M1 与 Intel 的
                macOS 11.6 及以上版本。</div>
              <a
                :href="currentSelectedPlatformLatestReleaseInfo.downloadUrl"
                class="download-button mac"
              >
                <download-outlined class="download-icon" />
                下载 .zip
              </a>
              <p class="version-info-item">版本: {{ currentSelectedPlatformLatestReleaseInfo.versionName?currentSelectedPlatformLatestReleaseInfo.versionName:'-' }}</p>
              <!-- certutil -hashfile ".\dieloli_windows.zip" SHA256 -->
              <p class="version-info-item" :title="currentSelectedPlatformLatestReleaseInfo.sha256">SHA-256: {{ currentSelectedPlatformLatestReleaseInfo.sha256?currentSelectedPlatformLatestReleaseInfo.sha256:'-' }}</p>
              <p class="version-info-item">估计大小: {{ currentSelectedPlatformLatestReleaseInfo.size?currentSelectedPlatformLatestReleaseInfo.size:'-MB' }}</p>
            </template>
            <template v-if="currentSelectedPlatform === 'source'">
              <div class="icon linux"></div>
              <div class="platform-name">适用于 Linux 的 Dieloli</div>
              <div class="platform-description">Linux 不提供任何编译版本，您需要自行从源码编译。在预想状态下，您应已完整安装 Python 3.x 环境。</div>
              <a
                :href="currentSelectedPlatformLatestReleaseInfo.downloadUrl"
                class="download-button linux"
              >
                <download-outlined class="download-icon" />
                下载 .zip
              </a>
              <p class="version-info-item">版本: {{ currentSelectedPlatformLatestReleaseInfo.versionName?currentSelectedPlatformLatestReleaseInfo.versionName:'-' }}</p>
              <!-- certutil -hashfile ".\Past.2024.9.29.8.34.zip" SHA256 -->
              <p class="version-info-item" :title="currentSelectedPlatformLatestReleaseInfo.sha256">SHA-256: {{ currentSelectedPlatformLatestReleaseInfo.sha256?currentSelectedPlatformLatestReleaseInfo.sha256:'-' }}</p>
              <p class="version-info-item">估计大小: {{ currentSelectedPlatformLatestReleaseInfo.size?currentSelectedPlatformLatestReleaseInfo.size:'-MB' }}</p>
            </template>
            <template v-if="currentSelectedPlatform === 'web'">
              <div class="icon web"></div>
              <div class="platform-name">适用于 Web 的 Dieloli</div>
              <div class="platform-description">Web 版本正在开发中。</div>
              <a
                href="https://webplay.dieloli.org"
                target="_blank"
                class="download-button web"
              >
                <select-outlined class="download-icon" />
                在线游玩
              </a>
            </template>
          </div>
          <div class="install-info">
            <template v-if="currentSelectedPlatform === 'windows'">
              <h4>二进制安装</h4>
              <ol>
                <li>下载二进制文件。您可以选择前往本项目 Github 的 Release 页面下载官方编译版本，或者使用本站托管的下载地址。如果您不信任编译版本，您可以下载源代码后自行编译。</li>
                <li>解压下载的二进制文件，直接运行<code>game.exe</code>文件。</li>
              </ol>
              <h4 style="margin-top: 36px">源码编译安装</h4>
              <ol>
                <li>下载源代码。</li>
                <li>通过<code>pip</code>等工具安装依赖</li>
                <li>使用 python 环境运行<code>game.py</code>即可</li>
              </ol>
              <div class="notice">
                <exclamation-circle-outlined />
                初次运行需要较长时间预热数据。
              </div>
            </template>
            <template v-if="currentSelectedPlatform === 'mac'">
              <h4>二进制安装</h4>
              <ol>
                <li>下载二进制文件。您可以选择前往本项目 Github 的 Release 页面下载官方编译版本，或者使用本站托管的下载地址。如果您不信任编译版本，您可以下载源代码后自行编译。</li>
                <li>解压下载的二进制文件，直接运行<code>game</code>文件。</li>
              </ol>
              <h4 style="margin-top: 36px">源码编译安装</h4>
              <ol>
                <li>下载源代码。</li>
                <li>通过<code>pip</code>等工具安装依赖</li>
                <li>使用 python 环境运行<code>game.py</code>即可</li>
              </ol>
              <div class="notice">
                <exclamation-circle-outlined />
                初次运行需要较长时间预热数据。
              </div>
            </template>
            <template v-if="currentSelectedPlatform === 'source'">
              <h4>源码编译安装</h4>
              <ol>
                <li>下载源代码。</li>
                <li>通过<code>pip</code>等工具安装依赖</li>
                <li>使用 python 环境运行<code>game.py</code>即可</li>
              </ol>
              <div class="notice">
                <exclamation-circle-outlined />
                初次运行需要较长时间预热数据。
              </div>
            </template>
            <template v-if="currentSelectedPlatform === 'web'">
              <h4>在线游玩</h4>
              <p>在线游玩方式基于 Web 技术开发的 DieLoli ，您的所有游玩数据都将保存到浏览器缓存中。</p>
              <p>这是一项实验性项目，后续可能会下架。因此，请勿将在线游玩作为主要游玩方式。</p>
            </template>
          </div>
        </div>
      </div>
      <!-- 发行版列表 结束 -->

    </div>


    <div class="banner-box">
      <h1>历史版本</h1>
    </div>

    <div class="history-version-list">
      <template v-for="(item, index) in historyList" :key="index">
        <div class="history-version-item">
          <div class="version-name">{{ item.versionName }}</div>
          <div class="content-box">
            <div class="file-list">
              <template v-for="(file_item, file_index) in item.releaseFile" :key="file_index">
                <div class="file-item">
                  <a :href="file_item.downloadUrl" target="_blank" class="item" :title="'SHA-256：'+file_item.sha256">
                  {{ file_item.platform==='windows'?'Windows':(file_item.platform==='mac'?'Mac OS':'源代码') }}
                    (.zip ， {{ file_item.size }})
                  </a>
                </div>
              </template>
            </div>
            <div class="version-info">
              <div class="item">
                <div class="label">发布时间</div>
                <div class="value">{{ item.createTime.substr(0, 10) }}</div>
              </div>
              <div class="item">
                <div class="label">Pull Request</div>
                <div class="value">{{ item.pullRequest }}</div>
              </div>
              <div class="item">
                <div class="label">Commit</div>
                <div class="value" :title="item.commit" >{{ item.commit.substr(0,8) }}</div>
              </div>
              <div class="item">
                <div class="label">提交者</div>
                <div class="value">{{ item.author }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import {computed, onMounted, ref} from "vue";
import {DownloadOutlined, ExclamationCircleOutlined, SelectOutlined} from "@ant-design/icons-vue";
import axios from "axios";

const currentSelectedPlatform = ref("windows")
function changeCurrentSelectedPlatform(platform){
  currentSelectedPlatform.value = platform
}


/**
 * 最新发行版信息
 */
const latestReleaseInfo = ref({})

function getLatestRelease(){
  axios.get("https://dieloli.org/api/v1/version/getLatest").then((res) => {
    console.log(res)
    if(res.data.success){
      latestReleaseInfo.value = res.data.result
    }else{
      latestReleaseInfo.value = {}
    }
  }).catch((err) => {
    console.error(err)
    latestReleaseInfo.value = {}
  })
}

const currentSelectedPlatformLatestReleaseInfo = computed(() => {
  let info = {}
  if(latestReleaseInfo.value.fileInfo && latestReleaseInfo.value.fileInfo[currentSelectedPlatform.value]){
    info = latestReleaseInfo.value.fileInfo[currentSelectedPlatform.value]
  }
  return info;
})


/**
 * 历史版本
 */
const historyList = ref([])

function getHistoryList(){
  axios.get("https://dieloli.org/api/v1/version/getHistory").then((res) => {
    if(res.data.success){
      historyList.value = res.data.result
    }else{
      historyList.value = []
    }
  }).catch((err) => {
    console.error(err)
    historyList.value = []
  })
}



onMounted(() => {
  getLatestRelease()
  getHistoryList()
})

</script>
<style scoped lang="less">
.download-view{
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;

  .banner-box{
    width: 100%;
    height: 100px;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    margin-bottom: 20px;

    h1{
      font-size: 30pt;
    }
  }

  .download-box{

    .download-list{
      width: 100%;

      .download-platform-type-list{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        margin: 20px 0;

        .item{
          font-size: 15pt;
          font-weight: 500;
          color: #353535;
          padding: 10px 20px;
          border: 2px solid #d9d9d9;
          line-height: 30px;
          border-radius: 25px;
          margin: 0 20px 20px -5px;
          cursor: pointer;
          transition: all 200ms ease-in-out;

          &.active{
            border: 2px solid #000000;
            color: #ffffff;
            background-color: #000000;
            transition: all 200ms ease-in-out;

            &:hover{
              color: #ffffff;
            }
          }

          &:hover{
            border: 2px solid #000000;
            color: #000000;
            transition: all 200ms ease-in-out;
          }
        }
      }

      .download-item{
        width: 100%;
        height: fit-content;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        border: 2px solid #d9d9d9;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: #f4f4f4;
        overflow: hidden;

        .version-info{
          width: 320px;
          flex: auto;
          box-sizing: border-box;
          min-width: 250px;
          padding: 30px;
          background-color: #ffffff;

          .icon{
            width: 42px;
            height: 42px;
            background-size: 100% 100%;

            &.windows{
              background-image: url("data:image/svg+xml,%3Csvg t='1649945056423' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='8330' width='200' height='200'%3E%3Cpath d='M523.8 191.4v288.9h382V128.1zM523.8 833.6l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zM120.1 770.6L443 823.2V543.8H120.1z' p-id='8331' fill='%23353535'%3E%3C/path%3E%3C/svg%3E");
            }

            &.mac{
              background-image: url("data:image/svg+xml,%3Csvg t='1649945133867' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='8520' width='200' height='200'%3E%3Cpath d='M747.4 535.7c-0.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7z' p-id='8521' fill='%23353535'%3E%3C/path%3E%3Cpath d='M642.3 230.7c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z' p-id='8522' fill='%23353535'%3E%3C/path%3E%3C/svg%3E");
            }

            &.linux{
              background-image: url("data:image/svg+xml,%3Csvg t='1649945190464' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='9217' width='200' height='200'%3E%3Cpath d='M525.2 198.3c-8.6 5.6-15.2 13.8-18.9 23.4-3.8 12.4-3.2 25.6 1.5 37.7 3.9 12.7 11.7 23.8 22.2 31.8 5.4 3.8 11.6 6.2 18.2 7 6.6 0.8 13.2-0.3 19.1-3.3 7-3.9 12.6-10 15.9-17.3 3.2-7.4 5-15.3 5.2-23.3 0.7-10.2-0.6-20.4-3.8-30.1-3.5-10.6-10.3-19.7-19.5-25.9-4.7-3-9.9-5-15.4-5.8-5.5-0.8-11.1-0.2-16.3 1.8-2.9 1.2-5.7 2.7-8.3 4.5' fill='%23FFFFFF' p-id='9218'%3E%3C/path%3E%3Cpath d='M810.2 606.5c-5.1-28.3-13.1-56-23.8-82.6-7.3-19.8-17.2-38.6-29.5-55.8-12.4-16.5-28.1-30.4-40.2-47.1-6.4-8.7-11.8-18.4-18.5-26.9-2.7-5.6-5.3-11.2-7.9-16.8-8-17.5-15.3-35.4-24.8-52-1.5-2.6-3.1-5.2-4.6-7.7-1.2-16-2.9-32-3.8-48 0.7-32.1-2-64.3-8.1-95.9-4.2-15.1-10.6-29.6-19-42.8-9.8-15.6-22.4-29.2-37.2-40.1-24.1-17.1-52.9-26.3-82.4-26.4-21.7-0.5-43.2 4.4-62.5 14.4-20.3 11.1-36.7 28.2-47 48.9-9.6 20.9-14.7 43.5-15 66.5-0.8 22.6 1.3 45 2.2 67.6 0.9 23.4 0.4 46.9 2.3 70.3 0.6 7.5 1.5 15 1.5 22.6 0 3.8-0.2 7.6-0.3 11.3l-0.3 0.8c-10.2 17.3-21.5 34-33.8 49.9-8.6 10.9-17.2 21.7-25.9 32.4-11.3 12.7-20.9 26.8-28.5 42-5.1 13.2-9.2 26.8-12.4 40.6l-0.3 1.1c-4.8 15.9-10.8 31.3-18 46.2-0.7 1.4-1.4 2.9-2 4.2-4.3 8.9-8.8 17.8-13.5 26.5l-5.4 10.1c-3.4 6.1-6.4 12.4-9 18.8-1.5 3.9-2.7 7.9-3.4 12-1.3 8.7-0.7 17.5 1.6 25.9 0.5 2.1 1.2 4.2 1.9 6.3 2.2 6.2 4.8 12.3 7.9 18.1 1.4 2.7 2.9 5.3 4.3 8l1.3 1.9c1.4 2.5 2.9 5 4.4 7.4l0.2 0.3c1.7 2.8 3.6 5.5 5.4 8.2l0.3 0.4c1.9 2.6 3.8 5.3 5.8 7.9 7.4 28.9 21 55.8 39.7 79-2.9 5.1-5.5 10.1-8.4 15.1-10.2 14.8-18.6 30.7-25.1 47.4-2.7 8.6-3.4 17.7-1.9 26.6 1.4 9 6 17.1 13 23 4.7 3.6 10.1 6.1 15.8 7.3 5.7 1.2 11.6 1.8 17.5 1.5 22.2-1.7 44.2-6.1 65.4-12.9 12.8-3.4 25.6-6.4 38.6-9 13.5-3.1 27.2-5 41-5.6 3.4 0.1 6.8-0.1 10.1-0.3 9.4 1 18.8 1.4 28.3 1l3.5-0.2c2.4 0.3 4.9 0.4 7.4 0.6 16.6 0.9 33.1 2.6 49.5 5.1 14.4 2.2 28.8 5 43 8.5 21.9 6.6 44.4 11 67.3 12.9 6 0.3 12-0.2 18-1.4 5.9-1.2 11.5-3.8 16.3-7.4 7-5.8 11.6-13.9 13.1-22.9 1.5-8.9 0.8-18-1.9-26.6-6.6-16.7-15.1-32.6-25.5-47.3-3.6-6.1-7-12.4-10.6-18.5 15.5-17.3 29.2-36.3 40.7-56.5 7 0.4 13.9-0.4 20.6-2.6 17.5-5.9 32.7-17.3 43.3-32.5 3.2-4.5 5.7-9.5 7.2-14.8 6.9-10.7 11.6-22.7 13.8-35.3 3.2-20.8 2.7-42.1-1.5-62.7h-0.2z m0 0' fill='%23020204' p-id='9219'%3E%3C/path%3E%3Cpath d='M425.6 323.2c-3.1 4-5.3 8.7-6.4 13.6-1.1 4.9-1.8 10-1.9 15 0.3 10.1-0.5 20.2-2.5 30.1-3.5 10.3-8.8 19.8-15.6 28.3-11.7 14.7-20.9 31.2-27.2 48.8-3.2 10.9-4.3 22.3-3.1 33.7-12.1 17.9-22.6 36.9-31.3 56.7-13.4 29.9-22 61.8-25.5 94.4-4.3 40.1 1.6 80.6 17 117.8 11.3 26.8 28.5 50.8 50.3 70.1 11.2 9.7 23.5 17.9 36.7 24.4 46.7 22.8 101.4 22.3 147.6-1.4 23.1-13.5 44.2-30.2 62.6-49.5 11.9-10.8 22.5-22.9 31.8-36.1 15.5-26.9 24.6-57.1 26.5-88.1 9.6-53.6 3.7-108.8-16.9-159.2-8.1-16.8-18.8-32.2-31.8-45.6a252.5 252.5 0 0 0-20.2-68c-7.2-15.5-15.9-30.3-22.6-46.2-2.7-6.5-5.1-13.1-8.1-19.4-2.9-6.4-6.9-12.3-11.8-17.3-5.3-4.9-11.6-8.6-18.5-10.7-6.9-2.2-14-3.4-21.2-3.6-14.4-0.7-28.9 1.1-43.1 0.6-11.5-0.5-22.8-2.5-34.3-1.8-5.7 0.3-11.4 1.4-16.7 3.5-5.4 2.1-10.1 5.5-13.8 10m4.6-125.1c-5.4 0.4-10.5 2.7-14.4 6.4-3.9 3.7-6.8 8.4-8.4 13.5-2.7 10.4-3.4 21.3-1.9 32 0.2 9.7 1.9 19.4 5.1 28.6 1.8 4.5 4.4 8.7 7.8 12.2 3.4 3.5 7.7 6.1 12.4 7.3 4.5 1.1 9.2 0.9 13.5-0.5 4.3-1.4 8.3-3.8 11.5-7 4.7-4.8 8.1-10.7 9.8-17.1 1.7-6.4 2.5-13.1 2.3-19.8 0-8.3-1.3-16.6-3.8-24.6s-6.8-15.3-12.6-21.4c-2.8-2.9-6-5.4-9.6-7.2-3.7-1.7-7.7-2.6-11.7-2.4m95 0c-8.6 5.6-15.2 13.8-18.9 23.4-3.8 12.4-3.2 25.6 1.5 37.7 3.9 12.7 11.7 23.8 22.2 31.8 5.4 3.8 11.6 6.2 18.2 7 6.6 0.8 13.2-0.3 19.1-3.3 7-3.9 12.6-10 15.9-17.3 3.2-7.4 5-15.3 5.2-23.3 0.7-10.2-0.6-20.4-3.8-30.1-3.5-10.6-10.3-19.7-19.5-25.9-4.7-3-9.9-5-15.4-5.8-5.5-0.8-11.1-0.2-16.3 1.8-2.9 1.2-5.7 2.7-8.3 4.5' fill='%23FFFFFF' p-id='9220'%3E%3C/path%3E%3Cpath d='M544.5 223.6c-3.2 0.2-6.2 1.2-8.9 2.9s-5 4-6.8 6.6c-3.4 5.3-5.3 11.5-5.4 17.9-0.3 4.7 0.4 9.5 1.9 14s4.3 8.5 7.9 11.5c3.8 3.1 8.4 4.9 13.3 5.2 4.9 0.2 9.7-1.1 13.7-3.9 3.2-2.3 5.8-5.2 7.6-8.7 1.8-3.4 2.9-7.2 3.4-11 1-6.8-0.2-13.8-3.2-19.9-3.1-6.2-8.4-10.9-14.8-13.4-2.8-1.1-5.7-1.5-8.7-1.4' fill='%23020204' p-id='9221'%3E%3C/path%3E%3Cpath d='M430.2 198.3c-5.4 0.4-10.5 2.7-14.4 6.4-3.9 3.7-6.8 8.4-8.4 13.5-2.7 10.4-3.4 21.3-1.9 32 0.2 9.7 1.9 19.4 5.1 28.6 1.8 4.6 4.4 8.7 7.8 12.2 3.4 3.5 7.7 6.1 12.4 7.3 4.5 1.1 9.2 0.9 13.5-0.5 4.3-1.4 8.3-3.8 11.5-7 4.7-4.8 8.1-10.7 9.8-17.1 1.7-6.4 2.5-13.1 2.3-19.8 0-8.3-1.3-16.6-3.8-24.6s-6.8-15.3-12.6-21.4c-2.8-2.9-6-5.4-9.6-7.2-3.7-1.7-7.7-2.6-11.7-2.4' fill='%23FFFFFF' p-id='9222'%3E%3C/path%3E%3Cpath d='M417.3 242.8c-1.3 6.7-1 13.7 1.1 20.2 1.6 4.3 4 8.2 7.2 11.5 2 2.2 4.3 4.1 7 5.4 2.7 1.4 5.7 1.8 8.7 1.1 2.7-0.7 5-2.3 6.7-4.5 1.7-2.2 2.9-4.7 3.7-7.3 2.3-7.8 2.1-16.1-0.4-23.9-1.6-5.7-4.7-10.9-9.1-14.8-2.1-1.8-4.7-3.2-7.4-3.9-2.8-0.7-5.7-0.5-8.4 0.7-2.8 1.4-5.1 3.7-6.5 6.5-1.4 2.8-2.3 5.8-2.7 8.9' fill='%23020204' p-id='9223'%3E%3C/path%3E%3Cpath d='M404.6 326.9c0.2 0.9 0.5 1.8 1 2.5 0.9 1.4 2 2.5 3.4 3.4 1.3 0.9 2.6 1.7 3.9 2.5 6.9 4.7 13 10.5 17.9 17.3 6 9.4 13.5 17.8 22 25 6.5 4.5 14.1 7.2 22 7.9 9.2 0.7 18.5-0.4 27.4-3.2 8.2-2.4 16.1-5.8 23.5-10.3 12.7-10.2 26.3-19.2 40.7-26.7 3.4-1.2 6.8-2.1 10-3.6 3.3-1.4 6.1-3.8 7.8-7 1.1-3.2 1.8-6.6 1.9-10 0.5-3.6 1.7-7.1 2.3-10.7 0.8-3.6 0.5-7.3-0.8-10.8-1.4-2.7-3.6-4.9-6.3-6.3-2.7-1.3-5.7-2.1-8.7-2.2-6.1 0.2-12.1 0.8-18 1.8-8 0.7-16-0.3-24 0-9.9 0.3-19.8 2.5-29.8 2.9-11.4 0.6-22.7-1.2-34.1-1.7-4.9-0.3-9.9-0.1-14.8 0.7-4.9 0.7-9.6 2.5-13.7 5.3-3.8 3-7.3 6.2-10.7 9.6-1.8 1.6-3.8 3-5.9 4.1-2.2 1.1-4.5 1.7-7 1.6-1.2-0.2-2.5-0.2-3.7 0-0.7 0.3-1.4 0.7-1.9 1.2l-1.5 1.8c-1 1.5-1.9 3.1-2.6 4.7' fill='%23D99A03' p-id='9224'%3E%3C/path%3E%3Cpath d='M429.7 301.7c-4 2.4-7.9 5-11.8 7.7-2.1 1.3-3.8 3-5.1 5.1-0.7 1.6-1 3.3-0.9 5 0.1 1.7 0.1 3.4 0 5.1-0.1 1.1-0.5 2.3-0.5 3.5 0 0.6 0 1.2 0.2 1.7 0.2 0.6 0.4 1.1 0.8 1.5 0.5 0.5 1.2 0.9 2 1.1 0.7 0.2 1.5 0.3 2.3 0.5 3.5 1 6.7 2.9 9.3 5.4 2.7 2.4 5.1 5.2 8 7.5 8 6 17.7 9.1 27.6 9 9.9-0.2 19.7-1.6 29.2-4.1 7.5-1.6 14.9-3.6 22.1-6.1 11.2-4.2 21.5-10.3 30.4-18.2 3.9-3.8 8-7.2 12.4-10.3 4-2.5 8.7-4.2 12.7-6.6 0.4-0.2 0.7-0.5 1.1-0.7 0.3-0.3 0.6-0.6 0.8-1 0.3-0.7 0.3-1.5 0-2.2-0.2-0.7-0.5-1.3-0.9-1.8-0.5-0.6-1.1-1.2-1.7-1.7-4.6-3.4-10.1-5.3-15.8-5.5-5.8-0.4-11.3 0-16.9-1.1-5.2-1.1-10.3-2.6-15.3-4.4-5.3-1.7-10.7-3-16.3-3.9-13-2.1-26.2-1.8-39.1 1-12.1 2.7-23.8 7.3-34.6 13.5' fill='%23604405' p-id='9225'%3E%3C/path%3E%3Cpath d='M428.4 288.1c-5.8 3.9-11 8.7-15.5 14.1-2.6 3-4.7 6.5-6.1 10.3-0.9 3-1.5 6.1-2 9.2-0.3 1.1-0.5 2.3-0.5 3.5 0 0.6 0.1 1.2 0.3 1.7 0.2 0.6 0.5 1.1 0.9 1.5 0.7 0.7 1.6 1.1 2.6 1.3 0.9 0.2 1.9 0.2 2.9 0.3 4.4 0.7 8.5 2.5 12.1 5.1 3.6 2.5 7 5.4 10.7 7.8 8.4 5 18 7.7 27.8 7.9 9.8 0.2 19.5-0.8 29-2.9 7.6-1.4 15.1-3.5 22.4-6.3 10.9-4.7 21.1-10.8 30.4-18.2 4.3-3.2 8.5-6.6 12.4-10.3 1.3-1.3 2.6-2.6 4-3.8 1.4-1.2 3-2.1 4.7-2.7 2.7-0.7 5.5-0.8 8.3-0.1 2 0.5 4.1 0.7 6.2 0.7 1.1 0 2.1-0.2 3.1-0.5 1-0.4 1.9-1 2.5-1.8 0.9-1.1 1.3-2.4 1.3-3.8s-0.4-2.7-1.1-3.9c-1.5-2.3-3.8-4.1-6.3-5.1-3.5-1.4-7.1-2.5-10.8-3.2-11.3-2.7-22.3-6.7-32.7-11.9-5.2-2.6-10.1-5.4-15.3-8.1-5.2-2.9-10.6-5.4-16.2-7.2-12.9-3.5-26.6-2.9-39.1 1.8-14 4.9-26.5 13.4-36.1 24.7' fill='%23F5BD0C' p-id='9226'%3E%3C/path%3E%3Cpath d='M493.5 272.2c0.7 2.3 4.3 1.9 6.4 2.9 2.1 1 3.3 2.9 5.3 3.1 2.1 0.2 5-0.7 5.3-2.6 0.4-2.6-3.4-4.2-5.8-5.1-3.2-1.5-6.8-1.6-10-0.2-0.7 0.3-1.4 1.2-1.2 1.9z m-34.4-1.2c-2.7-0.9-7.1 3.8-5.8 6.3 0.4 0.7 1.6 1.5 2.4 1.1 0.8-0.4 2.3-3.1 3.6-4 1-0.8 0.8-3.1-0.2-3.4z m0 0' fill='%23CD8907' p-id='9227'%3E%3C/path%3E%3Cpath d='M887.7 829.8c-2 5.2-4.9 10-8.5 14.3-8.4 9-18.6 16.2-29.8 21.2-19 8.8-37.5 18.6-55.5 29.3-11.7 7.8-22.6 16.6-32.7 26.4-8.3 8.7-17.2 16.7-26.6 24.2-9.8 7.2-21.1 12.1-33.1 14-14.7 1.9-29.6-0.4-43.1-6.5-9.7-3.7-18.1-10.2-24-18.8-5-9.2-7.3-19.5-6.8-29.9 0.6-18.3 2.8-36.5 6.6-54.5 2.6-15 5.2-30 6.8-45.1 2.8-27.6 3.1-55.3 1-82.9-0.5-4.6-0.5-9.3 0-13.9 0.6-9.4 8.5-16.6 18-16.5 4.3-0.1 8.6 0.3 12.8 1.1 10 1.2 20 2.9 29.8 5.2 6.1 1.6 12.2 3.8 18.3 5.5 10.2 3 21 3.9 31.6 2.9 11.1-2.6 22.4-4.3 33.8-5.3 4.7 0.2 9.4 1 13.8 2.4 4.6 1.3 8.9 3.6 12.4 6.9 2.5 2.7 4.5 5.8 5.8 9.2 1.9 5.1 3.1 10.4 3.5 15.8 0.2 4.8 0.6 9.6 1.2 14.4 1.7 7.7 5.4 14.9 10.6 20.9 5.3 5.8 11 11.2 17.2 16 5.9 5.2 12.1 10 18.6 14.4 3.1 2.1 6.2 4 9.1 6.3 3 2.2 5.5 5 7.4 8.2 2.4 4.4 3.2 9.5 2 14.4' fill='%23F5BD0C' p-id='9228'%3E%3C/path%3E%3Cpath d='M887.7 829.8c-2 5.2-4.9 10-8.5 14.3-8.4 9-18.6 16.2-29.8 21.2-19 8.8-37.5 18.6-55.5 29.3-11.7 7.8-22.6 16.6-32.7 26.4-8.3 8.7-17.2 16.7-26.6 24.2-9.8 7.2-21.1 12.1-33.1 14-14.7 1.9-29.6-0.4-43.1-6.5-9.7-3.7-18.1-10.2-24-18.8-5-9.2-7.3-19.5-6.8-29.9 0.6-18.3 2.8-36.5 6.6-54.5 2.6-15 5.2-30 6.8-45.1 2.8-27.6 3.1-55.3 1-82.9-0.5-4.6-0.5-9.3 0-13.9 0.6-9.4 8.5-16.6 18-16.5 4.3-0.1 8.6 0.3 12.8 1.1 10 1.2 20 2.9 29.8 5.2 6.1 1.6 12.2 3.8 18.3 5.5 10.2 3 21 3.9 31.6 2.9 11.1-2.6 22.4-4.3 33.8-5.3 4.7 0.2 9.4 1 13.8 2.4 4.6 1.3 8.9 3.6 12.4 6.9 2.5 2.7 4.5 5.8 5.8 9.2 1.9 5.1 3.1 10.4 3.5 15.8 0.2 4.8 0.6 9.6 1.2 14.4 1.7 7.7 5.4 14.9 10.6 20.9 5.3 5.8 11 11.2 17.2 16 5.9 5.2 12.1 10 18.6 14.4 3.1 2.1 6.2 4 9.1 6.3 3 2.2 5.5 5 7.4 8.2 2.4 4.4 3.2 9.5 2 14.4M259.4 676.3c4.9-1.9 10.2-2.4 15.4-1.4 5.2 1 10.1 3.1 14.4 6.1 8.3 6.3 15.5 14.1 21.2 22.8 14.1 19.4 27.6 39.2 39.9 59.8 10 16.7 19.1 33.9 30.6 49.6 7.5 10.2 16 19.7 23.6 29.9 7.9 10 13.9 21.4 17.6 33.5 4.4 16.1 2.6 33.2-4.9 48.1-5.4 10.4-13.5 19.1-23.4 25.1-10 6-21.5 9-33.2 8.7-18.4-2.5-36.2-8.1-52.6-16.6-34.9-13.9-72.8-18.3-108.8-29.1-11.1-3.3-21.9-7.3-33.1-10.3-5-1.2-9.9-2.7-14.7-4.7-4.7-2-8.8-5.4-11.5-9.7-2-3.5-3-7.5-2.9-11.5 0.1-4 0.9-7.9 2.3-11.5 2.7-7.5 7.1-14.2 10-21.6 4.4-12.2 6.1-25.3 5-38.2-0.6-12.9-2.9-25.8-3.6-38.7-0.6-5.8-0.4-11.6 0.6-17.3 1.5-11.4 10.4-20.5 21.9-22.2 5.3-0.9 10.6-1.3 15.9-1 5.3 0.3 10.7 0.3 16 0 5.3-0.3 10.6-1.8 15.3-4.3 4.3-2.6 8.1-6.2 11-10.4 2.9-4.2 5.5-8.5 7.9-13 2.4-4.5 5.1-8.7 8.3-12.7 3-4.1 7.1-7.2 11.8-9.4' fill='%23F5BD0C' p-id='9229'%3E%3C/path%3E%3Cpath d='M259.4 676.4c4.9-1.9 10.2-2.4 15.4-1.4 5.2 1 10.1 3.1 14.4 6.1 8.3 6.3 15.5 14.1 21.2 22.8 14.1 19.4 27.6 39.2 39.9 59.8 10 16.7 19.1 33.9 30.6 49.6 7.5 10.2 16 19.7 23.6 29.9 7.9 10 13.9 21.4 17.6 33.5 4.4 16.1 2.6 33.2-4.9 48.1-5.4 10.4-13.5 19.1-23.4 25.1-10 6-21.5 9-33.2 8.7-18.4-2.5-36.2-8.1-52.6-16.6-34.9-13.9-72.8-18.3-108.8-29.1-11.1-3.3-21.9-7.3-33.1-10.3-5-1.2-9.9-2.7-14.7-4.7-4.7-2-8.8-5.4-11.5-9.7-2-3.5-3-7.5-2.9-11.5 0.1-4 0.9-7.9 2.3-11.5 2.7-7.5 7.1-14.2 10-21.6 4.4-12.2 6.1-25.3 5-38.2-0.6-12.9-2.9-25.7-3.6-38.7-0.6-5.8-0.4-11.6 0.6-17.3 1.5-11.4 10.4-20.5 21.9-22.2 5.3-0.9 10.6-1.3 15.9-1 5.3 0.3 10.7 0.3 16 0 5.3-0.3 10.6-1.8 15.3-4.3 4.3-2.6 8.1-6.2 11-10.4 2.9-4.2 5.5-8.5 7.9-13 2.4-4.5 5.1-8.7 8.3-12.7 3-4.1 7.1-7.3 11.8-9.4' fill='%23F5BD0C' p-id='9230'%3E%3C/path%3E%3Cpath d='M267.1 684.8c4.4-1.7 9.3-2 13.9-0.9s8.9 3.2 12.6 6.2c7.1 6.2 13.1 13.6 17.6 21.9 12 19.4 23.7 39 34.6 59 7.9 15.3 16.8 30.1 26.6 44.2 6.8 9.2 14.6 17.6 21.6 26.6 7.3 8.9 12.8 19 16.2 29.9 4 14.3 2.3 29.6-4.5 42.9-5 9.4-12.5 17.3-21.7 22.6-9.2 5.4-19.8 8-30.4 7.5-16.7-2.6-32.9-7.6-48.2-14.9-30.4-11.1-63.5-12.5-94.7-21.2-11.2-3-22.1-7.1-33.4-9.9-5-1.1-10-2.5-14.8-4.3-4.8-1.8-9-5.2-11.8-9.5-1.8-3.4-2.7-7.2-2.5-11 0.2-3.8 1-7.6 2.4-11.2 2.7-7.1 7-13.6 9.7-20.7 3.8-11 5.1-22.6 3.9-34.2-0.8-11.5-2.9-22.9-3.5-34.5-0.4-5.1-0.2-10.3 0.7-15.4 0.9-5.1 3.3-9.8 6.9-13.6 4.2-3.8 9.4-6.3 15-7 5.6-0.7 11.2-0.7 16.7 0 5.6 0.7 11.2 0.9 16.8 0.8 11 0 21-6.4 25.7-16.4 2.3-4.5 4.3-9.2 5.9-13.9 1.7-4.8 4-9.3 6.7-13.6 2.8-4.3 6.8-7.7 11.5-9.7' fill='%23F5BD0C' p-id='9231'%3E%3C/path%3E%3C/svg%3E");
            }
          }

          .platform-name{
            font-size: 35px;
            font-weight: 600;
            margin: 20px 0 10px 0;
          }

          .platform-description{
            font-size: 16px;
            font-weight: 400;
            color: #888888;
          }

          .download-button{
            display: flex;
            align-items: center;
            margin: 40px 0 40px -5px;
            background-color: #888888;
            width: fit-content;
            color: #ffffff;
            padding: 10px 20px;
            line-height: 30px;
            border-radius: 25px;
            cursor: pointer;
            transition: opacity 200ms ease-in-out;

            .download-icon{
              width: 20px;
              height: 20px;
              font-size: 20px;
              margin-right: 15px;
            }

            &.windows{
              background-image: linear-gradient(to bottom, #0178d7, #2FA1E6);
              box-shadow: 0 2px 6px #2fa1e6ad;
            }

            &.mac{
              background-image: linear-gradient(to top, #b2b6bc, #848484);
              box-shadow: 0 2px 6px #b2b6bc83;
            }

            &.linux{
              background-image: linear-gradient(to bottom, #ffa425, #fdbe67);
              box-shadow: 0 2px 6px #ffb349ad;
            }

            &:hover{
              opacity: .7;
              transition: opacity 200ms ease-in-out;
            }
          }

          .version-info-item{
            width: 80%;
            color: #19191c;
            font-size: 16px;
            font-weight: 400;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-top: 16px;
          }
        }

        .install-info{
          width: 320px;
          flex: auto;
          height: 100%;
          box-sizing: border-box;
          min-width: 250px;
          padding: 30px;

          h4{
            font-size: 16px;
            line-height: 16px;
            color: #19191c;
          }

          p{
            margin-top: 16px;
            font-size: 16px;
            font-weight: 400;
            color: #888888;
          }

          ol{
            margin-top: 16px;

            li{
              margin-top: 16px;
              font-size: 16px;
              font-weight: 400;
              color: #888888;

              &:first-child{
                margin-top: 0;
              }
            }
          }

          .notice{
            margin-top: 32px;
            background-color: #e6f4ff;
            border: 1px solid #91caff;
            color: #888888;
            box-sizing: border-box;
            padding: 10px 20px;
            border-radius: 4px;
            font-size: 10pt;
            font-weight: 400;
          }
        }
      }
    }
  }

  .history-version-list{
    width: 100%;

    .history-version-item{
      margin-top: 30px;

      .version-name{
        font-size: 15pt;
        font-weight: 600;
      }

      .content-box{
        width: 100%;
        display: flex;
        gap: 30px;
        flex-wrap: wrap;

        .file-list{
          width: 100%;
          max-width: 320px;
          box-sizing: border-box;

          .file-item{
            width: 100%;
            border-top: 1px solid #d9d9d9;
            padding: 10px 0;
            margin-top: 10px;

            a{
              text-decoration: underline;
            }

            &:last-child{
              border-bottom: 1px solid #d9d9d9;
            }
          }
        }

        .version-info{

          .item{
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .label{
              width: 150px;
              text-align: left;
              font-size: 12pt;
              font-weight: 500;
              color: #353535;
              padding: 5px 0;
            }

            .value{
              font-size: 12pt;
              font-weight: 400;
              color: #888888;
            }
          }
        }

      }
    }
  }
}
</style>
