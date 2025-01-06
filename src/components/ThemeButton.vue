<script setup>
import {ref} from 'vue';
import {useStatesElement} from "@/stores/GlobalStates.js";
import Moon from "@/components/icons/Moon.vue";

const states = useStatesElement();
const isButtonDisabled = ref(false);

function toggleTheme() {
  isButtonDisabled.value = true;
  states.darkTheme = !states.darkTheme;

  setTimeout(() => {
    if (states.darkTheme) {
      document.body.classList.add("darkTheme");
    } else {
      document.body.classList.remove("darkTheme");
    }
    isButtonDisabled.value = false;
  }, 1500);
}
</script>

<template>
  <button @click="toggleTheme"
          class="theme_button d-flex align-items-center justify-content-center p-0"
          :disabled="isButtonDisabled" :class="states.darkTheme ? 'moon' : 'sun'">
    <Moon :width="36" :height="36"/>
  </button>
</template>

<style scoped>
.theme_button {
  position: fixed;
  bottom: 30px;
  right: 30px;

  background-color: white;
  border: none;
  border-radius: 50%;
}

.theme_button.moon {
  animation: rotateForward 1s ease;
}

.theme_button.sun {
  animation: rotateBack 1s ease;
}

@keyframes rotateForward {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotateBack {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>