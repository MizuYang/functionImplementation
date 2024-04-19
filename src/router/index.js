import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首頁'
    },
    component: () => import('@/views/HomeView.vue'),
    children: [
      { // 功能
        path: '/功能',
        name: '功能區塊',
        meta: {
          title: '功能區塊'
        },
        children: [
          // {
          //   path: '/',
          //   name: '',
          //   meta: {
          //     title: ''
          //   },
          //   component: () => import('')
          // }
        ]
      },
      { // 考題
        path: '/考題',
        name: '考題區塊',
        meta: {
          title: '考題區塊'
        },
        children: [
          // {
          //   path: '/',
          //   name: '',
          //   meta: {
          //     title: ''
          //   },
          //   component: () => import('')
          // }
        ]
      },
      { // 元件
        path: '/元件',
        name: '元件區塊',
        meta: {
          title: '元件區塊'
        },
        children: [
          // {
          //   path: '/',
          //   name: '',
          //   meta: {
          //     title: ''
          //   },
          //   component: () => import('')
          // }
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
