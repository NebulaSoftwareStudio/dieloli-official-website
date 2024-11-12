<template>
  <div class="community-view">
    <div class="item-box">
      <h1>参与开发工作</h1>
      <p>欢迎点击下方按钮参与 Dieloli 项目的开发工作。Dieloli 是一个 <code>ERALIKE</code> 游戏，基于 Python
        独立进行开发。早期版本曾使用 <code>pyera</code> 进行构架，现已全部废弃。</p>
      <p>想要参与开发请与开发者联系，联系方式在本页面底部。</p>
      <a href="https://github.com/pokemonchw/dieloli" target="_blank" class="button">
        <github-outlined class="icon" />
        Github 仓库
      </a>
      <p>游戏分为稳定版(Last Version)，和测试版(Test
        Version)两个版本。测试版主要用于测试各种实验性的新系统，确认稳定和兼容性良好后，会被推送到正式版。 日常开发备份在测试版分支中进行，pr
        也请提交至此分支。代码风格化通常使用 <code>black</code> 自动完成，行宽为 <code>108</code> 。</p>
    </div>
    <div class="item-box">
      <h1>BUG反馈</h1>
      <p>当遇到游戏闪退，可检查<code>error.log</code>文件，并将<code>error.log</code>文件中内容贴至 issues 中进行反馈</p>
      <a href="https://github.com/pokemonchw/dieloli" target="_blank" class="button">
        <github-outlined class="icon" />
        Github 仓库
      </a>
    </div>
    <div class="item-box">
      <h1>参与本地化翻译</h1>
      <p>本项目使用
        <code>gettext</code>
        进行本地化设置。请于
        <code>data/po</code>
        目录下创建对应语言目录，切换语言请编辑
        <code>config.ini</code>
        中的
        <code>language</code>
        项。</p>
      <p>如果您有意协助本地化翻译，欢迎您通过 Email 致信给作者，经确认后会邀请您加入 smartcat 参与本地化工作。</p>
      <p>If you want to help with localization, please contact me by email, and I will invite you to join my smartcat</p>
    </div>
    <div class="item-box">
      <h1>请我喝奶茶QwQ</h1>
      <p>帮助中国的可怜萝莉控！</p>
      <a href="https://afdian.com/@byayoi" target="_blank" class="button">
        <select-outlined class="icon" />
        爱发电
      </a>
    </div>
  </div>
</template>
<script setup>
import {SelectOutlined, GithubOutlined} from "@ant-design/icons-vue";
</script>
<style scoped lang="less">
.community-view{
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 30px;

  .item-box{
    width: 100%;
    box-sizing: border-box;
    padding: 30px;
    background-color: #f0f0f0;
    border: 2px solid #d9d9d9;
    border-radius: 8px;
    margin: 40px 0 0 0;

    a{
      text-decoration: underline;
      margin: 0 5px;
      transition: opacity 200ms ease-in-out;

      &:after{
        content: " ↗";
        font-weight: bolder;
      }

      &:hover{
        opacity: .7;
        transition: opacity 200ms ease-in-out;
      }
    }

    h1 {
      font-size: 20pt;
      margin: 20px 0 10px 0;

      &:first-child{
        margin-top: 0;
      }
    }

    h2{
      font-size: 18pt;
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

    p{
      margin: 10px auto;
      color: #353535;

      &:last-child{
        margin-bottom: 0;
      }

      b{
        color: #000;
      }
    }

    ul{
      display: block;
      margin: 20px 40px 10px;
      color: #888888;
    }

    ol{
      display: block;
      margin: 20px 40px 10px 60px;
      color: #888888;
    }

    pre{
      font-size: 10pt;
      display: block;
      padding: 10px;
      background: #f8f8f8;
      margin: 20px 0;
      overflow-x: scroll;
    }

    .button{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: fit-content;
      color: #ffffff;
      font-size: 12pt;
      font-weight: 400;
      text-decoration: none;
      padding: 10px 20px;
      line-height: 30px;
      background-color: rgba(255,255,255,.2);
      border-radius: 25px;
      border: 1px solid #1f1f1f;
      background-color: #1f1f1f;
      margin: 10px 0 10px -5px;
      transition: all 200ms ease-in-out;

      .icon{
        color: #ffffff;
      }

      &:hover{
        background-color: rgba(0,0,0,1);
        padding: 10px 25px;
        transition: all 200ms ease-in-out;
      }

      &:after{
        display: none;
      }
    }

  }
}
</style>
