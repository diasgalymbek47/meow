<script setup>
defineProps({
  username: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="user-box">
    {{ username }}
  </div>
</template>

<style scoped>
.user-box {
  padding: 8px 25px;
  border-radius: 10px;
  background-color: #201B65;
  color: white;
  font-weight: 500;
  font-size: 16px;
}
</style>