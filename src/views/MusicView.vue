<script setup>
import HeaderMusic from "../components/HeaderMusic.vue";
import MusicMain from "@/components/MusicMain.vue";
import AlbumItem from "@/components/AlbumItem.vue";
import { useMusicsStore } from "@/stores/musics";
import { useMusicPlayer } from "@/stores/musicPlayer";
import { ref, onMounted } from "vue";

const audioPleer = useMusicPlayer();
const musicStore = useMusicsStore();
const music = ref(null);
const isLoading = ref(true);

onMounted(async () => {
    await musicStore.getMusics();
    if (musicStore.musics.length > 0) {
        audioPleer.init(musicStore.musics);
        
        if(audioPleer.currentMusic) {
            music.value = audioPleer.getMusic();
        }
    }
    isLoading.value = false; 
})

const update = () => {
    music.value = audioPleer.getMusic();
}
</script>

<template>
    <div class="container">
        <div class="upper-container">
            <HeaderMusic />
            <MusicMain />
        </div>
        <div class="lower-container">
            <div class="new-relise_line">
                <a href="#">
                    <div>Новые релизы</div>
                    <span>Новые треки, альбомы и сборники</span>
                </a>
                <div class="albums-line">
                    <AlbumItem />
                </div>
            </div>
        </div>
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
                    <button @click="() => { audioPleer.prev(); update(); }" class="left">«</button>
                    <button @click="() => { audioPleer.togglePlay(); update(); }" class="center">⌀</button>
                    <button @click="() => { audioPleer.next(); update(); }" class="right">»</button>
                </div>
                <div class="progress-bar"><span></span></div>
            </div>
            <div class="other-btn">
                <button class="item"><img src="../components/icons/Term.png"></button>
                <button class="item"><img src="../components/icons/Bullet list.png"></button>
                <button class="item"><img src="../components/icons/Services.png"></button>
                <div class="volume">
                    <button><img src="../components/icons/Voice.png"></button>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

.player {
    width: 33.333%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 15px;
}

.player .btns {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.player .progress-bar {
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #fff;
    overflow: hidden;
}

.player .progress-bar span {
    width: 30%;
    height: 100%;
    display: block;
    background-color: #933;
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
    display: block;
    width: 80px;
    height: 4px;
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 4px;
}

/* Upper container MAIN */
.upper-container {
    opacity: 0;
    padding-bottom: 46px;
    border-radius: 0 0 50px 50px;
    transform: translateY(-20px);
    animation: fadeIn 0.5s ease-out forwards;
    background: url(../components/images/musicbg-img.png) no-repeat;
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 25%);
}

/* Lower Container */
.lower-container {
    width: 100%;
    margin-top: 50px;
    padding: 2em 2.5em 0.5em;
    border-radius: 50px;
    backdrop-filter: blur(10px);
    background-color: #ffffff25;
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 25%);
}

.new-relise_line {}

.new-relise_line a {
    text-align: left;
    color: #000;
    display: block;
    margin-left: 20px;
    margin-bottom: 10px;
}

.new-relise_line a div {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 5px;
}

.new-relise_line a span {
    display: block;
    color: #777;
}

/* album */
.albums-line {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-evenly;
    row-gap: 10px;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
