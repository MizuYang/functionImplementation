class AudioPlayer {
  constructor (audioUrl) {
    this.audio = new Audio(audioUrl)
    this.paused = true
  }
}

AudioPlayer.prototype.playToggle = function () {
  this.audio.paused ? this.audio.play() : this.audio.pause()
  this.paused = this.audio.paused
}

export { AudioPlayer }
