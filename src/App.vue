<script setup>
import { RouterView } from 'vue-router'
import ThemeButton from "@/components/ThemeButton.vue";
import {useStatesElement} from "@/stores/GlobalStates.js";

const states = useStatesElement();
</script>

<template>
  <main class="main d-flex flex-column flex-grow-1" :class="{darkTheme: states.darkTheme}">
    <ThemeButton/>
    <RouterView />
  </main>
</template>

<style scoped>
.main {
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-color: #FFFFFF;
}

.main:after, .main:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 0;
  height: 0;
  z-index: -1;

  border-radius: 50%;
  transform-origin: center center;
  transition: transform 0.9s ease, opacity 0.4s ease, width 0.9s ease, height 0.9s ease;

  opacity: 0;
}

.main:after {
  background: linear-gradient(to bottom, #000000, #0a0a0b); /* Черный и темно-синий */
}

.main.darkTheme:after {
  width: 200%;
  height: 200%;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.main:not(.darkTheme):after {
  width: 0; /* Сужаем до нуля */
  height: 0; /* Сужаем до нуля */
  opacity: 0; /* Делаем невидимым */
  transform: translate(-50%, -50%) scale(0); /* Сужаем */
}
</style>
