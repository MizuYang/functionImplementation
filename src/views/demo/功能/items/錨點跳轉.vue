<script setup>
import { ref, onMounted } from 'vue'

// data
const data = ref([])

onMounted(() => {
  data.value.length = 100
  getData()
  console.log(data.value)
})

function getData () {
  for (let i = 0; i < data.value.length; i++) {
    data.value[i] = {
      title: `title-${i + 1}`,
      id: String(Math.random()).split('.')[1]
    }
  }
}
</script>

<template>

  <h1 class="text-30 ps-15">文章列表</h1>
  <ul class="px-15">
    <template v-for="item in data" :key="`id-${item.id}`">
      <li class="my-5">
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
</template>

<style lang='scss' scope></style>
