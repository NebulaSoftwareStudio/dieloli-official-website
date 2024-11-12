<template>
  <nav class="main-nav">
    <div class="main-nav-box">
      <div class="logo-box">
        <router-link class="title" to="/">DieLoli 死亡萝莉</router-link>
      </div>
      <div class="menu-box">
        <router-link class="item" to="/develop-path">路线图</router-link>
        <router-link class="item" to="/change-log">最新变化</router-link>
        <router-link class="item-button" to="/community">参与贡献</router-link>
        <router-link class="item-button primary" to="/download">下载</router-link>
      </div>
    </div>
  </nav>
  <div class="content">
    <router-view />
  </div>
  <footer class="footer">
    <div class="button-list">
      <div class="social-links">
        <a href="https://pawoo.net/@nekoharuya" target="_blank" class="item">
          <medium-outlined />
        </a>
        <a href="https://github.com/pokemonchw/dieloli" target="_blank" class="item">
          <github-outlined />
        </a>
        <a href="mailto:pokemonchw@gmail.com" class="item">
          <MailOutlined />
        </a>
        <a href="https://afdian.com/@byayoi" target="_blank" class="item">
          <div class="icon afdian"></div>
        </a>
        <!--        <a class="item">⌂</a>-->
        <!--        <a class="item">⌂</a>-->
      </div>
      <div class="language-changer">
        <translation-outlined class="language-logo" />
        <div class="language-name">简体中文</div>
      </div>
    </div>
    <div class="link-list">
      <!--      <a href="https://beian.miit.gov.cn" class="item">鲁ICP备10596363号</a>-->
      <a href="/policy#privacy" class="item">个人隐私保护方针</a>
      <a href="/policy#soft_licence" class="item">用户协议</a>
      <a href="/policy#opensource" class="item">开放源代码许可</a>
    </div>
    <div class="copyright-box">
      <div class="copyright">Copyright &copy;2024 pokemonchw AllRight Reserved.</div>
      <div class="powered">本站落地页及国内镜像由 <a href="https://www.nebula-soft.com" target="_blank">星云软件工作室</a> 维护</div>
    </div>
  </footer>
</template>
<script setup>
import {
  MediumOutlined,
  GithubOutlined,
  MailOutlined,
  TranslationOutlined
} from "@ant-design/icons-vue";
</script>
<style lang="less">
*{
  margin: 0;
  padding-top: 0;
}

#app{
  font-family: "Jetbrains Mono", "MiSans", "Microsoft YaHei", "PingFang SC", serif;
}

a{
  color: #888888;
  text-decoration: none;

  &:hover{
    color: #353535;
    transition: all 200ms ease-in-out;
  }
}

code {
  padding: 0.2em 0.4em;
  margin: 0 5px;
  font-size: 85%;
  background-color: rgba(175,184,193,0.2);
  border-radius: 6px;
  color: #353535;
}

.main-nav{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(53, 53, 53, 0.7);
  backdrop-filter: blur(0.5rem);
  position: sticky;
  top: 0;
  z-index: 99;

  .main-nav-box{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    box-sizing: border-box;
    padding: 20px;

    .logo-box{
      width: fit-content;
      //flex: auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 50px;
      gap: 10px;

      .title{
        font-size: 14pt;
        font-weight: bold;
        color: #ffffff;
        text-decoration: none;
      }

      .tag-item{
        font-size: 8pt;
        font-weight: 400;
        color: #d9d9d9;
        background-color: rgba(255,255,255,.2);
        padding: 5px 10px;
        border-radius: 4px;
      }
    }

    .menu-box{
      width: fit-content;
      align-items: center;
      display: flex;
      gap: 10px;

      .item{
        color: #d9d9d9;
        font-size: 12pt;
        font-weight: 400;
        text-decoration: none;

        &:hover{
          color: #ffffff;
        }
      }

      .item-button{
        width: fit-content;
        color: #ffffff;
        font-size: 12pt;
        font-weight: 400;
        text-decoration: none;
        padding: 5px 20px;
        line-height: 30px;
        background-color: rgba(255,255,255,.2);
        border-radius: 22px;
        transition: all 200ms ease-in-out;

        &.primary{
          color: #ffffff;
          border: 1px solid #1f1f1f;
          background-color: #1f1f1f;

          &:hover{
            background-color: rgba(0,0,0,1);
            transition: all 200ms ease-in-out;
          }
        }

        &:hover{
          background-color: rgba(255,255,255,.1);
          padding: 5px 25px;
          transition: all 200ms ease-in-out;
        }
      }
    }
  }
}

.content{
  width: 100%;
  height: fit-content;
  min-height: 80vh;
  overflow: hidden;
}

.footer{
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: #353535;
  font-size: 10pt;
  padding: 50px 0 70px 0;
  font-family: "MiSans", "Microsoft YaHei", "PingFang SC", serif;

  a{
    color: #d9d9d9;
    text-decoration: none;

    &:hover{
      color: #ffffff;
    }
  }

  .button-list{
    width: 100%;
    max-width: 1200px;
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    .social-links{
      width: fit-content;
      flex: auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;

      .item{
        width: 30px;
        height: 30px;
        background-color: rgba(255,255,255,.05);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        user-select: none;
        transition: all 200ms ease-in-out;

        .icon{
          width: 20px;
          height: 20px;

          &.afdian{
            background-image: url("@/assets/images/afdian.png");
            background-size: 100% 100%;
          }
        }

        &:hover{
          background-color: rgba(255,255,255,.1);
          transition: all 200ms ease-in-out;
        }
      }
    }

    .language-changer{
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      box-sizing: border-box;
      height: 40px;
      padding: 0 25px;
      border-radius: 25px;
      cursor: pointer;
      background-color: rgba(255,255,255,.05);
      transition: all 200ms ease-in-out;

      .language-logo{
        font-size: 15pt;
        margin-right: 10px;
      }

      &:hover{
        background-color: rgba(255,255,255,.1);
        padding: 0 30px;
        transition: all 200ms ease-in-out;
      }
    }
  }

  .link-list{
    width: 100%;
    max-width: 1200px;
    box-sizing: border-box;
    padding: 30px 20px;
    gap: 20px;
    display: flex;
    flex-wrap: wrap;

    .item{
      color: #d9d9d9;

      &:hover{
        color: #ffffff;
      }
    }
  }

  .copyright-box{
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: #ffffff;

    .copyright{
      width: 300px;
      flex: auto;
    }
  }
}

</style>
