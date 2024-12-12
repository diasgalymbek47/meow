import { defineStore } from "pinia";

export const useMusicPlayer = defineStore('musicPlayer', {
    state: ()=> ({
        isActive: false,
        loading: false,
        error: null,
        currentMusic: null,
    })
})