<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Menu from '@/components/layout/Menu.vue'

// data
const bodyWidth = document.body.clientWidth
const menuWidth = ref(200)

const route = useRoute()
const isHome = ref(null)

watch(() => route.path, () => {
  isHome.value = route.name === '首頁'
})

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

  <div class="py-5"
       :style="`margin-left:${menuWidth}px;
                max-width:${bodyWidth}px`">

      <template v-if="isHome">
        我是首頁XD
      </template>
      <template v-else>
        <RouterView />
      </template>
  </div>
</template>

<style lang='scss' scope></style>
