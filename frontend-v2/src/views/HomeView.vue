<template>
  <div class="banner-view">
    <banner-background class="banner-background"/>
    <div class="banner-background-cover"></div>
    <div class="banner-content">
      <div class="project-name">
        <h2 class="name-text">DieLoli 死亡萝莉</h2>
        <span class="tag-item">{{ latestReleaseInfo.versionName?latestReleaseInfo.versionName:'-' }}</span>
      </div>
      <h1 class="main-title">与多达 2800 位<br/>由算法随机生成的游戏角色相会</h1>
      <div class="button-box">
        <router-link class="button-item" to="/community">参与贡献</router-link>
        <router-link class="button-item primary" to="/download">下载</router-link>
      </div>
    </div>
  </div>

  <img class="screenshot-box" alt="dieloli main screenshot" src="@/assets/screenshot.jpg"/>

  <div class="black-trans-box"/>

  <div class="home-view">
    <div class="module-box black">
      <div class="module-box-container description" style="padding-top: 100px;">
        <h1 class="module-title" style="margin: 40px 0">欢迎来到由算法驱动的文字冒险开放世界</h1>
        <p>在游戏中，你将与多达 2800
          位<span>由算法模拟整个人生成长过程随机生成</span>的游戏角色一起在校园里生活。你将在游戏中体验不一样的人生，这里有魔法少女，有触手怪，有吸血鬼，也有巫女，妖怪，幽灵，和帅气的魔法师。当然，这些都需要你自己去进行探索。至少，你也可以将它当成一个普通的校园恋爱模拟游戏玩。</p>
        <p>死亡萝莉是一个 <a href="http://www.emuera.net/" target="_blank">ERALIKE 游戏 ↗</a> ，它的主要表现形式为某种
          Ascii Art。与其他 ERA Game 不同，本游戏中有数千名由“AI算法”<a href="#whatIsDieloliAi"><sup>[1]</sup></a>自由演算的
          NPC，游戏设计者并没有设计必须完成的强制性的游戏主线。所有事件的脉络和走向<span>都不是预设好的</span>。每个角色都有各自的经历和成长，不断地学习和生活。同时，由于所有
          NPC 都基于自由演算，因此每次新开游戏，世界也都会有所不同。
        </p>
        <p>在这里，你可以做任何你想做的事情，没有人是特殊的，也没有人可以掌控世界，<span>玩家也不行</span>。</p>
      </div>
    </div>

    <div class="module-box black">
      <div class="module-box-container function-gallery-box">
        <div class="function-gallery-classify">
          <template v-for="(item, index) in functionGalleryList" :key="index">
            <div :class="['item', (currentFunctionGalleryIndex===index?'active':'')]" @click="changeCurrentFunctionGallery(index)">{{ item.name }}</div>
          </template>
        </div>
        <div class="function-gallery">
          <div class="images-box">
            <img :alt="currentFunctionGalleryInfo.title" :src="currentFunctionGalleryInfo.image">
          </div>
          <div class="info">
            <div class="title">{{ currentFunctionGalleryInfo.title }}</div>
            <div class="description">{{ currentFunctionGalleryInfo.description }}</div>
          </div>
        </div>
      </div>

      <div class="white-trans-box"></div>
    </div>


  </div>

<!--  <div class="black-trans-box" style="margin-top: -50px; transform: rotate(177deg)"/>-->

  <div class="home-view" style="padding-top: 100px">
    <div class="module-box">
      <div class="module-box-container blog-post-box">
        <h1 class="module-title">DieLoli 的最新变化</h1>
        <template v-if="releaseNoteList.length > 0">
          <div class="post-list">
            <template v-if="releaseNoteList[0]">
              <router-link :to="'/update-note?id=' + releaseNoteList[0].id" class="item big" :style="'background-image: url(\''+releaseNoteList[0].image+'\')'">
                <h2>{{ releaseNoteList[0].title }}</h2>
                <div class="info">
                  <div class="line time">{{ releaseNoteList[0].create_time.substr(0, 10) }}</div>
                </div>
              </router-link>
            </template>

            <div class="right-post-list">
              <template v-for="(item, index) in releaseNoteList" :key="index">
                <template v-if="index > 0">
                  <router-link :to="'/update-note?id=' + item.id" class="item" :style="'background-image: url(\''+item.image+'\')'">
                    <h2>{{ item.title }}</h2>
                    <div class="info">
                      <div class="line time">{{ item.create_time.substr(0, 10) }}</div>
                    </div>
                  </router-link>
                </template>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="module-box" id="whatIsDieloliAi">
      <div class="module-box-container qa-box">
        <h1 class="module-title">一些常见的奇怪问题 🤔</h1>
        <div class="qa-list">
          <div class="qa-list-item">
            <div :class="['qa-item', getQAOpenStatus(1)?'active':'']">
              <div class="title-box"  @click="changeQAOpenStatus(1)">
                <plus-outlined class="icon"/>
                <div class="title">初次启动</div>
              </div>
              <div
                class="description"
              >游戏初次启动时需要对数据进行预热处理，预热时间大约一分钟左右，在此期间请耐心等待，请勿退出游戏或关闭系统。</div>
            </div>
            <div :class="['qa-item', getQAOpenStatus(2)?'active':'']">
              <div class="title-box"  @click="changeQAOpenStatus(2)">
                <plus-outlined class="icon"/>
                <div class="title">死亡萝莉的“AI算法”是什么？</div>
              </div>
              <div
                class="description"
              >
                <p>本游戏使用的"AI算法"与通常意义上的 AIGC 不同，具体技术讨论可以参考 <a href="https://v2ex.com/t/941790" target="_blank">这篇帖子 <select-outlined /></a></p>
                <p>目前本游戏对"AI算法"的迭代已经停滞，如果可以提供新的技术方向和想法的话再感谢不过。</p>
              </div>
            </div>
            <div :class="['qa-item', getQAOpenStatus(3)?'active':'']">
              <div class="title-box"  @click="changeQAOpenStatus(3)">
                <plus-outlined class="icon"/>
                <div class="title">操作攻略</div>
              </div>
              <div
                class="description"
              >
                <p>游戏操作模仿一般命令行操作逻辑，大部分操作可参考命令行工具的基本使用习惯。</p>
                <p>游戏中所有的按钮都分为被编号的数字按钮和未编号的文字按钮两种，它们都可以用鼠标点击，或直接在输入栏输入编号或文本进行交互。</p>
                <p>大部分文本交互会等待玩家进行输入，此时点击鼠标左键或者键盘任意键即可。</p>
                <p>所有的等待用户交互的文本，都可以通过鼠标右键一次性跳过。</p>
                <p>可通过光标键盘上下键回溯之前的输入内容，回溯的上限是20条。</p>
              </div>
            </div>
          </div>
          <div class="qa-list-item">
            <div :class="['qa-item', getQAOpenStatus(4)?'active':'']">
              <div class="title-box"  @click="changeQAOpenStatus(4)">
                <plus-outlined class="icon"/>
                <div class="title">字体</div>
              </div>
              <div
                class="description"
              >
                <p>本游戏界面设计依赖 Sarasa Mono SC 字体，若系统未安装此字体将会自动回退使用当前操作系统的默认字体，可能会导致游玩时发生意想不到的界面错乱。</p>
                <p>您可在游戏前事先安装 Sarasa Mono SC 字体，或者通过配置文件修改为您喜欢的其他字体。</p>
              </div>
            </div>
            <div :class="['qa-item', getQAOpenStatus(5)?'active':'']">
              <div class="title-box"  @click="changeQAOpenStatus(5)">
                <plus-outlined class="icon"/>
                <div class="title">著作权信息</div>
              </div>
              <div
                class="description"
              >
                <p>本项目基于 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank">CC BY-NC-SA <select-outlined /></a> 协议，开发者允许任何人基于此项目做除商业行为外的任何事，同时允许任何人对本项目进行除协议外的任何改动，仅需注明原作者，以及以相同方式进行传播 (指同样使用 CC BY-NC-SA 协议)。</p>
                <p>请勿将本项目用作商业用途。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    <div class="module-box black" style="border-bottom: 1px solid #555555">-->
<!--      <div class="module-box-container ">-->

<!--      </div>-->
<!--    </div>-->
  </div>
</template>
<script setup>
import {computed, onMounted, ref} from "vue";
import {PlusOutlined, SelectOutlined} from "@ant-design/icons-vue";
import bannerBackground from "@/components/bannerBackground.vue"
import axios from "axios";

const functionGalleryList = ref([
  {name: "交互", title: "丰富的多功能交互面板", description: "游戏根据“对话”、“娱乐”、“战斗”、“学习”、“休息”等大类，提供了多种与NPC交互的操作。作为一种开放玩法的游戏，玩家可根据自己的意愿，结合现有场景选择合适的交互。当然，您选择不合适的也没关系，大不了当个怪人。", image: "/static/images/function-gallery/action-list.png" },
  {name: "地图", title: "超大校园地图", description: "看看外面的风景不再是难事。通过“主动”选单的“移动”功能，可在庞大的校园中随意游走，遇见更多未曾谋面的陌生人。世上好人千千万，何必单恋一枝花。", image: "/static/images/function-gallery/maps.gif"},
  {name: "属性", title: "完整描述属性", description: "游戏提供详实的对象属性用于玩家分析当前主角以及NPC状态，并在主屏幕分类进行展示，方便玩家做出判断进行下一步操作。而且千万小心，记得不要没穿衣服就往外跑。", image: "/static/images/function-gallery/property.png"},
  {name: "成就", title: "新增成就系统（Beta）", description: "游戏内含多项隐藏成就，在特定情境下会自动解锁并展示。某些成就同时为玩家提供游戏内的奖励，例如徽章和称号。如果愿意的话，这可以成为赛博仓鼠和收集癖的天堂。", image: "/static/images/function-gallery/achievements.png" },
  {name: "多语言", title: "支持多种语言（Beta）", description: "游戏支持在多种语言环境下运行，同时支持自定义切换。目前游戏已支持中文与英文，更多的语言支持正在开发中。如果您愿意参与本地化工作，欢迎查看社区页面参与贡献。", image: "/static/images/function-gallery/multi-language.png" },
  {name: "存档", title: "多栏位超大存档支持", description: "游戏支持自动存档的同时，另外还提供给玩家9条×9页的存档栏位以实现即时存档。世上没有后悔药，但是有存档的话另说。", image: "/static/images/function-gallery/archive.png"},
  // {name: "", title: "", description: "", image: "/img/function-gallery/"},
])
const currentFunctionGalleryIndex = ref(0)
const currentFunctionGalleryInfo = computed(() => {
  if(functionGalleryList.value && functionGalleryList.value[currentFunctionGalleryIndex.value]){
    return functionGalleryList.value[currentFunctionGalleryIndex.value]
  }else{
    return {}
  }
})
function changeCurrentFunctionGallery(index){
  currentFunctionGalleryIndex.value = index
}

const qaOpenStatusArr = ref([])
function changeQAOpenStatus(index){
  // 先找出数组里有没有
  let findIndex = qaOpenStatusArr.value.findIndex((item) => {
    return item === index
  })
  if(findIndex > -1){
    qaOpenStatusArr.value = qaOpenStatusArr.value.filter((item) => {
      return item !== index
    })
  }else{
    qaOpenStatusArr.value.push(index)
  }
}

function getQAOpenStatus(index){
  let findIndex = qaOpenStatusArr.value.findIndex((item) => {
    return item === index
  })
  return findIndex > -1
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


/**
 * 获取更新日志列表
 */
const releaseNoteList = ref([])
function getReleaseNoteList(){
  axios.get("https://dieloli.org/api/v1/updateNote/list", {params: {pageSize: 5}}).then((res) => {
    console.log(res)
    if(res.data.success){
      releaseNoteList.value = res.data.result
    }else{
      releaseNoteList.value = []
    }
  }).catch((err) => {
    console.error(err)
    releaseNoteList.value = []
  })
}


onMounted(() => {
  getLatestRelease()
  getReleaseNoteList()
})


</script>
<style scoped lang="less">
.banner-view {
  width: 100%;
  height: 80vh;
  position: relative;

  .banner-background {
    position: absolute;
    z-index: 0;
    top: 0;
  }

  .banner-background-cover {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }

  .banner-content {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 20px 20px 200px 20px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-end;
    position: relative;
    z-index: 50;

    .project-name {
      margin-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .name-text{
        color: #353535;
        font-size: 20pt;
        font-weight: 600;
        margin-right: 10px;
      }

      .tag-item{
        font-size: 8pt;
        font-weight: 400;
        color: #353535;
        background-color: rgba(0,0,0,.2);
        padding: 5px 10px;
        border-radius: 4px;
      }
    }

    .main-title {
      font-size: 34pt;
      color: #353535;
    }

    .button-box {
      width: fit-content;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 20px;

      .button-item {
        width: fit-content;
        color: #ffffff;
        font-size: 12pt;
        font-weight: 400;
        text-decoration: none;
        padding: 5px 20px;
        line-height: 30px;
        background-color: #888888;
        border-radius: 22px;
        transition: all 200ms ease-in-out;

        &.primary {
          color: #ffffff;
          border: 1px solid #1f1f1f;
          background-color: #1f1f1f;

          &:hover {
            background-color: rgba(0, 0, 0, 1);
            transition: all 200ms ease-in-out;
          }
        }

        &:hover {
          background-color: #777777;
          padding: 5px 25px;
          transition: all 200ms ease-in-out;
        }
      }
    }
  }
}

.screenshot-box {
  width: 80%;
  max-width: 1000px;
  min-height: 250px;
  display: block;
  margin: -130px auto 50px auto;
  position: relative;
  z-index: 50;
}


.black-trans-box {
  width: 100%;
  border-color: #353535 transparent;
  border-width: 0 4000px 300px;
  border-style: solid;
  content: "";
  margin-top: -380px;
}

.white-trans-box{
  border-color: #ffffff transparent;
  border-width: 0 4000px 300px;
  border-style: solid;
  content: "";
  margin-top: -280px;
}

.home-view {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  .module-box {
    width: 100%;

    .module-box-container {
      width: 100%;
      max-width: 1200px;
      padding: 40px 20px;
      margin: 0 auto;
      box-sizing: border-box;

      .module-title{
        margin: 0 0 20px 0;
        font-size: 26pt;
      }

      &.description{
        p{
          font-size: 17pt;
          display: block;
          margin: 30px 0;
          font-weight: 400;
          line-height: 150%;

          span{
            font-weight: bold;
            color: #ffffff;
          }
        }
      }

      &.function-gallery-box{
        width: 100%;
        background-color: #000000;
        border-radius: 16px;
        position: relative;
        z-index: 50;

        .function-gallery-classify{
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-wrap: wrap;
          gap: 10px;
          padding: 0 20px 30px;

          .item{
            line-height: 30px;
            font-weight: 400;
            font-size: 20px;
            padding: 8px 20px;
            border: 1px solid #d9d9d9;
            border-radius: 24px;
            cursor: pointer;
            transition: all 200ms ease-in-out;

            &:hover{
              background-color: rgba(255,255,255,.1);
              color: #ffffff;
              font-weight: bold;
              border: 1px solid #ffffff;
              transition: all 200ms ease-in-out;
            }

            &.active{
              background-color: rgba(255,255,255,.1);
              color: #ffffff;
              font-weight: bold;
              border: 1px solid #ffffff;
              transition: all 200ms ease-in-out;
            }
          }
        }

        .function-gallery{
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: flex-start;

          .images-box{
            width: 40%;
            min-width: 200px;
            flex: auto;
            height: fit-content;
            border: 2px solid rgba(255,255,255,.2);
            border-radius: 8px;
            overflow: hidden;
            margin: 0 20px 40px;

            img{
              width: 100%;
              display: block;
              border-radius: 8px;
            }
          }

          .info{
            width: 50%;
            min-width: 200px;
            flex: auto;
            box-sizing: border-box;
            padding: 0 20px;

            .title{
              font-size: 22pt;
              margin-bottom: 20px;
              font-weight: bold;
            }

            .description{
              font-size: 18pt;
              line-height: 160%;
            }
          }
        }
      }

      &.blog-post-box{
        .post-list{
          display: flex;
          flex-wrap: wrap;
          gap: 5px;

          .item{
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            justify-content: flex-end;
            background-color: #888888;
            border-radius: 4px;
            box-sizing: border-box;
            padding: 20px;
            color: #ffffff;
            cursor: pointer;
            background-image: url("@/assets/images/update.jpeg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            transition: transform 200ms ease-in-out;
            position: relative;

            h2{
              position: relative;
              z-index: 1;
              margin-bottom: 5px;
            }

            .info{
              position: relative;
              z-index: 1;
            }

            &:hover{
              transform: scale(110%);
              transition: transform 200ms ease-in-out;
              z-index: 2;
            }

            &.big{
              //width: 100%;
              flex: auto;
              width: 326px;
              min-height: 245px;
            }

            &:after{
              content: "";
              display: block;
              position: absolute;
              z-index: 0;
              left: 0;
              right: 0;
              bottom: 0;
              top: 0;
              background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.7));
            }
          }
        }

        .right-post-list{
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          width: 750px;
          flex: auto;

          >.item{
            width: 326px;
            flex: auto;
            height: 245px;
          }
        }
      }

      &.qa-box{
        .qa-list{
          display: flex;
          flex-wrap: wrap;

          .qa-list-item{
            width: 50%;
            min-width: 250px;
            flex: auto;

            .qa-item{
              margin: 10px;

              .title-box{
                width: 100%;
                height: 50px;
                cursor: pointer;
                transition: all 200ms ease-in-out;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                box-sizing: border-box;
                padding: 0 20px;
                gap: 20px;
                font-size: 15pt;

                .icon{
                  transform: rotate(0);
                  transition: all 200ms ease-in-out;
                }

                &:hover{
                  background-color: #d9d9d9;
                  transition: all 200ms ease-in-out;
                }
              }

              .description{
                box-sizing: border-box;
                padding: 0 20px;
                font-size: 13pt;
                font-weight: normal;
                color: #888888;
                height: 0;
                overflow: hidden;
                transition: all 200ms ease-in-out;
              }

              &.active{
                background-color: rgba(0,0,0,.1);

                .title-box {

                  .icon{
                    transform: rotate(45deg);
                    transition: all 200ms ease-in-out;
                  }

                  &:hover {
                    background-color: #d9d9d9;
                    transition: all 200ms ease-in-out;
                  }
                }


                .description{
                  box-sizing: border-box;
                  height: fit-content;
                  padding: 10px 20px;
                  font-size: 13pt;
                  font-weight: normal;
                  color: #353535;
                  overflow: hidden;
                  transition: all 200ms ease-in-out;
                }
              }
            }
          }
        }
      }
    }



    &.black {
      background-color: #353535;
      color: #d9d9d9;

      a{
        color: #ffffff;
        text-decoration: none;

        &:hover{
          color: #d9d9d9;
          transition: all 200ms ease-in-out;
        }
      }
    }
  }
}
</style>
