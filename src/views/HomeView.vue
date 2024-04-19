<script setup>
import { ref, onMounted } from 'vue'
import Menu from '@/components/layout/Menu.vue'

// data
const bodyWidth = document.body.clientWidth
console.log(bodyWidth)
const menuWidth = ref(200)

onMounted(() => {
  getMenuWidth()
})

function getMenuWidth () {
  const menu = document.querySelector('#menu')
  menuWidth.value = menu.clientWidth
}
</script>

<template>
  <Menu />

  <div :style="`margin-left:${menuWidth}px;
                max-width:${bodyWidth}px`">

  </div>
</template>

<style lang='scss' scope></style>
