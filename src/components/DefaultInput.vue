<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: '',
  }
})

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <input class="input" :type="type" :placeholder="placeholder" :value="modelValue" @input="emit('update:modelValue', $event.target.value)" />
</template>

<style scoped>
.input {
  padding: 7px 15px;
  background-color: #E9E9E9;
  border-radius: 5px;
  border: none;
  outline: none;
}
</style>