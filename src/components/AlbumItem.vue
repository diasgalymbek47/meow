<script setup>
import Album from "../stores/newReliseList";
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Реактивные переменные
const data = ref([]);
const loading = ref(true);
const error = ref(null);

// Функция для загрузки данных
const fetchData = async () => {
  try {
    const response = await axios.get('https://diasgalymbek47.github.io/music/data.json');
    data.value = response.data;
  } catch (err) {
    error.value = `Ошибка загрузки: ${err.message}`;
  } finally {
    loading.value = false;
  }
};

// Выполнение запроса при монтировании компонента
onMounted(fetchData);
</script>

<template>
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="error">{{ error }}</div>
    <div class="wrap-album" v-for="(item, index) in data" :key="index">
        <div class="album-img">
            <img :src="item.img">
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
    border-radius: 10px;
    padding: 4px;
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
    font-size: 13px;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>