<script setup>
import { useMusicsStore } from "@/stores/musics";
import { useMusicPlayer } from "@/stores/musicPlayer";
import { ref, onMounted } from "vue";

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
</script>

<template>
    <div v-if="isLoading">Загрузка музыки...</div>
    <div v-else class="audio-bar">
        <div class="playing-song">
            <div class="img"><img :src="music.img"></div>
            <div class="song-info">
                <a href="#" class="song-name">{{ music.name }}</a>
                <a href="#" class="song-autor">{{ music.artist }}</a>
            </div>
            <button class="fav-btn"><img src="../components/icons/Like.png"></button>
        </div>
        <div class="player">
            <div class="btns">
                <button @click="() => { audioPleer.prev(), update() }" class="left">«</button>
                <button @click="audioPleer.togglePlay" class="center">⌀</button>
                <button @click="() => { audioPleer.next(), update() }" class="right">»</button>
            </div>
            <div class="timer">
                <span class="current">{{ durations.start }}</span>
                <span class="total">{{ durations.end }}</span>
            </div>
            <div class="progress-bar">
                <span></span>
            </div>
        </div>
        <div class="other-btn">
            <button class="item"><img src="../components/icons/Term.png"></button>
            <button class="item"><img src="../components/icons/Bullet list.png"></button>
            <button class="item"><img src="../components/icons/Services.png"></button>
            <div class="volume">
                <button><img src="../components/icons/Voice.png"></button>
                <span ref="volumeBar"></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* main */
.audio-bar {
    border-radius: 16px 16px 0 0;
    position: sticky;
    bottom: 0px;
    width: 100%;
    height: 82px;
    padding: 10px 16px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #42342F;
    z-index: 1;
}


/* left */
.playing-song {
    width: 33.333%;
    text-align: start;
    display: flex;
    align-items: center;
}

.playing-song .img {
    width: 60px;
    margin-right: 12px;
}

.playing-song .img img {
    width: 100%;
    border-radius: 5px;
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
    color: #c3c3c3;
    font-size: 32px;
    border: none;
    margin-left: 20px;
    background-color: transparent;
}


/* CENTER */
.player {
    width: 33.333%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 15px;
    position: relative;
    gap: 4px;
}

.player .btns {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.player .btns button {
    width: 40px;
    height: 40px;
    border: none;
    font-size: 28px;
    border-radius: 50%;
    background-color: transparent;
    color: #9a9a9a;
}

.player .btns button:nth-child(2) {
    color: #fff;
    scale: 1.5;
}

.player .progress-bar {
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}

.player .progress-bar span {
    width: 30%;
    height: 100%;
    display: block;
    background-color: #933;
}

/* center TIMERs */
.player .timer {
    width: 100%;
}

.player .timer span {
    color: #c7c7c7;
    font-size: 12px;
    position: absolute;
}

.player .timer span.current {
    left: -30px;
}

.player .timer span.total {
    right: -30px;
}



/* RIGHT */
.other-btn {
    width: 33.333%;
    display: flex;
    justify-content: end;
    gap: 20px;
}

.other-btn button {
    border: none;
    background-color: transparent;
}

.other-btn .volume {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
}

.other-btn .volume span {
    position: relative;
    display: block;
    width: 80px;
    height: 4px;
    border-radius: 4px;
    background-color: #000000;
    margin-bottom: 4px;
}

.other-btn .volume span::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: #fff;
}
</style>
