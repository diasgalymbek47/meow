<script setup>
import { useMusicsStore } from "@/stores/musics";
import { useMusicPlayer } from "@/stores/musicPlayer";
import { ref, onMounted } from "vue";

const audioPleer = useMusicPlayer();
const musicStore = useMusicsStore();
const music = ref(null);
const isLoading = ref(true);
const volumeBar = ref(null);

onMounted(async () => {
    await musicStore.getMusics();
    if (musicStore.musics.length > 0) {
        audioPleer.init(musicStore.musics);

        if (audioPleer.currentMusic) {
            music.value = audioPleer.getMusic();
        }
    }
    isLoading.value = false;
})

audioPleer.currentMusic.onended = () => update();
const update = () => music.value = audioPleer.getMusic();
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
                <span class="current">0:28</span>
                <span class="total">3:14</span>
            </div>
            <div class="progress-bar">
                <span><div></div></span>
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
    padding: 6px 0;
    width: 100%;
    cursor: pointer;
}

.player .progress-bar span {
    display: block;
    height: 4px;
    border-radius: 4px;
    background-color: #d5d5d5;
    position: relative;
}
.player .progress-bar span div {
    width: 30%;
    border-radius: 4px;
    height: 100%;
    display: block;
    background-color: #F0A61C;
    border-right: 1px solid rgb(97, 95, 95);
}

/* center TIMERs */
.player .timer {
    width: 100%;
    margin-top: 6px;
}
.player .timer span{
    color: #fff;
    font-size: 12px;
    position: absolute;
}
.player .timer span.current {
    left: -34px;
}
.player .timer span.total {
    right: -34px;
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
