<script setup>
import { ref } from 'vue'
console.log(eval((1+2)*3-(4+15))) // eslint-disable-line

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

    <!-- 計算機面板 -->
    <div class="text-end pt-10 pb-5 pe-5 mx-5 mt-5 mb-10"
         style="background-color:#ff00c817;">
      <!-- 公式區塊 -->
      <div>
        <p style="letter-spacing: 4px;">
          (1+2)*3-(4+5)
        </p>
      </div>

      <!-- 計算結果區塊 -->
      <div>
        <p style="font-size:45px;
                  letter-spacing: 4px;
                  line-height: 1.2;">
          123456
        </p>
      </div>
    </div>

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

  &:hover {
    background-color: #cbc9c9;
  }
  &:active {
    background-color: #dcdbdb;
  }
}
</style>
