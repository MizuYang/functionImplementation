import { defineStore } from 'pinia'
import { ref } from 'vue'

export const use元件Store = defineStore('元件', () => {
  // data
  const 元件data = ref({
    title: '元件',
    page: [
      // {
      //   routerPath: '',
      //   pageName: ''
      // }
    ]
  })
  return {
    元件data
  }
})
