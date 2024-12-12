import { defineStore } from "pinia";

export const useMusicPlayer = defineStore('musicPlayer', {
    state: () => ({
        isActive: false,
        loading: false,
        error: null,
        musics: [],
        i: 0,
        currentMusic: new Audio(null),
        autoPlay: true,
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

            if(this.autoPlay) {
                this.currentMusic.addEventListener('ended', this.next);
            }
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
        setCurrentMusic() {
            if (this.currentMusic) {
                this.currentMusic.pause();
                this.currentMusic.currentTime = 0;
            }

            if (this.i >= this.musics.length) this.i = 0;
            if (this.i <= -1) this.i = this.musics.length - 1;

            this.currentMusic.src = this.musics[this.i].src;
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
        }
    }
})