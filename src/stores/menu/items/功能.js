import { defineStore } from 'pinia'
import { ref } from 'vue'

export const use功能Store = defineStore('功能', () => {
  // data
  const 功能data = ref({
    title: '功能',
    page: [
      {
        routerPath: '/function/page1',
        pageName: '錨點跳轉'
      }
    ]
  })

  return {
    功能data
  }
})
