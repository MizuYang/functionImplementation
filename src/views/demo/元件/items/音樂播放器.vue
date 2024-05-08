<script setup>
import Audio from '@/components/音樂播放器/Audio.vue'

const options = {
  // 撥放器基本外觀參數
  playerWidth: '',
  playerHeight: '',
  playerTextColor: '',
  playerBackgroundColor: '',

  // 播放進度條
  playerProgressWidth: '',
  playerProgressHeight: '',
  playerProgressBgColor: '',

  // 音量進度條
  soundProgressWidth: '',
  soundProgressHeight: '',
  soundProgressColor: '',

  // 播放按鈕icon
  playIconUrl: '',
  playIconWidth: '',
  playIconHeight: '',

  // 暫停按鈕icon
  pauseIconUrl: '',
  pauseIconWidth: '',
  pauseIconHeight: '',

  // 聲音 icon
  soundIconWidth: '',
  soundIconHeight: '',

  // 點擊播放器才取得音樂 url (非同步)
  async: true
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center px-15"
       style="height:95vh;">
    <Audio :options="options" />
  </div>
</template>

<style lang='scss' scope>

</style>
