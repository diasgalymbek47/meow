<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="header">
        <RouterLink to="/"><h1 class="logo">Meow</h1></RouterLink>

        <nav class="nav">
            <RouterLink class="nav_item" to="/music">Музыка</RouterLink>
            <RouterLink class="nav_item" to="/chat">Чат</RouterLink>
            <RouterLink class="nav_item" to="/cinema">Кино</RouterLink>
        </nav>
        <RouterLink class="login" to="/login">Войти</RouterLink>
    </header>
</template>

<style scoped>
.header {
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    margin: 0;
    color: #201B65;
}

.nav {
    display: flex;
    align-items: center;
}
.nav_item {
    color: #201B65;
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
    background-color: #5F5BFF;
    transform: translateX(-100%);
    transition: all 0.3s ease;
}
.nav_item:hover {
    color: #5F5BFF;
}
.nav_item:hover::after {
    transform: translateX(0%);
    opacity: 1;
}

.login {
    padding: 13px 23px;
    background-color: #5F5BFF;
    border-radius: 8px;
    color: #F6F6F6;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 25%);
    transition: transform 0.1s ease;
}
.login:active {
    transform: translateY(3px) translateX(3px);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 25%);
}
</style>