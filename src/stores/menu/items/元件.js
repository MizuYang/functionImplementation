import { defineStore } from 'pinia'
import { ref } from 'vue'

export const use元件Store = defineStore('元件', () => {
  // data
  const 元件data = ref({
    title: '元件',
    page: [
      {
        pageName: '音樂播放器'
        // routerPath: '/components/page1'
      }
    ]
  })

  getRouterPath()

  function getRouterPath () {
    元件data.value.page.forEach((item, idx) => {
      // 例: routerPath: '/components/page1'
      item.routerPath = `/components/page${idx + 1}`
    })
  }

  return {
    元件data
  }
})
