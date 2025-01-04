<script setup>
import {useStatesElement} from "@/stores/GlobalStates.js";

const states = useStatesElement();

function toggleTheme() {
  states.darkTheme = !states.darkTheme;
}
</script>

<template>
  <button @click="toggleTheme" class="theme_button">
    o
  </button>
</template>

<style scoped>
  .theme_button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: white;
    border: 1px solid black;
    border-radius: 50%;
  }
</style>