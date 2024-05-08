import defaultAudioUrl from '@/assets/元件/音樂播放器/海浪.mp3'

export const other = {
  audioUrl: {
    type: String,
    default: defaultAudioUrl
  },
  // 其他
  async: { // true: 點擊播放器才取得音樂 url
    type: Boolean,
    default: true
  }
}
