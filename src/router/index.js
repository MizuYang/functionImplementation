import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '首頁',
    meta: {
      title: '首頁'
    },
    component: () => import('@/views/HomeView.vue'),
    children: [
      { // 功能
        path: 'function',
        name: '功能區塊',
        meta: {
          title: '功能區塊'
        },
        component: () => import('@/views/demo/功能/功能.vue'),

        children: [
          {
            path: 'page1',
            name: '錨點跳轉',
            meta: {
              title: '錨點跳轉'
            },
            component: () => import('@/views/demo/功能/items/錨點跳轉.vue')
          },
          {
            path: 'page2',
            name: '計算機',
            meta: {
              title: '計算機'
            },
            component: () => import('@/views/demo/功能/items/計算機.vue')
          },
          {
            path: 'page3',
            name: '教室隨機點名',
            meta: {
              title: '教室隨機點名'
            },
            component: () => import('@/views/demo/功能/items/教室隨機點名.vue')
          },
          {
            path: 'page2',
            name: '圖片放大鏡',
            meta: {
              title: '圖片放大鏡'
            },
            component: () => import('@/views/demo/功能/items/圖片放大鏡.vue')
          }
        ]
      },
      { // 考題
        path: '考題',
        name: '考題區塊',
        meta: {
          title: '考題區塊'
        },
        component: () => import('@/views/demo/考題/考題.vue'),

        children: [
          // {
          //   path: '',
          //   name: '',
          //   meta: {
          //     title: ''
          //   },
          //   component: () => import('@/views/demo/考題/items/.vue')
          // }
        ]
      },
      { // 元件
        path: 'components',
        name: '元件區塊',
        meta: {
          title: '元件區塊'
        },
        component: () => import('@/views/demo/元件/元件.vue'),

        children: [
          {
            path: 'page1',
            name: '音樂播放器',
            meta: {
              title: '音樂播放器'
            },
            component: () => import('@/views/demo/元件/items/音樂播放器.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.fullPath.match('/')) {
      return {
        top: 0 //* 切換頁面時會切換到最上面的位置
      }
    }
    return {}
  }
})
// 頁面跳轉時 更改網頁title
router.beforeEach((to, from, next) => {
  const { title } = to.meta
  document.title = title

  next()
})

export default router
