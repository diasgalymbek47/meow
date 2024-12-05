<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header class="header">
        <RouterLink to="/">
            <h1 class="logo">Meow</h1>
        </RouterLink>

        <nav class="nav">
            <RouterLink class="nav_item" to="/music">Музыка</RouterLink>
            <RouterLink class="nav_item" to="/chat">Чат</RouterLink>
            <RouterLink class="nav_item" to="/cinema">Кино</RouterLink>
            <RouterLink class="nav_item login" to="/login">Войти</RouterLink>
        </nav>
    </header>
</template>

<style scoped>
.header {
    padding: 1em;
    display: flex;
    align-items: center;
    gap: 5em;
}

.logo {
    margin: 0;
}

.nav {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4em;
}

.login {
    margin-left: auto;
}
</style>