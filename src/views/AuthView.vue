<script setup>
</script>

<template>
    <main class="main">
        <div class="box">
            <div class="left">
                <h2 class="head">Войти в профиль</h2>
                <div class="links">
                    <a class="facebook links_link" href="#"></a>
                    <a class="gmail links_link" href="#"></a>
                    <a class="linkedin links_link" href="#"></a>
                </div>
                <p>или используйте ваш аккаунт</p>
                <input class="input" type="text" placeholder="Почта">
                <input class="input" type="text" placeholder="Пароль">
                <a class="link" href="#">Забыл пароль?</a>
                <button>ВОЙТИ</button>
            </div>
            <div class="right">
                <h2 class="head">Привет, друг!</h2>
                <p>Введите свои личные данные и начните путешествие вместе с нами</p>
                <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </div>
        </div>
    </main>

</template>

<style scoped>
.main {
    min-height: 100vh;
    display: flex;
}

.box {
    margin: auto;

    max-width: 768px;
    display: flex;

    text-align: center;
    box-shadow: 0px 15px 24px 0px #00000040;
    border-radius: 10px;
    overflow: hidden;
}

.left {
    background-color: #F8F9FF;
    flex-basis: 50%;

    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
}

.right {
    background: linear-gradient(90deg, #5F5BFF, #1358B1);
    flex-basis: 50%;

    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    color: #fff;
}

.input {
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    background-color: #E9E9E9;
    outline: none;
}

.input::placeholder {
    color: #9C9C9C;
}

.link {
    font-weight: 500;
    text-decoration: none;
    color: #000;
    font-size: 14px;
    line-height: 18px;
}

.links {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.links_link {
    width: 38px;
    height: 38px;

    border: 1px solid #DFDFDF;
    border-radius: 50%;
}
</style>