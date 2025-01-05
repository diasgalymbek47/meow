<script setup>
import { ref, onMounted } from 'vue';
import { useStatesElement } from "@/stores/GlobalStates.js";

const states = useStatesElement();

const getTimeDelay = () => {
  return Math.ceil(Math.random() * 10) / 10;
}
const getRandomNumber = () => {
  return Math.floor(Math.random() * 201) + 100;
}

const blockCount = ref(0);
const blockDelays = ref([]);

onMounted(() => {
  blockCount.value = getRandomNumber();
  blockDelays.value = Array.from({ length: blockCount.value }, () => getTimeDelay());
});
</script>

<template>
  <div class="dark_theme_wrap d-flex flex-wrap" :class="{active: states.darkTheme}">
    <div v-for="(item, index) in blockCount" :key="index"
         :data-delay="blockDelays[index]" class="dark_theme_wrap_item flex-grow-1"></div>
  </div>
</template>

<style scoped>
.dark_theme_wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
}

.dark_theme_wrap_item {
  transition: .5s ease;
}

.dark_theme_wrap_item[data-delay="0.1"] {
  transition-delay: .1s;
}

.dark_theme_wrap_item[data-delay="0.2"] {
  transition-delay: .2s;
}

.dark_theme_wrap_item[data-delay="0.3"] {
  transition-delay: .3s;
}

.dark_theme_wrap_item[data-delay="0.4"] {
  transition-delay: .4s;
}

.dark_theme_wrap_item[data-delay="0.5"] {
  transition-delay: .5s;
}

.dark_theme_wrap_item[data-delay="0.6"] {
  transition-delay: .6s;
}

.dark_theme_wrap_item[data-delay="0.7"] {
  transition-delay: .7s;
}

.dark_theme_wrap_item[data-delay="0.8"] {
  transition-delay: .8s;
}

.dark_theme_wrap_item[data-delay="0.9"] {
  transition-delay: .9s;
}

.dark_theme_wrap_item[data-delay="1"] {
  transition-delay: 1s;
}

.dark_theme_wrap.active .dark_theme_wrap_item {
  background-color: #373a42;
}
</style>