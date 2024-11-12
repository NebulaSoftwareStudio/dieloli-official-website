import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: "首页"
    },
    redirect: "/home",
    component:() => import('@/views/FrameLayout.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: "首页"
        },
        component:() => import('@/views/HomeView.vue')
      },
      {
        path: '/download',
        name: 'download',
        meta: {
          title: "下载"
        },
        component:() => import('@/views/DownloadView.vue')
      },
      {
        path: '/policy',
        name: 'policy',
        meta: {
          title: "政策"
        },
        component:() => import('@/views/PolicyView.vue')
      },
      {
        path: '/community',
        name: 'community',
        meta: {
          title: "社区"
        },
        component:() => import('@/views/CommunityView.vue')
      },
      {
        path: '/develop-path',
        name: 'developPath',
        meta: {
          title: "开发路线图"
        },
        component:() => import('@/views/DevelopPathView.vue')
      },
      {
        path: '/change-log',
        name: 'changeLog',
        meta: {
          title: "最新变化"
        },
        component:() => import('@/views/ChangeLogList.vue')
      },
      {
        path: '/update-note',
        name: 'updateNoteDetail',
        meta: {
          title: "更新日志详情"
        },
        component:() => import('@/views/updateNoteDetail.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
