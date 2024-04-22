<script setup>
import { ref, watchEffect } from 'vue'
import imgUrl from '@/assets/images/demo/功能/圖片放大鏡.jpg'

// data
const zoom = ref(2)

// 設定圖片倍率
watchEffect(() => {
  const zoomValue = zoom.value
  // setProperty
  const el = document.querySelector('.zoom-img')
  if (el) el.style.setProperty('--zoom', zoomValue)
})
</script>

<template>
  <div class="position-absolute-center-200 p-15">
    <div class="d-flex">
      <!-- 左側原始圖 -->
      <div class="me-15">
        <img src="@/assets/images/demo/功能/圖片放大鏡.jpg"
             alt="圖片放大鏡"
             width="300"
             height="300">
      </div>
      <!-- 右側放大圖 -->
      <div style="max-width:300px;
                  max-height:300px;
                  overflow: hidden;">
        <div class="zoom-img"
             :style="[`background-image:url(${imgUrl})`]">
        </div>
      </div>
    </div>

    <!-- 功能設定 -->
    <div class="mt-15">
      <div class='form-floating mb-3'>
        <input type='number'
               class='form-control'
               id='floatingInput'
               placeholder='2'
               min="1"
               step="0.5"
               v-model="zoom">
        <label for='floatingInput'>放大倍率</label>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scope>
.zoom-img {
  --zoom: 2;
  width: calc(var(--zoom) * 300px);
  height: calc(var(--zoom) * 300px);
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -300px 0;
}
</style>
