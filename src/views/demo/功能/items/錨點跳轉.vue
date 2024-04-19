<script setup>
import { ref, onMounted } from 'vue'

// data
const data = ref([])
const currentTarget = ref('')

onMounted(() => {
  data.value.length = 100
  getData()
})

function getData () {
  for (let i = 0; i < data.value.length; i++) {
    data.value[i] = {
      title: `title-${i + 1}`,
      id: String(Math.random()).split('.')[1]
    }
  }
}
function goToTitlePosition (item) {
  const el = document.querySelector(`#title-${item.id}`)
  const { top, height } = el.getBoundingClientRect()
  const elCenter = top + height / 2
  const screenHeight = document.querySelector('#nav').clientHeight
  const position = elCenter - (screenHeight / 4)
  currentTarget.value = item.id
  goToPosition(position)
}
function goToPosition (position) {
  window.scrollTo(0, position)
}
</script>

<template>

  <h1 class="text-30 ps-15">文章列表</h1>

  <!-- 錨點 -->
  <div class="mb-10 px-15">
    <p class="text-20 py-5">錨點</p>
    <ul class="row row-cols-10 g-5">
      <template v-for="(item,idx) in data" :key="`a-link-${item.id}`">
        <li class="col">
          <a href="javascript:;"
             class="d- text-light p-2"
             :class="currentTarget===item.id?'active-style':'default-style'"
             @click="goToTitlePosition(item)">
            {{ idx+1 }}
          </a>
        </li>
      </template>
    </ul>
  </div>

  <!-- 文章列表 -->
  <ul class="px-15">
    <template v-for="item in data" :key="`id-${item.id}`">
      <li class="my-5 p-3"
          :class="{'active-style':currentTarget===item.id}">
        <h2 class="text-20 fw-bold-9"
            :id="`title-${item.id}`">
          {{ item.title }}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum dolores reprehenderit. Esse autem ab iusto, sint dolorum aliquid vitae voluptatibus rem accusantium praesentium pariatur eligendi veritatis quidem? Vitae, eum.
          Fugit adipisci repellat quos maiores, assumenda est vero aliquam quas, consequatur sint cupiditate ut, quibusdam quod libero. Temporibus excepturi ad error voluptates ipsam, commodi voluptas dolorem deserunt facere cum voluptatem.
        </p>
      </li>
    </template>
  </ul>

  <!-- 向上錨點 -->
  <a href="javascript:;"
     class="btn-top text-light border rounded-pill p-5 px-7"
     @click="goToPosition(0)">
    電梯 <br /> 向上
  </a>
</template>

<style lang='scss' scope>
.active-style {
  background-color: #7b7fad;
}
.default-style {
  background-color: #484848;;
}
.btn-top {
  position: fixed;
  right:30px;
  bottom:150px;
  background-color: #484848;

  &:hover {
    background-color: #7b7fad;
  }
}
</style>
