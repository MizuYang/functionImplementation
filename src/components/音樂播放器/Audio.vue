<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '480'
  },
  height: {
    type: String,
    default: '40'
  },
  textColor: {
    type: String,
    default: '#fff'
  },
  volProgressColor: {
    type: String,
    default: '#fff'
  },
  backgroundColor: {
    type: String,
    default: '#484848'
  },
  playIconUrl: { // 音樂播放箭頭按鈕的 icon url
    type: String,
    default: '@/assets/元件/音樂播放器/播放.svg'
  },
  playIconWidth: {
    type: String,
    default: '32'
  },
  playIconHeight: {
    type: String,
    default: '32'
  },
  pauseIconUrl: { // 音樂播放的暫停 icon url
    type: String,
    default: '@/assets/元件/音樂播放器/暫停.svg'
  },
  pauseIconWidth: {
    type: String,
    default: '32'
  },
  pauseIconHeight: {
    type: String,
    default: '32'
  },
  volUpIconUrl: { // 大音量 icon url
    type: String,
    default: '@/assets/元件/音樂播放器/音量大.svg'
  },
  volUpIconWidth: {
    type: String,
    default: '22'
  },
  volUpIconHeight: {
    type: String,
    default: '22'
  },
  volDownIconUrl: { // 小音量 icon url
    type: String,
    default: '@/assets/元件/音樂播放器/音量小.svg'
  },
  volDownIconWidth: {
    type: String,
    default: '22'
  },
  volDownIconHeight: {
    type: String,
    default: '22'
  },
  async: { // true: 點擊播放器才取得音樂 url
    type: Boolean,
    default: true
  }
})
</script>

<template>
321
</template>

<style lang='scss' scope>

</style>
