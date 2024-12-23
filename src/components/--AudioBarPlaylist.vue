<script setup>
import AudioBar from './AudioBar.vue';

defineProps({
    toggle: {
        type: Function,
        required: true
    },
})
</script>

<template>
    <div class="audiobar">
        <AudioBar :toggle="toggle"/>
    </div>
</template>

<style scoped>
::v-deep(.audio-bar) {
    flex-direction: column;
    background-color: transparent;
    
    position: absolute;
    right: 0;
    width: 331px;
    height: 100%;
    border-left: 1px solid rgba(52, 43, 43, 0.49);
}
::v-deep(.playing-song) {
    flex-direction: column;
    position: absolute;
    top: 20px;
    text-align: center;
}
::v-deep(button) {
    border-radius: 50%;
}
::v-deep(.playing-song .buttons) {
    gap: 30px;
    margin: 30px 0 0;
}
::v-deep(.playing-song .img) {
    width: 140px;
    height: 140px;
    margin: 0;
}
::v-deep(.playing-song .img img) {
    border-radius: 50%;
}
::v-deep(.playing-song .song-info a) {
    margin-top: 10px;
    font-size: 26px;
}
::v-deep(.playing-song .song-info a.song-autor) {
    margin-top: 10px;
    font-size: 16px;
}
::v-deep(.other-btn) {
    padding: 0;
    margin: 0 auto;
    position: absolute;
    top: 59%;
    gap: 30px;
}
::v-deep(.volume) {
    position: absolute;
    left: 50%;
    top: 53.5%;
    gap: 0;
    padding: 0;
    transform: translate(-50%);
}
::v-deep(.volume .volume-line) {
    background: #9A9A9A;
    width: 220px;
    height: 3px;
    opacity: 1;
}
::v-deep(.volume .volume-line span) {
    background: #fff;
}
::v-deep(.volume button) {
    pointer-events: none;
    width: 0;
    height: 0;
    margin-right: 20px;
}
::v-deep(.player) {
    position: absolute;
    bottom: 17%;
}
::v-deep(.player .btns) {
    gap: 25px;
}
::v-deep(.player .btns button) {
    font-size: 40px;
    font-weight: 900;
}
::v-deep(.player .btns button:nth-child(2)) {
    width: 70px;
    height: 70px;
    font-size: 66px;
    font-weight: 400;
    color: #fff;
}
::v-deep(.progress-bar-wrap) {
    top: auto;
    bottom: 50px;
    width: 90%;
    border-radius: 5px;
}
::v-deep(.progress-bar-wrap:hover) {
    top: auto;
}
::v-deep(.progress-bar) {
    background-color: #9A9A9A;
    border-radius: 4px;
}
::v-deep(.progress-bar>span) {
    background-color: #fff;
    border-radius: 4px;
}
::v-deep(.timer span) {
    background-color: transparent;
    font-size: 14px;
    color: #fff;
    opacity: 1;
    top: 6px;
}
</style>