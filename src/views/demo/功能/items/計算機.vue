<script setup>
import { ref } from 'vue'
// console.log(eval((1+5)*2)) // eslint-disable-line

const data = ref([
  '', '修正', '清除', '倒退',
  '%', '(', ')', '÷',
  '7', '8', '9', '×',
  '4', '5', '6', '－',
  '1', '2', '3', '＋',
  '±', '0', '.', '＝'

])
</script>

<template>
<div class="d-flex justify-content-center align-items-center"
     style="height:95vh;">
  <div class="計算機外殼 p-5">
    <!-- 計算機按鈕 -->
    <ul class="row row-cols-4 g-2 text-center">
      <template v-for="item in data" :key="item">
        <li class="col">
          <button type="button"
                  class="btn btn-計算機按鈕">
            {{ item }}
          </button>
        </li>
      </template>
    </ul>
  </div>
</div>
</template>

<style lang='scss' scope>
.計算機外殼 {
  width: 500px;
  background-color: #f3f3f3;
}
.btn-計算機按鈕 {
  width: 100px;
  height: 70px;
  background-color: #fff;
  border: none;
}
</style>
