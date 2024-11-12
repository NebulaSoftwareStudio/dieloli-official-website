/**
 * 路由拦截器
 */
import router from './index'
// 引入 nprogress 相关方法
import { close, start } from './nprogress';

// 重写浏览器标题
function rewriteTitle(toRoute){
  let windowDocumentTitle = "DieLoli 死亡萝莉：基于元胞算法的人生模拟游戏";
  if(toRoute.meta.title){
    windowDocumentTitle = toRoute.meta.title + " - " + windowDocumentTitle
  }
  window.document.title = windowDocumentTitle;
}

/**
 * 路由拦截器
 */
// 路由前置拦截器
router.beforeEach((to, from, next) => {
  /**
   * 浏览器 Title 替换
   */
  rewriteTitle(to)

  next()

  // 开启进度条
  start()
})

// 路由后置拦截器
router.afterEach(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  // 关闭进度条
  close();
});

