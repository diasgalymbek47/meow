<script setup>
defineProps({
    data: {
        type: Array,
        reqired: true
    }
})
</script>

<template>
    <h2>Популярные Альбомы</h2>
    <ul class="album d-grid" v-if="data">
        <li class="box" v-for="(item, index) in data" :key="index">
            <img :src="item.img">
            <h4>{{item.name}}</h4>
            <p>{{item.artist}}</p>
        </li>
    </ul>
</template>

<style scoped>
h2 {
    font-size: 1.25rem;
    padding: 0 .75rem;
    margin-bottom: 20px;
}

ul {
    padding: 0;
    list-style: none;
    grid-template-columns: repeat(5, 166px);
    justify-content: space-between;
    row-gap: 1rem;

    & li {
        width: 166px;
        height: 214px;
        cursor: pointer;
        padding: .75rem;
        position: relative;
        border-radius: .75rem;
        transition: transform 0.2s ease;
        border-bottom: 1px solid #afafaf;
    }
    
    & img {
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: 6px;
        object-fit: cover;
    }

    & h4, & p {
        margin-bottom: 0;
        margin-top: .7rem;
        font-size: .8rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    & p {
        font-size: .8rem;
        color: #a3a3a3;
        margin: 0;
    }

    & li::after {
        content: "";
        background: rgba(0,0,0, 0.6);
        transition: opacity 0.3s ease;
        position: absolute;
        border-radius: 6px;
        height: 142px;
        width: 142px;
        opacity: 0;
        left: 12px;
        top: 12px;
    }
    & li:hover::after {
        opacity: 1;
    }
    & li::before {
        content: "▶";
        transition: opacity 0.5s ease;
        position: absolute;
        color: rgba(255, 217, 0, 0.836);
        font-size: 32px;
        opacity: 0;
        z-index: 1;
        left: 71px;
        top: 64px;
    }
    & li:hover::before {
        opacity: 1;
    }

    & li:hover {
        transform: translateY(-10px);
    }
}
</style>