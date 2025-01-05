<script setup>
import { ref } from 'vue';
import { useStatesElement } from "@/stores/GlobalStates.js";

const states = useStatesElement();
const isButtonDisabled = ref(false);

function toggleTheme() {
  isButtonDisabled.value = true;
  states.darkTheme = !states.darkTheme;

  setTimeout(() => {
    isButtonDisabled.value = false;
  }, 1000);
}
</script>

<template>
  <button @click="toggleTheme" class="theme_button" :disabled="isButtonDisabled">
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