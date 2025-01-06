<script setup>
import {useAuthenticationForm} from "@/stores/AuthForm.js";

const form = useAuthenticationForm()
</script>

<template>
  <RouterLink class="button_link" to="/auth" :class="{non_active: form.isRegister}">
    <h2 class="button_text">Войти</h2>
  </RouterLink>
</template>

<style scoped>
.button_link {
  padding: 12px 25px 6px;
  text-decoration: none;
  background-color: var(--violet-blue);
  border-radius: 8px;

  transition: .3s ease;
}

.button_link:hover {
  background-color: var(--violet-blue-active);
}

.button_link.non_active {
  background-color: transparent;
  border: 1px solid #FFFFFF;
  border-radius: 20px;
}

.button_text {
  margin: 0;
  font-size: 16px;
  color: #F6F6F6;
  text-transform: uppercase;
}
</style>