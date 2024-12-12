<script setup>
import { useMusicsStore } from "@/stores/musics";
import { onMounted } from "vue";

// Подключаем хранилище
const musicStore = useMusicsStore();

// Загружаем данные при монтировании компонента
onMounted(() => {
    musicStore.getMusics(); // Вызываем действие для получения музыки
});
</script>

<template>
    <!-- Индикатор загрузки -->
    <div v-if="musicStore.loading">Загрузка...</div>

    <!-- Ошибка -->
    <div v-else-if="musicStore.error">{{ musicStore.error }}</div>

    <!-- Список альбомов -->
    <div v-else class="wrap-album" v-for="(item, index) in musicStore.musics" :key="index">
        <div class="album-img">
            <img :src="item.img" alt="Обложка альбома">
        </div>
        <div class="album-info">
            <h4>{{ item.name }}</h4>
            <p>{{ item.artist }}</p>
        </div>
    </div>
</template>

<style>
.wrap-album {
    width: 220px;
    height: 270px;
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 25%);
    transition: all 0.3s ease;
}

.wrap-album:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.album-img {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;
}

.wrap-album img {
    width: 100%;
    aspect-ratio: 1/1;
}

.album-info {
    text-align: left;
}

.album-info h4 {
    font-family: "Inter";
    font-size: 14px;
    font-weight: 500;
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.album-info p {
    font-family: "Inter";
    color: #777;
    margin-top: 4px;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>