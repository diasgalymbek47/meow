<script setup>
import AudioBarPlaylist from './--AudioBarPlaylist.vue';

defineProps({
    toggle: {
        type: Function,
        required: true,
    }
})
</script>

<template>
    <div class="bg-block">
        <div class="back-btn"  @click="toggle"></div>
        <div class="playlist-wrap">

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
    backdrop-filter: blur(50px);
    box-shadow: 8px 8px 24px 4px rgba(0, 0, 0, 0.4);
    background: linear-gradient(317deg, rgba(0, 0, 0, 100%) 0%, rgba(168, 132, 120, 0.68) 100%);
}

.audiobar {
    position: absolute;
    right: 0;
    width: 331px;
    height: 100%;
    display: block;
}
</style>