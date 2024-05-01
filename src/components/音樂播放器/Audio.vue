<script setup>
import { defineProps } from 'vue'
import {
  playerStyle,
  progressStyle,
  iconStyle,
  other
} from '@/components/音樂播放器/props/index.js'

const props = defineProps({
  ...playerStyle,
  ...progressStyle,
  ...iconStyle,
  ...other
})

</script>

<template>
  <div :style="[
        `width: ${props.playerWidth}`,
        `height: ${props.playerHeight}`,
        `background-color: ${props.playerBackgroundColor}`
       ]">

      <div>
        <a href="javascript:;"
           class="d-inline-block my-1 ms-4">
          <img src="@/assets/元件/音樂播放器/播放.svg"
              class="img-fluid d-inline-block"
              alt="播放icon"
              :style="[
                  `width: ${playIconWidth}`,
                  `height: ${playIconHeight}`
              ]">
        </a>
      </div>
  </div>
  <!-- 繼續把其他的按鈕加入
  加入 class建構函式
  將屬性、方法、事件都在那邊處理封裝好 -->
</template>

<style lang='scss' scope>

</style>
