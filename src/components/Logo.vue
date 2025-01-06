<script setup>

import Logotype from "@/components/icons/Logotype.vue";
</script>

<template>
  <RouterLink class="logo_link d-flex align-items-center" to="/">
    <h1 class="logo_text">Meow</h1>
    <Logotype/>
  </RouterLink>
</template>

<style scoped>
.logo_link {
  gap: 10px;
  text-decoration: none;
}

.logo_link:hover .logo_text{
  color: var(--golden-yellow-active);
}

.logo_text {
  margin: 10px 0 0 0;
  font-family: "Madimi One", serif;
  font-size: 36px;
  color: var(--golden-yellow);

  transition: .3s ease;
}
</style>