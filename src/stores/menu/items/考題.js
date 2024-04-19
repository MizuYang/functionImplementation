import { defineStore } from 'pinia'
import { ref } from 'vue'

export const use考題Store = defineStore('考題', () => {
  // data
  const 考題data = ref({
    title: '考題',
    page: [
      // {
      //   routerPath: '',
      //   pageName: ''
      // }
    ]
  })
  return {
    考題data
  }
})
