<script setup>
import Facebook from "@/components/icons/Facebook.vue";
import Google from "@/components/icons/Google.vue";
import Linkedin from "@/components/icons/Linkedin.vue";
import DefaultInput from "@/components/DefaultInput.vue";
import SignInLinkButton from "@/components/SignInLinkButton.vue";
import RegisterButton from "@/components/RegisterButton.vue";
import RedirectButton from "@/components/RedirectButton.vue";
</script>

<template>
  <div class="wrap d-flex flex-grow-1 align-items-center justify-content-center">
    <div class="content">
      <div class="form d-flex">
        <RedirectButton :fill="'#000000'" :width="'20'" :height="'18'" class="form_back_button"/>
        <div class="form_left_box d-flex flex-column align-items-center">
          <h2 class="form_title m-0">Войти в профиль</h2>
          <div class="form_links d-flex align-items-center">
            <div class="form_facebook">
              <Facebook/>
            </div>
            <div class="form_google">
              <Google/>
            </div>
            <div class="form_linkedin">
              <Linkedin/>
            </div>
          </div>
          <p class="form_subtitle m-0">или используйте ваш аккаунт</p>
          <div class="form_inputs d-flex flex-column w-100">
            <DefaultInput type="email" placeholder="Почта"/>
            <DefaultInput type="password" placeholder="Пароль"/>
          </div>
          <span class="form_forgot">Забыл пароль?</span>
          <SignInLinkButton/>
        </div>
        <div class="form_right_box d-flex flex-column align-items-center justify-content-center">
          <h2 class="form_right_title">Привет, друг!</h2>
          <p class="form_right_subtitle mt-3">Введите свои личные данные и начните путешествие
            вместе с нами</p>
          <RegisterButton/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form {
  position: relative;
}

.form_back_button {
  position: absolute;
  top: 10px;
  left: 15px;
}

.form_left_box {
  padding: 50px;
  background-color: #F8F9FF;
  border-radius: 10px 0 0 10px;
}

.form_right_box {
  padding: 50px;
  background: linear-gradient(90deg, #5F5BFF 0%, #1358B1 100%);
  color: #ffffff;
  border-radius: 0 10px 10px 0;
}

.form_left_box, .form_links, .form_inputs {
  gap: 20px;
}

.form_facebook, .form_google, .form_linkedin {
  padding: 8px 12px;
  border: 1px solid #DFDFDF;
  border-radius: 50%;
  cursor: pointer;
}

.form_forgot {
  cursor: pointer;
}

.form_right_subtitle {
  max-width: 280px;
  text-align: center;
}
</style>