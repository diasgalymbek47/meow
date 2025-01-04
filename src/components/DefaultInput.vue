<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: '',
  }
})
</script>

<template>
  <input class="input" :type="type" :placeholder="placeholder">
</template>

<style scoped>
.input{
  padding: 7px 15px;
  background-color: #E9E9E9;
  border-radius: 5px;
  border: none;
  outline: none;
}
</style>