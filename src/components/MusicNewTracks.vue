<script setup>
defineProps({
    data: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="new-tracks">
        <h2 class="title">Новые Музыки</h2>
        <ul>
            <li v-for="(item, index) in data" :key="index">
                <div class="d-flex align-items-center">
                    <img :src="item.img">
                    <h4>{{ item.name }} - <span>{{ item.artist }}</span></h4>
                </div>
                <div class="d-flex align-items-center">
                    <span class="fav">❤️</span>
                    <p>2:42</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.new-tracks {
    margin: 70px 0;

    & h2 {
        font-size: 1.25rem;
        margin-bottom: 20px;
    }
}

ul {
    list-style: none;
    padding: 0;

    & li {
        border-bottom: 1px solid #afafaf;
        cursor: pointer;
        padding: 5px;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & img {
            width: 50px;
            height: 50px;
        }

        & h4 {
            margin: 0;
            font-size: 1rem;
            margin-left: 1.25rem;

            & span {
                color: #a3a3a3;
            }
        }

        & .fav {
            margin-right: 20px;
            font-size: 1.5rem;
            cursor: pointer;
        }

        & p {
            margin: 0 1.25rem;
        }

        &:first-child {
            border-top: 1px solid #afafaf;
        }
    }

    & li div {transition: all 0.3s ease;}
    & li:hover div:first-child {transform: translateX(-20px);}
}
</style>