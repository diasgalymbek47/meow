import { defineStore } from "pinia";
import axios from "axios";

export const useMusicsStore = defineStore('musics', {
    state: () => ({
        musics: [], // Здесь хранятся данные о музыке
        loading: false, // Индикатор загрузки
        error: null, // Ошибка, если запрос не удался
    }),
    actions: {
        async getMusics() {
            this.loading = true; // Устанавливаем индикатор загрузки
            this.error = null; // Сбрасываем предыдущее значение ошибки
            try {
                const response = await axios.get('https://diasgalymbek47.github.io/music/data.json');
                this.musics = response.data; // Заполняем массив музыки полученными данными
            } catch (err) {
                this.error = `Ошибка загрузки: ${err.message}`; // Сохраняем сообщение об ошибке
            } finally {
                this.loading = false; // Завершаем процесс загрузки
            }
        },
    },
});
