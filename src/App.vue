<script setup>
import {RouterView} from 'vue-router'
import ThemeButton from "@/components/ThemeButton.vue";
import DarkTheme from "@/components/DarkTheme.vue";
</script>

<template>
  <main class="main d-flex flex-grow-1">
    <DarkTheme/>
    <ThemeButton/>
    <RouterView/>
  </main>
</template>

<style scoped>
.main {
  position: relative;
  z-index: 1;
}
</style>