<script setup>
import BackButton from "@/components/icons/BackButton.vue";

defineProps({
  fill: {
    type: String,
    default: '#A3A3A3'
  },
  width: {
    type: String,
    default: '33'
  },
  height: {
    type: String,
    default: '28'
  },
  link: {
    type: String,
    default: '/',
  }
})
</script>

<template>
  <RouterLink :to="link">
    <BackButton :fill="fill" :width="width" :height="height"/>
  </RouterLink>
</template>

<style scoped>

</style>