<template>
    <ul class="wave-container">
        <li v-for="(wave, index) in waves" :key="index" class="wave" :style="{ height: wave.height }">
        </li>
        <div class="wave-underline">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </ul>
</template>


<style scoped>
/* Волна WAVE */
.wave-container {
    margin-left: 16px;
    list-style: none;
    display: flex;
    gap: 10px;
    align-items: flex-end;
    height: 150px;
    position: relative;
}

.wave {
    width: 10px;
    background-color: #fff;
    border-radius: 6px;
    transition: height 0.5s ease;
    /* Плавный переход высоты */
}

.wave-underline {
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: -11px;
}

.wave-underline span {
    width: 10px;
    height: 5px;
    border-radius: 2px;
    background-color: #8E8E8E;
}
</style>


<script>
import { useMusicPlayer } from "@/stores/musicPlayer"; // Импортируем Pinia Store

export default {
    data() {
        return {
            waves: Array.from({ length: 14 }, () => ({
                height: `${Math.random() * 10 + 10}px` // Генерация высоты от 10px до 20px
            })),
            animationInterval: null, // Сохраняем идентификатор интервала
        };
    },
    mounted() {
        this.startWaveAnimation();
    },
    methods: {
        startWaveAnimation() {
            const audioPleer = useMusicPlayer(); // Получаем доступ к состоянию плеера

            // Останавливаем текущий интервал, если есть
            if (this.animationInterval) clearInterval(this.animationInterval);

            // Устанавливаем новый интервал
            this.animationInterval = setInterval(() => {
                if (audioPleer.isActive) {
                    // Если музыка играет, обновляем высоту волн
                    this.waves.forEach(wave => {
                        wave.height = `${Math.random() * 120 + 30}px`; // Новая высота
                    });
                } else {
                    // Если музыка не играет, сбрасываем высоту волн
                    this.waves.forEach(wave => {
                        wave.height = `10px`; // Состояние покоя
                    });
                }
            }, 300); // Интервал обновления
        }
    },
    beforeUnmount() {
        // Очищаем интервал при уничтожении компонента
        if (this.animationInterval) clearInterval(this.animationInterval);
    }
};
</script>
