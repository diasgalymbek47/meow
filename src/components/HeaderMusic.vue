<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    activePlaylist: {
        type: String,
        required: true
    }
})
</script>

<template>
    <header class="header" :class="{active: activePlaylist}">
        <RouterLink to="/" class="logo">
            <img class="logo-img" src="./icons/logoType.png">
            <h1 class="logo-text">Meow</h1>
        </RouterLink>

        <nav class="nav">
            <RouterLink class="nav_item active" to="/music">Музыка</RouterLink>
            <RouterLink class="nav_item" to="/chat">Чат</RouterLink>
            <RouterLink class="nav_item" to="/cinema">Кино</RouterLink>
        </nav>
        <RouterLink class="profile" to="/login"><img src="./icons/profile-img.png"></RouterLink>
    </header>
</template>

<style scoped>
.header {
    padding: 0 2em;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #151515;
    border-radius: 20px;
    margin-bottom: 12px;
    position: sticky;
    top: 10px;
    z-index: 100;
}
.header .logo {
    height: 40px;
    display: flex;
    gap: 10px;
}
.header.active{
    box-shadow: inset 5px 5px 20px 0px rgba(0, 0, 0, 0.5);
}

.logo-text {
    margin: 0;
    color: #F0A61C;
    text-decoration: underline;
    font-size: 20px;
}
.logo-img {
    width: 100%;
    height: 100%;
}

.nav {
    display: flex;
    align-items: center;
}

.nav_item {
    color: #fff;
    width: 100px;
    padding: .75em 0;
    overflow: hidden;
    transition: all 0.3s ease;
}

.nav_item::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    opacity: 0;
    position: relative;
    bottom: -8px;
    background-color: #F0A61C;
    transform: translateX(-100%);
    transition: all 0.3s ease;
}

.nav_item:hover, .nav_item.active {
    color: #F0A61C;
}

.nav_item:hover::after {
    transform: translateX(0%);
    opacity: 1;
}

.profile {
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
    height: 50px;
    border: 2px solid #8E8E8E;
}
.profile img{
    width: 100%;
    aspect-ratio: 1/1;
}
</style>