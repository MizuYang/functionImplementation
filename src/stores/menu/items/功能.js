import { defineStore } from 'pinia'
import { ref } from 'vue'

export const use功能Store = defineStore('功能', () => {
  // data
  const 功能data = ref({
    menuName: '功能',
    page: [
      {
        routerPath: '',
        pageName: ''
      }
    ]
  })
  console.log(功能data)

  return {
    功能data
  }
})
