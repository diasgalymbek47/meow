import { defineStore } from "pinia";

export const useMusicPlayer = defineStore('musicPlayer', {
  state: () => ({
    isActive: false,  // Состояние воспроизведения
    loading: false,
    musics: [],
    i: 0, // Индекс текущей песни
    currentMusic: new Audio(), // Объект аудио
    autoPlay: true, // Автоматическое воспроизведение
    progress: 0, // Прогресс
    duration: { start: '0:00', end: '0:00' }, // Время
    isActiveFav: false, // добавить в избранное
    volume: 1, // регулировка громкости
  }),
  actions: {
    init(arr, auto = true) {
      if (arr) {
        this.musics = arr;
        this.autoPlay = auto;
        this.setCurrentMusic();
      } else {
        throw new Error("Массив пуст!");
      }

      if (this.autoPlay) {
        this.currentMusic.addEventListener('ended', this.next);
      }

      this.currentMusic.addEventListener("play", this.updateProgress);
      this.currentMusic.addEventListener("pause", this.updateProgress);
      this.currentMusic.addEventListener("timeupdate", this.updateProgress);
      this.currentMusic.addEventListener("loadedmetadata", this.setDuration);
    },
    updateProgress() {
      const { currentTime, duration } = this.currentMusic;
      if (duration > 0) {
        this.progress = (currentTime / duration) * 100;
        this.duration.start = this.formatDuration(currentTime);
        this.duration.end = this.formatDuration(duration);
      }
    },
    setDuration() {
      this.duration.end = this.formatDuration(this.currentMusic.duration);
    },
    setCurrentMusic() {
      if (this.currentMusic) {
        this.currentMusic.pause();
        this.currentMusic.currentTime = 0;
      }

      if (this.i >= this.musics.length) this.i = 0;
      if (this.i <= -1) this.i = this.musics.length - 1;

      this.currentMusic.src = this.musics[this.i].src;
    },
    play() {
      this.currentMusic.play();
      this.isActive = true;
    },
    pause() {
      this.currentMusic.pause();
      this.isActive = false;
    },
    togglePlay() {
      if (this.isActive) {
        this.pause();
      } else {
        this.play();
      }
    },
    prev() {
      this.i--;
      this.setCurrentMusic();
      this.play();
    },
    next() {
      this.i++;
      this.setCurrentMusic();
      this.play();
    },
    getMusic() {
      return this.musics[this.i];
    },
    formatDuration(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
      return `${minutes}:${secs}`;
    },
    // Переключение состояния фаворита
    toggleFav() {
      this.isActiveFav = !this.isActiveFav;
    },
    // управление громкостью
    setVolume(volume) {
      if (typeof volume === 'number' && volume >= 0 && volume <= 1) {
        this.volume = volume;
        this.currentMusic.volume = volume;
      } else {
        console.error("невенрное значение громкости", volume)
      }
    },

  }
});
