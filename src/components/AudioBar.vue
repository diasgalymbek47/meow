<script setup>
import { useMusicsStore } from "@/stores/musics";
import { useMusicPlayer } from "@/stores/musicPlayer";
import { ref, onMounted, computed } from "vue";

defineProps({
    toggle: {
        type: Function,
        required: true
    },
})

const audioPlayer = useMusicPlayer();
const musicStore = useMusicsStore();
const isLoading = ref(true);
const volume = computed({
    get: () => audioPlayer.volume,
    set: (newVolume) => {
        audioPlayer.setVolume(newVolume);
    },
});
const isActivePlay = ref(false);  // Управление состоянием кнопки play
const isActiveFav = computed(() => audioPlayer.isActiveFav);   // Управление состоянием кнопки favorite
const isActiveVolume = ref(false); // Управление состоянием кнопки volume
const music = computed(() => audioPlayer.getMusic()); // Получение текущей музыки
const progress = computed(() => audioPlayer.progress); // Прогресс воспроизведения
const durations = computed(() => audioPlayer.duration); // Время начала и конца
const isPlaying = computed(() => audioPlayer.isActive); // Состояние воспроизведения

// Инициализация музыки и обработка данных
onMounted(async () => {
    await musicStore.getMusics();
    if (musicStore.musics.length > 0) {
        audioPlayer.init(musicStore.musics);

        if (audioPlayer.currentMusic) {
            music.value = audioPlayer.getMusic();

            audioPlayer.currentMusic.onplay = () => {
                updatePlayerState();
                update();
            };
            audioPlayer.currentMusic.onloadedmetadata = () => {
                durations.value.end = formatDuration(audioPlayer.currentMusic.duration);
            };
            audioPlayer.currentMusic.ontimeupdate = () => {
                if (audioPlayer.currentMusic.duration > 0) {
                    durations.value.start = formatDuration(audioPlayer.currentMusic.currentTime);
                    progress.value = (audioPlayer.currentMusic.currentTime / audioPlayer.currentMusic.duration) * 100;
                }
            };
        }
    }
    isLoading.value = false;
});

// Обновление состояния при воспроизведении или паузе
const updatePlayerState = () => {
    isPlaying.value = !audioPlayer.currentMusic.paused;
    isActivePlay.value = isPlaying.value;
};

const update = () => {
    music.value = audioPlayer.getMusic();
}

// Форматирование продолжительности
const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
};
// Переключение воспроизведения
const togglePlay = () => audioPlayer.togglePlay();
const seekMusic = (event) => {
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    const clickPercentage = clickX / width;
    const newTime = audioPlayer.currentMusic.duration * clickPercentage;
    audioPlayer.currentMusic.currentTime = newTime;
};

function seekVolume(event) {
    const volumeBar = event.currentTarget;
    const rect = volumeBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    const clickPercentage = clickX / width;

    // Устанавливаем новое значение громкости
    volume.value = clickPercentage;
}

// Переключение состояния громкости
const toggleVolume = () => {
    isActiveVolume.value = !isActiveVolume.value;
};

</script>


<!-- .................................................................................. -->

<template>
    <div v-if="isLoading">Загрузка музыки...</div>
    <div v-else class="audio-bar">
        <!-- Progress Bar -->
        <div class="progress-bar-wrap" @click="seekMusic">
            <div class="progress-bar">
                <span :style="{ width: progress + '%' }"></span>
                <div class="timer">
                    <span class="current">{{ durations.start }}</span>
                    <span class="total">{{ durations.end }}</span>
                </div>
            </div>
        </div>

        <!-- Player Controls -->
        <div class="player">
            <div class="btns">
                <button @click="audioPlayer.prev" class="left material-symbols-outlined">
                    keyboard_double_arrow_left
                </button>
                <button @click="togglePlay" :class="{ active: isPlaying }" class="play material-symbols-outlined">
                    {{ isPlaying ? 'pause_circle' : 'play_circle' }}
                </button>
                <button @click="audioPlayer.next" class="right material-symbols-outlined">
                    keyboard_double_arrow_right
                </button>
            </div>
        </div>

        <!-- Playing Song Info -->
        <div class="playing-song">
            <div class="img">
                <img :src="music.img" alt="Song Image">
            </div>
            <div class="song-info">
                <a href="#" class="song-name">{{ music.name }}</a>
                <a href="#" class="song-autor">{{ music.artist }}</a>
            </div>
            <div class="buttons">
                <button class="fav-btn material-symbols-outlined" @click="audioPlayer.toggleFav"
                    :class="{ active: isActiveFav }" title="Нравится">favorite</button>
                <button class="material-symbols-outlined">shuffle</button>
                <button class="material-symbols-outlined">repeat</button>
            </div>
        </div>
        <!-- Other Buttons -->
        <div class="other-btn">
            <button class="material-symbols-outlined">Share</button>
            <button class="material-symbols-outlined" @click="toggle">format_list_bulleted</button>
        </div>
        <!-- Volume Control -->
        <div class="volume">
            <button class="material-symbols-outlined" @click="toggleVolume">volume_up</button>
            <div class="volume-line-wrap" @click="seekVolume($event)">
                <div class="volume-line" :class="{active: isActiveVolume}">
                    <span :style="{ width: volume * 100 + '%' }"></span>
                </div>
            </div>
        </div>
    </div>
</template>


<!-- .................................................................................. -->

<style scoped>
/* Main Audio Bar Container */
.audio-bar {
    width: 100%;
    height: 60px;
    padding: 5px 0;
    display: flex;
    align-items: center;
    background: #3d2e28f1;
    z-index: 111;
}

/* General Button Styles */
button {
    width: 50px;
    height: 50px;
    border: none;
    font-size: 26px;
    color: #9a9a9a;
    background-color: transparent;
    outline: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
}

button:hover {
    background-color: #c2c2c21c;
    box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.11);
    color: #e0e0e0;
}

/* Player Container */
.player {
    position: relative;
    padding-inline: 20px;
}

/* Song Info Section */
.playing-song {
    text-align: start;
    display: flex;
    align-items: center;
}

/* Other Buttons (Volume, Lyrics, etc.) */
.other-btn {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
}

/* Player Controls */
.player .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.player .btns button:nth-child(2) {
    font-size: 36px;
}

/* Song Image */
.playing-song .img {
    width: 50px;
    height: 50px;
    margin-right: 12px;
}

.playing-song .img img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
}

/* Song Info */
.playing-song .song-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.playing-song .song-info a {
    color: #fff;
    font-size: 16px;
    transition: all 0.15s ease;
}

.playing-song .song-info a.song-autor {
    font-size: 12px;
    color: #c3c3c3;
}

.playing-song .song-info a:hover {
    color: #F0A61C;
}

.playing-song .buttons {
    display: flex;
    gap: 10px;
    margin-left: 20px;
}


/* Favorite Button */

.playing-song .fav-btn.active {
    color: #e76060;
}

/* Volume Control */
.volume {
    padding-inline: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.volume .volume-line-wrap {
    padding: 10px 0;
    cursor: pointer;
}

.volume .volume-line {
    width: 0;
    opacity: 0;
    height: 6px;
    border-radius: 4px;
    background-color: #d5d5d5;
    transition: all .3s ease;
}

.volume .volume-line.active {
    width: 80px;
    opacity: 1;
}

.volume .volume-line span {
    display: flex;
    height: 100%;
    border-radius: 4px;
    background-color: #F0A61C;
    transition: width 0.2s ease;
}

/* Inactive Button Styles */
button.no-active {
    color: #a0999733;
    background: transparent;
    box-shadow: none;
    cursor: default;
}

/* Progress Bar Wrapper */
.progress-bar-wrap {
    position: absolute;
    top: -14px;
    width: 100%;
    cursor: pointer;
    padding: 10px 0 4px;
}

/* Progress Bar Hover Effect */
.progress-bar-wrap:hover {
    top: -16px;
}

/* Progress Bar Height Change on Hover */
.progress-bar-wrap:hover>.progress-bar {
    height: 6px;
}

/* Progress Bar Container */
.progress-bar {
    position: relative;
    width: 100%;
    height: 4px;
    background-color: #13131358;
}

/* Progress Bar Indicator */
.progress-bar>span {
    display: block;
    height: 100%;
    background-color: #F0A61C;
    transition: width .3s ease;
}

/* Timer Container */
.timer {
    width: 100%;
    position: absolute;
    pointer-events: none;
}

/* Timer Labels (current and total time) */
.timer span {
    font-size: 12px;
    position: absolute;
    background-color: #dadada;
    top: -24px;
    opacity: 0;
    transition: all 0.3s ease;
}

/* Current Time Position */
.progress-bar .timer span.current {
    left: 4px;
}

/* Total Time Position */
.progress-bar .timer span.total {
    right: 4px;
}

/* Show Timer on Hover */
.progress-bar-wrap:hover .timer span {
    opacity: 1;
}

/* ------------------------------------------------------------------- */
</style>