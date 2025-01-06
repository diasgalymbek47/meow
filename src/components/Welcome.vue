<script setup>

</script>

<template>
  <div class="welcome">
    <p class="welcome_text">Добро пожаловать в <span>Meow</span>!</p>
  </div>
</template>

<style scoped>
  .welcome {
    padding: 5px 20px;
    width: max-content;
    border: 1px solid var(--black);
    border-radius: 40px;
  }

  .welcome_text {
    margin: 0;
    color: var(--dark-indigo);

    span {
      color: var(--violet-blue);
    }
  }
</style>