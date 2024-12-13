<script setup>
import { useMusicsStore } from "@/stores/musics";
import { useMusicPlayer } from "@/stores/musicPlayer";
import { ref, onMounted } from "vue";

const isActive = ref(false);
const audioPleer = useMusicPlayer();
const musicStore = useMusicsStore();
const music = ref(null);
const isLoading = ref(true);
const volumeBar = ref(null);
const durations = ref({
    "start": 0,
    "end": 0
});

onMounted(async () => {
    await musicStore.getMusics();
    if (musicStore.musics.length > 0) {
        audioPleer.init(musicStore.musics);

        if (audioPleer.currentMusic) {
            music.value = audioPleer.getMusic();

            audioPleer.currentMusic.onended = () => update();
            audioPleer.currentMusic.onloadedmetadata = () => durations.value.end = formatDuration(audioPleer.currentMusic.duration);
            audioPleer.currentMusic.ontimeupdate = () => durations.value.start = formatDuration(audioPleer.currentMusic.currentTime);
        }
    }
    isLoading.value = false;
    console.log(volumeBar.value);
})

const update = () => music.value = audioPleer.getMusic();
const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${secs}`;
}

function toggleChange() {
    isActive.value = !isActive.value
}
</script>

<template>
    <div v-if="isLoading">Загрузка музыки...</div>
    <div v-else class="audio-bar">
        <div class="progress-bar-wrap">
            <div class="progress-bar">
                <span></span>
                <div class="timer">
                    <span class="current">{{ durations.start }}</span>
                    <span class="total">{{ durations.end }}</span>
                </div>
            </div>
        </div>
        <div class="player">
            <div class="btns">
                <button @click="() => { audioPleer.prev(), update() }"
                    class="left material-symbols-outlined">keyboard_double_arrow_left</button>
                <button @click="audioPleer.togglePlay" class="play material-symbols-outlined">play_circle</button>
                <button @click="() => { audioPleer.next(), update() }"
                    class="right material-symbols-outlined">keyboard_double_arrow_right</button>
            </div>
        </div>
        <div class="playing-song">
            <div class="img"><img :src="music.img"></div>
            <div class="song-info">
                <a href="#" class="song-name">{{ music.name }}</a>
                <a href="#" class="song-autor">{{ music.artist }}</a>
            </div>
            <button class="fav-btn active material-symbols-outlined">favorite</button>
        </div>
        
        <div class="other-btn">
            <button class="material-symbols-outlined">lyrics</button>
            <button class="material-symbols-outlined no-active">format_list_bulleted</button>
            <button class="material-symbols-outlined">settings</button>
            <div class="volume">
                <button class="material-symbols-outlined"  @click="toggleChange">volume_up</button>
                <span ref="volumeBar" :class="{ active: isActive}"></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* main */
.audio-bar {
    position: sticky;
    bottom: 0px;
    width: 100%;
    height: 60px;
    padding: 5px 0;

    display: flex;
    align-items: center;
    background: #42342F;
    z-index: 111;
}
button {
    width: 50px;
    height: 50px;
    border: none;
    font-size: 24px;
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
    background-color: #c2c2c234;
    color: #e0e0e0;
}


/* START */
.player {
    position: relative;
    padding-inline: 16px;
}
/* CENTER */
.playing-song {
    text-align: start;
    display: flex;
    align-items: center;
}
/* END */
.other-btn {
    margin-left: auto;
    display: flex;
    justify-content: end;
    padding-right: 16px;
    gap: 20px;
}

/* START PLAYER*/
.player .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.player .btns button:nth-child(2) {
    font-size: 36px;
}

/* CENTER */

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

.playing-song .song-info {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.playing-song .song-info a {
    color: #fff;
    font-size: 16px;
}

.playing-song .song-info a.song-autor {
    font-size: 12px;
    color: #c3c3c3;
}

.playing-song .fav-btn {
    margin-left: 20px;
}
.playing-song .fav-btn.active {
    color: #c66b6b;
}

/* RIGHT */


.other-btn .volume {
    display: flex;
    align-items: center;
    gap: 10px;
}

.other-btn .volume span {
    position: relative;
    border-radius: 4px;
    height: 4px;
    opacity: 0;
    width: 0;
    background-color: #d5d5d5;
    transition: all .3s ease;
}
.other-btn .volume > span.active {
    width: 80px;
    opacity: 1;
}

.other-btn .volume span::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    border-radius: 4px;
    background-color: #F0A61C;
    border-right: 1px solid #615f5f;
}

.other-btn button.no-active {
    color: #a0999733
}
button.no-active {background: transparent;}

/* ------------------------------------------------------------------- */
/* PROGRESS BAAAR */
.progress-bar-wrap {
    position: absolute;
    top: -14px;
    width: 100%;
    cursor: pointer;
    padding: 10px 0 4px;
}

.progress-bar {
    position: relative;
}

.progress-bar > span {
    display: block;
    height: 4px;
    border-radius: 4px;
    background-color: #13131358;
}

.progress-bar span::after {
    content: "";
    width: 30%;
    border-radius: 4px;
    height: 100%;
    display: block;
    background-color: #F0A61C;
    border-right: 1px solid #615f5f;
}

.timer {
    width: 100%;
    position: absolute;
    pointer-events: none;
}

.timer span {
    font-size: 12px;
    position: absolute;
    background-color: #dadada;
    top: -24px;
    opacity: 0;
    transition: all 0.3s ease;
}

.progress-bar .timer span.current {
    left: 4px;
}

.progress-bar .timer span.total {
    right: 4px;
}

.progress-bar-wrap:hover .timer span {
    opacity: 1;
}

/* ------------------------------------------------------------------- */

</style>
