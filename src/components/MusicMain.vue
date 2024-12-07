<script setup>
import WaveMusic from "@/components/WaveMusic.vue";
</script>

<template>
    <main>
        <div class="left">
            <h2><span>Meoow Music</span></h2>
            <div class="buttons">
                <button class="active">Главное</button>
                <button>Радио</button>
                <button>Подкасты</button>
                <button>Подборки</button>
            </div>
        </div>
        <div class="right">
            <div class="buttons">
                <button>Мне нравится<span><svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.99994 0C2.68494 0 -6.10352e-05 2.685 -6.10352e-05 6C-6.10352e-05 9.315 2.68494 12 5.99994 12C9.31494 12 11.9999 9.315 11.9999 6C11.9999 2.685 9.31494 0 5.99994 0ZM4.49994 3L8.99994 6L4.49994 9V3Z"
                                fill="#424242" />
                        </svg></span></button>
                <button>Коллекция<span><svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.0827 0V1.71429H0V0H10.0827ZM10.0827 3.42857V5.14286H0V3.42857H10.0827ZM0 8.57143V6.85714H6.72181V8.57143H0ZM11.7632 0H15.9643V1.71429H13.4436V9.42857C13.4436 10.1106 13.178 10.7646 12.7053 11.2468C12.2326 11.7291 11.5915 12 10.9229 12C10.2544 12 9.61326 11.7291 9.14055 11.2468C8.66783 10.7646 8.40226 10.1106 8.40226 9.42857C8.40226 8.74659 8.66783 8.09253 9.14055 7.6103C9.61326 7.12806 10.2544 6.85714 10.9229 6.85714C11.217 6.85714 11.5027 6.91714 11.7632 7.01143V0ZM10.9229 8.57143C10.7001 8.57143 10.4864 8.66173 10.3288 8.82248C10.1712 8.98322 10.0827 9.20124 10.0827 9.42857C10.0827 9.6559 10.1712 9.87392 10.3288 10.0347C10.4864 10.1954 10.7001 10.2857 10.9229 10.2857C11.1458 10.2857 11.3595 10.1954 11.5171 10.0347C11.6746 9.87392 11.7632 9.6559 11.7632 9.42857C11.7632 9.20124 11.6746 8.98322 11.5171 8.82248C11.3595 8.66173 11.1458 8.57143 10.9229 8.57143Z"
                                fill="#424242" />
                        </svg></span></button>
            </div>
            <WaveMusic />
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    padding: 0 2.5em;
}

/* left h2 */
.left h2 {
    color: #fff;
    font-weight: 00;
    font-size: 48px;
    pointer-events: none;
}

.left h2 span {
    font-family: "Madimi One", sans-serif;
    letter-spacing: 2px;
}

/* left btns */
.left .buttons {
    margin-top: 50px;
}
.left button {
    display: block;
    margin-top: 10px;
    padding: 10px 0;
    text-align: left;
    background: none;
    overflow: hidden;

    font-size: 18px;
    color: #fff;
    border: none;
    font-weight: 400;
    transition: all 0.2s ease;
}
.left button:hover {
    color: #F0A61C;
}
.left button::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    opacity: 0;
    position: relative;
    bottom: -8px;
    background-color: #F0A61C;
    transform: translateX(-100%);
    transition: all 0.3s ease;
}
.left button:hover, 
.left button.active {
    color: #F0A61C;
}

.left button:hover::after {
    transform: translateX(0%);
    opacity: 1;
}

/* right btns */
.right .buttons {
    margin: 110px 0 70px;
}
.right button {
    margin-top: 0.4em;
    border-radius: 4px; 
    margin-left: auto;
    font-weight: 500;
    display: block;
    border: none;
    color: #fafafa;
    position: relative;
    letter-spacing: 1.2px;
    padding: 8px 16px 8px 40px;
    background-color: transparent;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease;
}
.right button:hover {
    color: #F0A61C;
    border-bottom: 1px solid #F0A61C;
}

.right button span svg {
    position: absolute;
    top: 50%;left: 16px;
    transform: translateY(-50%);
}
.right button span path {
    fill: #F0A61C;
}
</style>
