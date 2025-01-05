<script setup>

import Logo from "@/components/Logo.vue";
import SignInLinkButton from "@/components/SignInLinkButton.vue";
import HeaderHomeNavbar from "@/components/HeaderHomeNavbar.vue";
import UserBox from "@/components/UserBox.vue";
import {useUsers} from "@/stores/users.js";

const user = useUsers();
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <Logo/>
        <HeaderHomeNavbar/>
        <UserBox v-if="user.activeUser" :username="user.activeUser.name"/>
        <SignInLinkButton v-else/>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 20px 0;
}
</style>