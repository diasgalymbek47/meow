<script setup>

</script>

<template>
  <RouterLink class="logo_link" to="/">
    <h1 class="logo_text">Meow</h1>
  </RouterLink>
</template>

<style scoped>
.logo_link {
  text-decoration: none;
}

.logo_link:hover .logo_text{
  color: #5F5BFF;
}

.logo_text {
  margin: 0;
  font-family: "Madimi One", serif;
  font-size: 40px;
  color: #201B65;

  transition: .3s ease;
}
</style>