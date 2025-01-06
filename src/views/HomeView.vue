<script setup>

import Header from "@/components/Header.vue";
import Welcome from "@/components/Welcome.vue";
import StartButton from "@/components/StartButton.vue";
</script>

<template>
  <div class="wrap d-flex flex-column flex-grow-1">
    <Header/>
    <div class="container content flex-grow-1 d-flex flex-column align-items-center justify-content-center">
      <div class="d-flex flex-column align-items-center justify-content-center mb-5">
        <Welcome/>
        <h2 class="content_title">
          Слушай <span>музыку</span>, смотри <span>фильмы</span> и общайся с <span>друзьями</span>.
          <br>
          Всё в одном месте!
        </h2>
        <p class="content_subtitle">
          Присоединяйся к Meow сегодня и будь в центре событий!
          <br>
          Зарегистрируйся сейчас и начни своё путешествие!
        </p>
        <StartButton class="mt-4"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content_title {
  margin-top: 50px;
  max-width: 750px;
  text-align: center;
  font-weight: 600;
  font-size: 48px;
  color: var(--dark-indigo);
  transition: .3s ease;

  span {
    color: var(--violet-blue);
  }
}

.content_subtitle {
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
  color: var(--dark-indigo);
  transition: .3s ease;
}
</style>