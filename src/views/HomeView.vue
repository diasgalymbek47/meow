<script setup>

import HeaderHome from "@/components/HeaderHome.vue";
import Welcome from "@/components/Welcome.vue";
import StartButton from "@/components/StartButton.vue";
</script>

<template>
  <div class="wrap d-flex flex-column flex-grow-1">
    <HeaderHome/>
    <div
        class="container content flex-grow-1 d-flex flex-column align-items-center justify-content-center">
      <div class="d-flex flex-column align-items-center justify-content-center">
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
.wrap {
  gap: 50px;
}

.content {
  margin-bottom: 50px;
}

.content_title {
  margin-top: 50px;
  max-width: 750px;
  text-align: center;
  font-weight: 600;
  font-size: 48px;
  color: #201B65;

  span {
    color: #5F5BFF;
  }
}

.content_subtitle {
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
  color: #201B65;
}
</style>