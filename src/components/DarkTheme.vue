<script setup>
import { ref, onMounted } from 'vue';
import { useStatesElement } from "@/stores/GlobalStates.js";

const states = useStatesElement();

// Функция для расчета задержки с округлением до 1 знака после запятой
const getTimeDelay = (index, totalCount) => {
  let delay;
  if (index < totalCount / 2) {
    // Для первых 25 блоков (слева): от 0.1 до 1.5
    delay = 0.1 + (index / (totalCount / 2)) * 1.4;  // диапазон от 0.1 до 1.5
  } else {
    // Для оставшихся 25 блоков (справа): от 1.5 до 0.1
    delay = 1.5 - ((index - (totalCount / 2)) / (totalCount / 2)) * 1.4;  // диапазон от 1.5 до 0.1
  }

  // Округляем задержку до одного знака после запятой
  return Math.round(delay * 10) / 10;
}

const blockDelays = ref([]);
const blocksCount = 55;

onMounted(() => {
  blockDelays.value = Array.from({ length: blocksCount }, (_, index) => getTimeDelay(index, blocksCount));
});
</script>

<template>
  <div class="dark_theme_wrap d-flex flex-wrap justify-content-between" :class="{active: states.darkTheme}">
    <div v-for="(item, index) in blocksCount" :key="index"
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

.dark_theme_wrap_item[data-delay="1.1"] {
  transition-delay: 1.1s;
}

.dark_theme_wrap_item[data-delay="1.2"] {
  transition-delay: 1.2s;
}

.dark_theme_wrap_item[data-delay="1.3"] {
  transition-delay: 1.3s;
}

.dark_theme_wrap_item[data-delay="1.4"] {
  transition-delay: 1.4s;
}

.dark_theme_wrap_item[data-delay="1.5"] {
  transition-delay: 1.5s;
}

.dark_theme_wrap.active .dark_theme_wrap_item {
  background-color: #111111;
}
</style>