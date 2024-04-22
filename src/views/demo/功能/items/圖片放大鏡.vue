<script setup>
import { ref, watchEffect } from 'vue'
import imgUrl from '@/assets/images/demo/功能/圖片放大鏡.jpg'

// data
const zoom = ref(2)
const imgWidth = ref(300)
const imgHeight = ref(300)
const glassTop = ref(0)
const glassLeft = ref(0)
const throttleMouseMove = throttle(30, mousemove)

const root = document.documentElement
root.style.setProperty('--img-width', `${imgWidth.value}px`)
root.style.setProperty('--img-height', `${imgHeight.value}px`)

// 設定圖片倍率
watchEffect(() => {
  const zoomValue = zoom.value
  // setProperty
  const el = document.querySelector('.zoom-img')
  if (el) el.style.setProperty('--zoom', zoomValue)
})

function mousemove (e) {
  // 滑鼠在當前容器中的相對位置
  console.log('mousemove', e)

  // 計算出放大鏡寬高
  const glassW = imgWidth.value / 4
  const glassH = imgHeight.value / 4
  // 將滑鼠在校正到放大鏡中間
  const yMiddle = e.offsetY - (glassH / 2)
  const xMiddle = e.offsetX - (glassW / 2)
  console.log('xMiddle', xMiddle)
  console.log('yMiddle', yMiddle)

  // X邊界檢查 (放大鏡不得超出圖片邊界)
  const leftPass = xMiddle > 0
  const rightPass = xMiddle + glassW <= imgWidth.value
  const isValiedX = leftPass && rightPass
  // X軸 不超過圖片的左、右邊才賦予值
  if (isValiedX) {
    glassLeft.value = xMiddle
  } else {
    // 直接賦予邊界的值上去
    if (!leftPass) {
      // 將放大鏡 left 位置設定在圖片左邊
      glassLeft.value = 0
    } else if (!rightPass) {
      // 將放大鏡 left 位置設定在圖片右邊
      glassLeft.value = imgWidth.value - glassW
    }
  }

  // Y邊界檢查 (放大鏡不得超出圖片邊界)
  const topPass = yMiddle > 0
  const bottomPass = yMiddle + glassH <= imgHeight.value
  const isValiedY = topPass && bottomPass
  // Y軸 不超過圖片的上、下面才賦予值
  if (isValiedY) {
    glassTop.value = yMiddle
  } else {
    if (!topPass) {
      // 將放大鏡 left 位置設定在圖片上面
      glassTop.value = 0
    } else if (!bottomPass) {
      // 將放大鏡 left 位置設定在圖片下面
      glassTop.value = imgHeight.value - glassH
    }
  }
  console.log('offsetX', e.offsetX)
  console.log('offsetY', e.offsetY)
}
function throttle (delay, callback) {
  // 函式執行後在指定時間內不論呼叫函式多少次, 都不會執行
  let lastTime = Date.now()

  return function (e) {
    const now = Date.now()
    if (now - lastTime >= delay) {
      callback(e)
      // 初始化
      lastTime = now
    }
  }
}
</script>

<template>
  <div class="position-absolute-center-200 p-15">
    <div class="d-flex">
      <!-- 左側原始圖 -->
      <div class="position-relative me-15"
           style="overflow: hidden;"
           :style="[`max-width:${imgWidth}px;`,
                    `max-height:${imgHeight}px;`]">
        <div>
          <img src="@/assets/images/demo/功能/圖片放大鏡.jpg"
               class="d-block"
               alt="圖片放大鏡"
               :width="imgWidth"
               :height="imgHeight">
        </div>

        <!-- 放大鏡 -->
        <div class="position-absolute d-block"
             style="background-color: #ffffff56;"
             :style="[
              `width: ${imgWidth / 4}px`,
              `height: ${imgHeight / 4}px`,
              `top:${glassTop}px`,
              `left:${glassLeft}px`
             ]"
             >
        </div>

        <!-- 蓋在最上方的透明元素, 方便滑鼠事件取得 x, y -->
        <div class="position-absolute top-0 bottom-0 start-0 end-0 z50"
             @mousemove="throttleMouseMove">
        </div>
      </div>

      <!-- 右側放大圖 -->
      <div style="overflow: hidden;"
           :style="[`max-width:${imgWidth}px;`,
                    `max-height:${imgHeight}px;`]">
        <div class="zoom-img"
             :style="[`background-image:url(${imgUrl})`,
                      `width:${zoom * imgWidth}px`,
                      `height:${zoom * imgHeight}px`]">
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
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -300px 0;
}
</style>
