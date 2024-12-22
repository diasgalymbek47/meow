<script setup>
import HeaderMusic from "@/components/HeaderMusic.vue";
import MusicMain from "@/components/MusicMain.vue";
import AlbumItem from "@/components/AlbumItem.vue";
import AudioBar from "@/components/AudioBar.vue";
import Playlist from "@/components/Playlist.vue";
import { ref, watchEffect } from "vue";

const isActive = ref(false);

const isActiveToggle = ()=> {
    isActive.value = !isActive.value
}

watchEffect(() => {
    document.body.classList.toggle('active-playlist', isActive.value)
})
</script>

<template>
    <div class="container">
        <HeaderMusic />
        <div class="upper-container">
            <MusicMain />
        </div>
        <div class="lower-container">
            <div class="new-relise_line">
                <div class="relise-info" @click="isActiveToggle">
                    <span class="hover title">Новые релизы</span>
                    <p>Новые треки, альбомы и сборники</p>
                    <span class="hover more">Еще →</span>
                </div>
                <!-- Линия альбомов -->
                <div class="albums-line">
                    <AlbumItem/>
                </div>
            </div>
        </div>
    </div>
    <div class="audio-bar-wrap">
        <AudioBar />
    </div>

    <div class="mus-playlist" :class="{'active-playlist': isActive}" >
        <Playlist :toggle="isActiveToggle" />
    </div>
</template>

<style scoped>
.mus-playlist {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(12px);
    background-color: rgba(0, 0, 0, 0.25);
    display: none;
}
.mus-playlist.active-playlist {
    display: block;
}
/* Основной стиль контейнера */
.audio-bar-wrap {
    position: sticky;
    bottom: 0;
}

.upper-container {
    padding-top: 40px;
    border-radius: 20px;
    animation: fadeIn 0.5s ease-out forwards;
    background: url(../components/images/musicbg-img.png) no-repeat center;
}

.lower-container {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 30px;
    padding: 2em 2.5em 2em;
    border-radius: 20px;
    backdrop-filter: blur(10px);
    background: linear-gradient(-25deg, #efaaff2f, #f8f9ff);
}

/* Линия альбомов */
.albums-line {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: 16px;
    max-height: 295px;
    /* Ограничение по высоте в закрытом состоянии */
    overflow: hidden;
    transition: max-height 0.5s ease;
    /* Плавное раскрытие */
}

.albums-line.expanded {
    max-height: 1000px;
    overflow: auto;
    /* Увеличенная высота в раскрытом состоянии */
}

.new-relise_line .relise-info {
    cursor: pointer;
    text-align: left;
    color: #000;
    display: block;
    margin-left: 20px;
    margin-bottom: 10px;
    position: relative;
    width: 96%;
    background: transparent;
}

.new-relise_line .relise-info:hover .hover {
    color: #F0A61C;
}

.new-relise_line .relise-info span {
    display: block;
}

.new-relise_line .relise-info {
    color: #777;
}

.new-relise_line .relise-info .title {
    color: #000;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 5px;
}

.more {
    position: absolute;
    top: 20px;
    right: 25px;
    color: #000;
}

/* Анимация появления основного контейнера */
@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
