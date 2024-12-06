<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="header">
        <RouterLink to="/">
            <h1 class="logo">Meow</h1>
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
    padding: 0 4em;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    margin: 0;
    color: #F0A61C;
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