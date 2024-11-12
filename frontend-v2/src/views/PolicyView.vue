<template>
  <div class="policy-view">
    <div id="soft_licence"></div>
    <div class="item-box">
      <h1>DieLoli 用户许可协议</h1>
      <span>本内容最终更新于 2019 年 5 月 30 日</span>
      <p>首先感谢您游玩 Dieloli 死亡萝莉！除却游戏本身以外，我们还与许多网络服务方合作，向您提供游戏下载及其他服务。
        在游玩本游戏之前，您需要了解一下我们的服务条款，旨在告知您了解<b>服务的内容及其他明示的或暗示的协议、条款与行业惯例</b>，并在出现问题时提供解决指引。
        本服务条款将从以下几个方面详细阐述：</p>
      <ul>
        <li>服务提供的方式</li>
        <li>网站方有限保证</li>
        <li>您的义务</li>
      </ul>
      <p>在您使用本网站及网站合作方提供的服务时，可能涉及合作方要求的其他服务条款，您需要仔细阅读这些服务方的具体使用要求与使用规范。
        如果服务方的服务条款与本站服务条款出现了冲突，请以服务提供方的服务条款为准。</p>
      <h3>一、服务提供的方式</h3>
      <p>Dieloli 死亡萝莉 游戏本体以二进制编译的形式提供游玩服务。同时，我们还按照 CC BY-SA-NC 方式分发游戏软件的源代码。游戏本体与软件源代码在
        Github 上发布，为方便软件分发与优化下载体验，我们使用了 CDN 分发我们的软件。</p>
      <p>游戏本体的下载通过 dieloli.org
        以网页形式提供。同时，为保证服务的可靠性与安全性，我们可能会对访问的流量进行分析统计。我们会确保整个过程保持匿名，以保障您的隐私安全。</p>
      <h3>二、网站方有限保证</h3>
      <p>本站提供的下载链接可能不保证实时更新，因此，本站提供的软件版本可能与 Github 提供的软件版本有所不同。如若希望实时获取最新版本，请切换至
        Github Release 页面。</p>
      <p>
        本站同时提供旧版本的存档下载，方便您遇到新版本的致命问题后回退更新。通常，新版本软件可能会一并修复一些安全性问题，而这些过旧版本可能会影响您的操作系统安全性。因此，本站已在此事先告知过旧版本可能带来的安全问题，而您下载旧版本游戏软件即默认您自己承担旧版本可能带来的安全风险。</p>
      <h3>三、您的义务</h3>
      <p>本服务条款会不断更新，更新不会另行通知，敬请及时关注本页面。纠纷裁决时，您将默认按照最新的网站服务条款进行裁决。</p>
    </div>
    <div id="privacy"></div>
    <div class="item-box">
      <h1>隐私权政策</h1>
      <p>本站由星云软件工作室运营，关于用户隐私保护相关政策，请造访
        <b><a href="https://nebula-soft.com/policy.php?name=privacy" target="_blank">星云软件工作室个人隐私保护方针</a></b>
        。
      </p>
    </div>
    <div id="opensource"></div>
    <div class="item-box">
      <h1>开放源代码许可</h1>
      <h3><br/>dieloli 死亡萝莉 开放源代码许可</h3>
      <pre>This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 2.0 Generic License.
To view a copy of this license,visit http://creativecommons.org/licenses/by-nc-sa/2.0/
or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.</pre>
      <h3><br/>dieloli.org 网站开源协议</h3>
      <pre>本站源代码仓库（https://github.com/NebulaSoftwareStudio/dieloli-official-website）
按照 Apache License V2 自由分发，尽情使用并享受开源。

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

                     Copyright 2024 nebula Software Studio

关于本项目集成的其他开源服务，请务必遵循其开源许可。
本站包含的所有商标最终权利归属其所有人。</pre>
    </div>


    <div id="api"></div>
    <div class="item-box">
      <h1>本站开放API说明</h1>
      <p>本站提供版本更新API与国内镜像加速下载服务。</p>
      <p>您可自由使用本站API，但出于安全考虑，我们对API接口设置了访问次数限制与IP自动封锁以预防DDOS泛洪攻击。</p>

      <h3>获取最新版本</h3>
      <h4>请求地址</h4>
      <p>[GET] - <code>/api/v1/version/getLatest</code></p>
      <h4>请求参数</h4>
      <p>此接口无需传参</p>
      <h4>返回示例</h4>
      <pre>
{
  "success": true,
  "message": "查询成功！",
  "code": 200,
  "result": {
    "versionName": "Last.2024.10.22.3.53",
    "pullRequest": "#183",
    "commit": "8dfdd2916627769ae2e883b817454c1c38483b00",
    "author": "pokemonchw",
    "createBy": "system",
    "createTime": "2024-10-23 17:03:42",
    "fileInfo": {
      "source": {
        "versionName": "Last.2024.10.22.3.53",
        "size": "16.39MB",
        "sha256": "XXXXXX",
        "downloadUrl": "https://xxxxxx.zip",
        "downloadCount": "0"
      },
      "mac": {
        "versionName": "Past 2023.12.8.10",
        "size": "78.80MB",
        "sha256": "XXXXXX",
        "downloadUrl": "https://xxxxxx.zip",
        "downloadCount": "0"
      },
      "windows": {
        "versionName": "Last.2024.10.22.3.53",
        "size": "128.98MB",
        "sha256": "XXXXXX",
        "downloadUrl": "https://xxxxxx.zip",
        "downloadCount": "0"
      }
    }
  }
}
      </pre>


      <h3>获取历史版本</h3>
      <h4>请求地址</h4>
      <p>[GET] - <code>/api/v1/version/getHistory</code></p>
      <h4>请求参数</h4>
      <p>此接口无需传参</p>
      <h4>返回示例</h4>
      <pre>
{
  "success": true,
  "message": "查询成功！",
  "code": 200,
  "result": [
    {
      "commit": "8dfdd2916627769ae2e883b817454c1c38483b00",
      "versionName": "Last.2024.10.22.3.53",
      "author": "pokemonchw",
      "pullRequest": "#183",
      "createTime": "2024-10-23 17:03:42",
      "count": "2",
      "releaseFile": [{
        "platform": "windows",
        "sha256": "xxxxxx",
        "downloadUrl": "https://xxxxxx.zip",
        "downloadCount": "0",
        "size": "128.98MB"
      }, {
        "platform": "source",
        "sha256": "xxxxxx",
        "downloadUrl": "https://xxxxxx.zip",
        "downloadCount": "0",
        "size": "16.39MB"
      }]
    },
    ....
  ]
}
      </pre>


      <h3>二进制文件与源代码包的国内镜像</h3>
      <p>本站提供镜像下载，下载地址是通过固定规则拼接的。</p>
      <p>https://<code>镜像站域名</code>/<code>版本名称</code>/<code>Github Release文件名</code></p>
      <p>如果情况允许，请以上述两个接口返回的<code>downloadUrl</code>值为准。</p>
      <p>本站提供的镜像文件每一小时更新一次，下载链接可能不保证实时更新，因此，本站提供的软件版本可能与 Github 提供的软件版本有所不同。如若希望实时获取最新版本，请切换至
        Github Release 页面。</p>
    </div>
  </div>
</template>
<script setup>

</script>
<style scoped lang="less">
.policy-view {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 30px;

  .item-box {
    width: 100%;
    box-sizing: border-box;
    padding: 30px;
    background-color: #f0f0f0;
    border: 2px solid #d9d9d9;
    border-radius: 8px;
    margin: 40px 0 0 0;

    a {
      text-decoration: underline;
      margin: 0 5px;
      transition: opacity 200ms ease-in-out;

      &:after {
        content: " ↗";
        font-weight: bolder;
      }

      &:hover {
        opacity: .7;
        transition: opacity 200ms ease-in-out;
      }
    }

    h1 {
      font-size: 20pt;
      margin: 20px 0 10px 0;

      &:first-child {
        margin-top: 0;
      }
    }

    h2 {
      font-size: 18pt;
      margin: 20px 0 10px 0;
    }

    h3 {
      margin: 20px 0 10px 0;
    }

    span {
      font-size: 10pt;
      color: #888888;

      &.tips {
        text-align: center;
        display: block;
        width: 100%;
        padding: 10px 0 20px 0;
      }
    }

    p {
      margin: 10px auto;
      color: #353535;

      &:last-child {
        margin-bottom: 0;
      }

      b {
        color: #000;
      }
    }

    ul {
      display: block;
      margin: 20px 40px 10px;
      color: #888888;
    }

    ol {
      display: block;
      margin: 20px 40px 10px 60px;
      color: #888888;
    }

    pre {
      font-size: 10pt;
      display: block;
      padding: 10px;
      background: #f8f8f8;
      margin: 20px 0;
      overflow-x: auto;
    }
  }
}
</style>
