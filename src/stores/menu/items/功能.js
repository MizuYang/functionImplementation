import { defineStore } from 'pinia'
import { ref } from 'vue'

export const use功能Store = defineStore('功能', () => {
  // data
  const 功能data = ref({
    title: '功能',
    page: [
      {
        pageName: '錨點跳轉'
        // routerPath: '/function/page1'
      },
      {
        pageName: '計算機'
      },
      {
        pageName: '教室隨機點名'
      },
      {
        routerPath: '/function/page2',
        pageName: '圖片放大鏡'
      }
    ]
  })

  getRouterPath()

  function getRouterPath () {
    功能data.value.page.forEach((item, idx) => {
      // 例: routerPath: '/function/page1'
      item.routerPath = `/function/page${idx + 1}`
    })
  }

  return {
    功能data
  }
})
