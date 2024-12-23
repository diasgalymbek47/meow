<script setup>
import AudioBarPlaylist from './--AudioBarPlaylist.vue';

defineProps({
    toggle: {
        type: Function,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    }
})
</script>

<template>
    <div class="bg-block">
        <div class="back-btn"  @click="toggle"></div>
        <div class="playlist-wrap" :class="{active: isActive}">

            <div class="playlist">
                <div class="name">

                </div>
                <div class="songs">
                </div>
            </div>

            <!-- ------------------------------------------------- -->

            <div class="audiobar">
                <AudioBarPlaylist />
            </div>

        </div>
    </div>
</template>

<style scoped>
.back-btn {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}

.bg-block {
    width: 1080px;
    height: 100%;
    margin: 0 auto;
}

.playlist-wrap {
    position: sticky;
    top: 120px;
    width: 100%;
    height: 600px;
    border-radius: 20px;
    backdrop-filter: blur(20px);
    transform: translateY(100%) scale(0.1);
    box-shadow: inset 10px 10px 20px 0px rgba(0, 0, 0, 0.4);
    background: linear-gradient(317deg, rgba(0, 0, 0, 0.85) 0%, rgba(168, 132, 120, 0.75) 100%);
    transition: all 0.5s ease;
}
.playlist-wrap.active {
    transform: translateY(0) scale(1);
}

.audiobar {
    position: absolute;
    right: 0;
    width: 331px;
    height: 100%;
    display: block;
}
</style>