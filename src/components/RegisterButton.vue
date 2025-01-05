<script setup>
import {useAuthenticationForm} from "@/stores/AuthForm.js";

const form = useAuthenticationForm();
</script>

<template>
  <button class="register_button" :class="{active: form.isRegister}">
    ЗАРЕГИСТРИРОВАТЬСЯ
  </button>
</template>

<style scoped>
.register_button {
  padding: 7px 15px 5px;
  text-transform: uppercase;
  border: 1px solid #FFFFFF;
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 700;
  border-radius: 20px;
  background-color: transparent;
  transition: 0.3s ease;
}

.register_button.active {
  padding: 10px 20px 8px;
  background-color: #5F5BFF;

  &:hover {
    background-color: #201B65;
  }
}
</style>