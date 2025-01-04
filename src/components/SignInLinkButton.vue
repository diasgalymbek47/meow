<script setup>

</script>

<template>
  <RouterLink class="button_link" to="/auth">
    <h2 class="button_text">Войти</h2>
  </RouterLink>
</template>

<style scoped>
.button_link {
  padding: 12px 25px 6px;
  text-decoration: none;
  background-color: #5F5BFF;
  border-radius: 8px;

  transition: .3s ease;
}

.button_link:hover{
  background-color: #201B65;
}

.button_text {
  margin: 0;
  font-size: 16px;
  color: #F6F6F6;
  text-transform: uppercase;
}
</style>