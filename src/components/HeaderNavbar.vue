<script setup>
</script>

<template>
  <nav class="nav">
    <ul class="nav_menu d-flex align-items-center">
      <li class="nav_item">
        <RouterLink class="nav_link" to="/music">Музыка</RouterLink>
      </li>
      <li class="nav_item">
        <RouterLink class="nav_link" to="/">Чат</RouterLink>
      </li>
      <li class="nav_item">
        <RouterLink class="nav_link" to="/">Кино</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav_menu {
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 50px;
}

.nav_item:hover .nav_link {
  color: var(--dark-indigo-active);
}

.nav_item:hover .nav_link:after {
  scale: 1;
}

.nav_link {
  position: relative;
  text-decoration: none;
  font-size: 20px;
  color: var(--dark-indigo);

  transition: .3s ease;
}

.nav_link:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  height: 2px;
  background-color: var(--dark-indigo-active);
  transition: .3s ease;

  scale: 0;
}
</style>