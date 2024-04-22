<script setup>
import imgUrl from '@/assets/images/demo/功能/圖片放大鏡.jpg'

</script>

<template>
  <div class="position-absolute-center-200 d-flex p-15">
    <!-- 左側原始圖 -->
    <div class="me-15">
      <img src="@/assets/images/demo/功能/圖片放大鏡.jpg"
           alt="圖片放大鏡"
           width="300"
           height="300">
    </div>

    <!-- 右側放大圖 -->
    <div>
      <div class="zoom-img"
           :style="`background-image:url(${imgUrl})`"></div>
    </div>
  </div>
</template>

<style lang='scss' scope>
.zoom-img {
  width: 300px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
