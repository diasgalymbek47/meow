<script setup>

import Logo from "@/components/Logo.vue";
import SignInLinkButton from "@/components/SignInLinkButton.vue";
import HeaderHomeNavbar from "@/components/HeaderHomeNavbar.vue";
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <Logo/>
        <HeaderHomeNavbar/>
        <SignInLinkButton/>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 0;
}
</style>