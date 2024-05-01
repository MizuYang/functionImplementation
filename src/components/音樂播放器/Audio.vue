<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  // 播放器外觀
  playerWidth: {
    type: String,
    default: '480px'
  },
  playerHeight: {
    type: String,
    default: '40px'
  },
  playerTextColor: {
    type: String,
    default: '#fff'
  },
  playerBackgroundColor: {
    type: String,
    default: '#484848'
  },

  // 進度條相關
  playerProgressWidth: {
    type: String,
    default: '200px'
  },
  playerProgressHeight: {
    type: String,
    default: '5px'
  },
  playerProgressBgColor: {
    type: String,
    default: '#fff'
  },
  volProgressWidth: {
    type: String,
    default: '53px'
  },
  volProgressHeight: {
    type: String,
    default: '5px'
  },
  volProgressColor: {
    type: String,
    default: '#fff'
  },

  // icon
  // 音樂播放按鈕
  // playIconUrl: {
  //   type: String,
  //   default: '@/assets/元件/音樂播放器/播放.svg'
  // },
  playIconWidth: {
    type: String,
    default: '32px'
  },
  playIconHeight: {
    type: String,
    default: '32px'
  },

  // 音樂暫停按鈕
  // pauseIconUrl: {
  //   type: String,
  //   default: '@/assets/元件/音樂播放器/暫停.svg'
  // },
  pauseIconWidth: {
    type: String,
    default: '32px'
  },
  pauseIconHeight: {
    type: String,
    default: '32px'
  },

  // 大音量 icon
  // volUpIconUrl: {
  //   type: String,
  //   default: '@/assets/元件/音樂播放器/音量大.svg'
  // },
  volUpIconWidth: {
    type: String,
    default: '22px'
  },
  volUpIconHeight: {
    type: String,
    default: '22px'
  },

  // 小音量 icon
  // volDownIconUrl: {
  //   type: String,
  //   default: '@/assets/元件/音樂播放器/音量小.svg'
  // },
  volDownIconWidth: {
    type: String,
    default: '22px'
  },
  volDownIconHeight: {
    type: String,
    default: '22px'
  },

  // 其他
  async: { // true: 點擊播放器才取得音樂 url
    type: Boolean,
    default: true
  }
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
