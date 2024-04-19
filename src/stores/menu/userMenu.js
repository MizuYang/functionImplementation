// import { ref } from 'vue'
import { defineStore } from 'pinia'
import { use功能Store } from '@/stores/menu/items/功能.js'
import { use考題Store } from '@/stores/menu/items/考題.js'
import { use元件Store } from '@/stores/menu/items/元件.js'

const { 功能data } = use功能Store()
const { 考題data } = use考題Store()
const { 元件data } = use元件Store()

export const useMenuStore = defineStore('menuStore', () => {
  return {
    功能data,
    考題data,
    元件data
  }
})
