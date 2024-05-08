<script setup>
import { computed, defineProps } from 'vue'
import {
  playerStyle,
  progressStyle,
  iconStyle,
  other
} from '@/components/音樂播放器/props/index.js'

const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  },
  ...playerStyle,
  ...progressStyle,
  ...iconStyle,
  ...other
})

console.log(props)

// 有 props options 配置選項就用 props.options 的值, 否則用 props 預設值
const playerStyleConputed = computed(() => {
  return {
    width: props.options.playerWidth || props.playerWidth,
    height: props.options.playerHeight || props.playerHeight,
    backgroundColor: props.options.playerBackgroundColor || props.playerBackgroundColor
  }
})

const progressStyleComputed = computed(() => {
  return {
    width: props.options.playerProgressWidth || props.playerProgressWidth,
    height: props.options.playerProgressHeight || props.playerProgressHeight,
    backgroundColor: props.options.playerProgressBgColor || props.playerProgressBgColor
  }
})

const playIconStyleComputed = computed(() => {
  return {
    maxWidth: props.options.playIconWidth || props.playIconWidth,
    height: props.options.playIconHeight || props.playIconHeight
  }
})

const playerTextStyleComputed = computed(() => {
  return {
    color: props.options.playerTextColor || props.playerTextColor
  }
})

const soundIconStyleComputed = computed(() => {
  return {
    width: props.options.soundIconWidth || props.soundIconWidth,
    height: props.options.soundIconHeight || props.soundIconHeight
  }
})

</script>

<template>
  <div class="d-flex align-items-center"
       :style="playerStyleConputed">

      <div class="d-flex align-items-center">
        <!-- 播放按鈕 -->
        <a href="javascript:;"
           class="d-inline-block ms-4">
          <img src="@/assets/元件/音樂播放器/播放.svg"
               class="img-fluid d-inline-block"
               alt="播放icon"
               :style="playIconStyleComputed">
        </a>

        <!-- 進度條 -->
        <div class="d-flex align-items-center">
          <span class="d-inline-block raduis-8 ms-3"
                :style="progressStyleComputed">
          </span>
        </div>

        <!-- 音樂時間 -->
        <p class="ps-8"
           :style="playerTextStyleComputed">
          00:00 / 01:28
        </p>

        <!-- 音量 icon -->
        <a href="javascript:;"
           class="d-inline-block ms-4">
          <img src="@/assets/元件/音樂播放器/音量大.svg"
              class="img-fluid d-block"
              alt="聲音icon"
              :style="soundIconStyleComputed">
        </a>
      </div>
  </div>
  <!-- 繼續把其他的按鈕加入
  加入 class建構函式
  將屬性、方法、事件都在那邊處理封裝好 -->
</template>

<style lang='scss' scope>

</style>
