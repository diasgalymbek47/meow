import { defineStore } from 'pinia';

export const useStatesElement = defineStore('statesElement', {
    state: () => ({
        darkTheme: false
    })
})