<script setup>

import PlayV1 from "@/components/icons/PlayV1.vue";
</script>

<template>
  <RouterLink class="start_button" to="/">
    <div class="d-flex align-items-center justify-content-between">
      <PlayV1/>
      <span>Начать</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.start_button {
  padding: 15px 40px;
  background-color: var(--dark-blue);
  border-radius: 10px;
  text-decoration: none;
  transition: .3s ease;

  div {
    gap: 20px;
  }

  span {
    transform: translateY(2px);
    color: #ffffff;
    font-size: 20px;
  }
}

.start_button:hover {
  background-color: var(--dark--blue-active);
}
</style>