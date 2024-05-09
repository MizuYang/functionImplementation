<script setup>
import { ref, computed, onMounted, defineProps } from 'vue'
import { AudioPlayer } from '@/utils/class/audioPlayer.js'
import {
  playerStyle,
  progressStyle,
  iconStyle,
  other
} from '@/components/音樂播放器/props/index.js'
import playIcon from '@/assets/元件/音樂播放器/播放.svg'
import pauseIcon from '@/assets/元件/音樂播放器/暫停.svg'

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

// data
const audioPlayer = ref(null)
console.log(props)

onMounted(() => {
  audioPlayer.value = new AudioPlayer(audioPlayerUrl.value)
})

function playToggle () {
  audioPlayer.value.playToggle()
}

const audioPlayerUrl = computed(() => {
  return props.options.audioUrl || props.audioUrl
})

const playToggleIcon = computed(() => {
  return audioPlayer?.value?.paused ? playIcon : pauseIcon
})

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

const soundProgressStyleComputed = computed(() => {
  return {
    width: props.options.soundProgressWidth || props.soundProgressWidth,
    height: props.options.soundProgressHeight || props.soundProgressHeight,
    backgroundColor: props.options.soundProgressColor || props.soundProgressColor
  }
})

const playerProgressColorComputed = computed(() => {
  return props.options.playerProgressColor || props.playerProgressColor
})
</script>

<template>
  <div class="d-flex align-items-center"
       :style="playerStyleConputed">

      <div class="d-flex align-items-center">
        <!-- 播放按鈕, 暫停按鈕 -->
        <a href="javascript:;"
           class="d-inline-block ms-4"
           @click="playToggle">
          <img :src="playToggleIcon"
                class="img-fluid d-inline-block"
                alt="播放icon"
                :style="playIconStyleComputed">
        </a>

        <!-- 進度條 -->
        <div class="d-flex align-items-center">
          <progress class="audio-progress d-inline-block raduis-8 cursor-pointer ms-3"
                    value="30"
                    min="0"
                    max="100"
                    :style="[`${progressStyleComputed}`,
                            `--audio-progress-color:${playerProgressColorComputed};`]">
          </progress>
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

        <!-- 音量進度條 -->
        <div class="d-flex align-items-center">
          <progress class="d-inline-block raduis-8 cursor-pointer ms-3"
                    value="30"
                    min="20"
                    max="100"
                    :style="soundProgressStyleComputed">
          </progress>
        </div>
      </div>
  </div>
  <!-- 繼續把其他的按鈕加入
  加入 class建構函式
  將屬性、方法、事件都在那邊處理封裝好 -->
</template>

<style lang='scss' scope>
progress.audio-progress::-moz-progress-bar {
  background-color: var(--audio-progress-color);
}
progress.audio-progress::-webkit-progress-value {
  background-color: var(--audio-progress-color);
}
</style>
