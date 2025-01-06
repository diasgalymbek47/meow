<script setup>
import Loupe from './icons/Loupe.vue';
</script>

<template>
    <div class="input">
        <button><Loupe/></button>
        <input type="text" placeholder="Пойск">
    </div>
</template>

<style scoped>
.input {
    width: 100%;
    height: 3.375rem;
    margin-top: 2rem;
    position: relative;

    & button {
        position: absolute;
        left: 0.75rem;
        top: 50%;
        padding: 0;
        border: none;
        outline: none;
        background: none;
        transform: translateY(-50%);
    }

    & input {
        width: 100%;
        height: 100%;
        padding-inline: 3.75rem;
        font-size: 1.25rem;
        outline: none;
        border: none;
        color: #000;
        background-color: transparent;
        border-bottom: 1px solid #afafaf;

        &::placeholder {
            color: #a3a3a3;
        }
    }
}
</style>