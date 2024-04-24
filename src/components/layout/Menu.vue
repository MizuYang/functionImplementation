<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMenuStore } from '@/stores/menu/userMenu.js'

const { 功能data } = useMenuStore()
const { 考題data } = useMenuStore()
const { 元件data } = useMenuStore()

// data
const curPageId = ref('')

const route = useRoute()
watch(() => route.path, () => {
  curPageId.value = route.path
}, { immediate: true })

</script>

<template>
  <nav id="nav">
    <div class="text-20 text-center" style="margin-bottom: 30px;">
      <RouterLink to='/'
        class="btn-home d-block w-100 py-2"
        active-class='active'>
        <span>首頁</span>
      </RouterLink>
    </div>
    <!-- 功能 -->
    <template v-if="功能data.page.length">
      <h3 class="text-center text-light fw-bold-9 pt-5">
        {{ 功能data.title }}
      </h3>
      <ul class="menu px-2 py-5"
          id="menu">
        <template v-for="item in 功能data.page" :key="item.pageName">
          <li>
            <RouterLink :to='`${item.routerPath}`'
                        class="btn-menu d-block w-100 ps-3 py-2"
                        :class="{'active-page': curPageId===item.routerPath}"
                        active-class='active'>
              <span>{{ item.pageName }}</span>
            </RouterLink>
          </li>
        </template>
      </ul>
    </template>

    <!-- 考題 -->
    <template v-if="考題data.page.length">
      <h3 class="text-center text-light fw-bold-9 pt-5">
        {{ 考題data.title }}
      </h3>
      <ul class="menu px-2 py-5"
          id="menu">
        <template v-for="item in 考題data.page" :key="item.pageName">
          <li>
            <RouterLink :to='item.routerPath'
                        class="d-block w-100 ps-3 py-2"
                        :class="{'active-page': curPageId===item.routerPath}"
                        active-class='active'>
              <span>{{ item.pageName }}</span>
            </RouterLink>
          </li>
        </template>
      </ul>
    </template>

    <!-- 元件 -->
    <template v-if="元件data.page.length">
      <h3 class="text-center text-light fw-bold-9 pt-5">
        {{ 元件data.title }}
      </h3>
      <ul class="menu px-2 py-5"
          id="menu">
        <template v-for="item in 元件data.page" :key="item.pageName">
          <li>
            <RouterLink :to='item.routerPath'
                        class="d-block w-100 ps-3 py-2"
                        :class="{'active-page': curPageId===item.routerPath}"
                        active-class='active'>
              <span>{{ item.pageName }}</span>
            </RouterLink>
          </li>
        </template>
      </ul>
    </template>
  </nav>
</template>

<style lang='scss' scope>
nav {
  position: fixed;
  width:200px;
  min-height: 100vh;
  background-color:#535353;
}
.menu li:nth-child(1) {
  border-top: 1px solid #fff;
}
.menu li {
  border-bottom: 1px solid #fff;
}
.menu li > a {
  color: #fff;

  &:hover {
    color: #fff;
    background-color:#6f6f6f;
  }
  &:active {
    color: #fff;
    background-color:rgba(244, 221, 239, 0.724);
  }
  &:hover > span {
    font-weight: 700;
    margin-left: 5px;
    transition: .1s margin-left linear;
  }
}
.btn-home {
  color: #fff;
  background-color:#6f6f6f;

  &:hover {
    color: #fff;
    background-color:#858484;
  }
}
.active-page {
  background-color:#9c75d4 !important;

  &:active {
    background-color:#9d75d4c6 !important;
  }
}
</style>
