<script setup>
import Header from '@/components/Header.vue';
import Input from '@/components/Input.vue';
import MusicSidebar from '@/components/MusicSidebar.vue';
import MusicAlbum from '@/components/MusicAlbum.vue';
import MusicNewTracks from '@/components/MusicNewTracks.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const data = ref([])

onMounted(async() => {
    const req = await axios.get('https://diasgalymbek47.github.io/music/data.json');
    data.value = req.data;
}) 
</script>

<template>
    <div class="wrap d-flex flex-column flex-grow-1">
        <Header />
        <div class="container">
            <Input />
            <div class="content d-flex my-4">
                <section class="sidebar col-3">
                    <MusicSidebar :data="data.slice(32, 40)"/>
                </section>
                <main class="main col-9">
                    <div class="main-music p-2">
                        <MusicAlbum :data="data.slice(0, 10)"/>
                        <MusicNewTracks :data="data.slice(12, 19)"/>
                        <MusicAlbum :data="data.slice(20, 30)"/>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>
.content {}


</style>