<script setup>
import Facebook from "@/components/icons/Facebook.vue";
import Google from "@/components/icons/Google.vue";
import Linkedin from "@/components/icons/Linkedin.vue";
import DefaultInput from "@/components/DefaultInput.vue";
import SignInLinkButton from "@/components/SignInLinkButton.vue";
import RegisterButton from "@/components/RegisterButton.vue";
import RedirectButton from "@/components/RedirectButton.vue";
import {useAuthenticationForm} from "@/stores/AuthForm.js";
import {useUsers} from "@/stores/users.js";

const form = useAuthenticationForm();
const users = useUsers();

function login() {
  if (form.isRegister) {
    form.isRegister = false;
    return;
  }

  console.log(form.email);

  const user = {
    email: form.email,
    password: form.password,
  }

  users.checkUser(user);
}

function register() {
  if (!form.isRegister) form.isRegister = true;
  return;
}
</script>

<template>
  <div class="wrap d-flex flex-grow-1 align-items-center justify-content-center">
    <div class="content">
      <div class="form d-flex">
        <div class="form_left_box d-flex flex-column align-items-center"
             :class="{'right': form.isRegister}">
          <RedirectButton @click="() => form.isRegister = false" :fill="'#000000'" :width="'20'" :height="'18'"
                          class="form_back_button"/>
          <h2 class="form_title m-0">
            {{ form.isRegister ? 'Создать профиль' : 'Войти в профиль' }}</h2>
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
          <p class="form_subtitle m-0">
            {{ form.isRegister ? 'или используйте ваш email, чтобы зарегистрироваться' : 'или используйте ваш аккаунт' }}</p>
          <div class="form_inputs d-flex flex-column w-100">
            <DefaultInput v-if="form.isRegister" v-model="form.name" placeholder="Имя"/>
            <DefaultInput v-model="form.email" type="email" placeholder="Почта"/>
            <DefaultInput v-model="form.password" type="password" placeholder="Пароль"/>
          </div>
          <span v-if="!form.isRegister" class="form_forgot">Забыл пароль?</span>
          <RegisterButton v-if="form.isRegister" @click="register"
                          class="form_register_button"/>
          <SignInLinkButton v-else @click="login"/>
        </div>
        <div
            class="form_right_box d-flex flex-column align-items-center justify-content-center"
            :class="{'left': form.isRegister}">
          <h2 class="form_right_title">
            {{ form.isRegister ? 'Добро пожаловать!' : 'Привет, друг!'}}</h2>
          <p class="form_right_subtitle mt-3">
            {{ form.isRegister ? 'Чтобы оставаться на связи с нами, войдите, используя свой личные данные.' : 'Введите свои личные данные и начните путешествие вместе с нами'}}</p>
          <SignInLinkButton v-if="form.isRegister" @click="login"/>
          <RegisterButton v-else @click="register"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form_left_box {
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
  transition: all .3s ease;
}

.form_left_box.right {
  transform: translateX(100%);
  border-radius: 0 10px 10px 0;
}

.form_right_box.left {
  transform: translateX(-100%);
  border-radius: 10px 0 0 10px;
}

.form_right_box {
  padding: 50px;
  background: linear-gradient(90deg, #5F5BFF 0%, #1358B1 100%);
  color: #ffffff;
  border-radius: 0 10px 10px 0;
  transition: .3s ease;
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

.form_subtitle {
  text-align: center;
  max-width: 270px;
}

.form_right_subtitle {
  max-width: 320px;
  text-align: center;
}
</style>