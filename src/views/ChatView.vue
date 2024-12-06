<template>
    <div class="image-container" @mousemove="handleMouseMove" @mouseleave="resetPosition">
        <img src="../components/icons/profile-img.png" alt="Horoscope" class="horoscope-image"
            :style="{ transform: `translate(${offsetX}px, ${offsetY}px)` }" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Создаём реактивные переменные для хранения смещения по X и Y
const offsetX = ref(0);
const offsetY = ref(0);

// Обработчик движения мыши
function handleMouseMove(event) {
    const container = event.currentTarget; // Получаем контейнер
    const { left, top, width, height } = container.getBoundingClientRect();

    const centerX = left + width / 2; // Центр контейнера по X
    const centerY = top + height / 2; // Центр контейнера по Y

    // Вычисляем смещение курсора относительно центра
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    // Нормализуем смещение (умножение на 0.1 уменьшает силу эффекта)
    offsetX.value = (mouseX / width) * 20;
    offsetY.value = (mouseY / height) * 20;
}

// Сброс смещения при уходе мыши из элемента
function resetPosition() {
    offsetX.value = 0;
    offsetY.value = 0;
}
</script>

<style scoped>
.image-container {
    width: 300px;
    height: 300px;
    overflow: hidden;
    /* Скрываем края изображения */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.horoscope-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Масштабируем изображение, сохраняя пропорции */
    transition: transform 0.2s ease-out;
    /* Плавное движение */
}
</style>