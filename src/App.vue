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

  background: linear-gradient(0.92deg, #DEDBD3 34.88%, #F8F9FF 95.54%),
  linear-gradient(0.92deg, #DEDBD3 34.88%, #F8F9FF 95.54%);
}
</style>