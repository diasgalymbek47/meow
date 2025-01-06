<script setup>

defineProps ({
    data: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="sidebar">
        <nav class="nav d-flex flex-column p-2">
            <a href="#">Главная</a>
            <a href="#">Радио</a>
            <a href="#">Подкасты</a>
            <a href="#">Подборки</a>
            <span></span>
            <a href="#">Мне нравится</a>
            <a href="#">Коллекия</a>
        </nav>
        <ul class="mt-4 p-2 pe-5">
            <li><a href="#" class="perf-title">Популярные Исполнители</a></li>
            <li v-for="(item, index) in data" :key="index"><a href="#" class="perf-img mb-3"><img :src="item.img"></a></li>
            <li><a href="#" class="perf-title more">Еще →</a></li>
        </ul>
    </div>
</template>

<style scoped>
a {
    color: #000;
    margin: 5px 0;
    font-weight: 800;
    padding: 5px 10px;
    text-decoration: none;

    &:hover {
        color: rgb(129, 129, 129);
    }
}

span {
    width: 70%;
    height: 1px;
    margin: .75rem 0;
    background: #afafaf;
}

ul {
    list-style: none;
    
    & img{
        width: 100%;
        height: 160px;
        object-fit: cover;
        border-radius: .75rem;
        transition: all 0.3s ease;
        &:hover {
            transform: translateX(10px);
        }
    }
    
    & a {display: block;}
    & .perf-title {font-weight: 400;}
    & .more {justify-self: end;}
}
</style>