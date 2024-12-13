<script setup>
import HeaderMusic from "../components/HeaderMusic.vue";
import MusicMain from "@/components/MusicMain.vue";
import AlbumItem from "@/components/AlbumItem.vue";
import AudioBar from "@/components/AudioBar.vue";
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
                    <AlbumItem/>
                </div>
            </div>
        </div>
        <AudioBar/>
    </div>
</template>

<style scoped>
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
