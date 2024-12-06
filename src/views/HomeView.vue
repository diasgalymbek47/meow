<script setup>
import Header from '../components/HeaderHome.vue'
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <Header />
            <main>
                <h6>Добро пожаловать в <span>Meow</span>!</h6>
                <h2>Слушай <span>музыку</span>, смотри
                    <br> <span>фильмы</span> и общайся с <span>друзьями</span>.
                    <br> Всё в одном месте!
                </h2>
                <p>Присоединяйся к Meow сегодня и будь в центре событий!
                    <br> Зарегистрируйся сейчас и начни своё путешествие!
                </p>
                <RouterLink class="login" to="/login"><button>Начать</button></RouterLink>
            </main>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    min-height: 100vh;
    background: left / 18% no-repeat url("/src/components/images/main-rightside-img.png"),
        var(--main-bg-page) right / 18% no-repeat url("/src/components/images/main-leftside-img.png");
        padding-top: 10px;
}
main {
    margin-top: 180px;
    color: #201B65;
}
span {
    color: #5F5BFF;
}

h6 {
    width: 267px;
    padding: 10px 0px;
    margin: 0 auto;
    font-size: 14px;
    font-weight: 500;
    border-radius: 40px;
    border: 1px solid #E4E4E4;
    background-color: #fff;
}

h2 {
    margin-top: 40px;
    line-height: 1.2;
    font-size: 48px;
}

p {
    margin-top: 50px;
    font-size: 20px;
    letter-spacing: 0.4px;
    line-height: 1.5;
}

button {
    margin-top: 60px;
    width: 260px;
    height: 70px;
    font-size: 24px;
    border-radius: 10px;
    color: #fff;
    outline: none;
    border: none;
    position: relative;
    background: linear-gradient(25deg, rgba(2,0,36,1) 0%, #5F5BFF);
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 25%);
    z-index: 100;
    overflow: hidden;
    transition: all 0.1s ease;
}
button:active {
    transform: translateY(3px) translateX(3px);
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 25%);
}
button::after {
    content: "";
    display: flex;
    position: absolute;
    top: -10px;
    left: -20%;
    width: 6px;
    height: 150%;
    filter: blur(10px);
    background-color: #fff;
    transform: rotate(-35deg);
    pointer-events: none;
}
button:hover::after {
    animation: moveGradient 0.8s  ease-in-out;
}


@keyframes moveGradient {
    0% {
        left: -20%; 
    }
    50% {
        left: 10%;
    }
    100% {
        left: 120%;
    }
}
</style>