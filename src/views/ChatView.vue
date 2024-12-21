<template>
    <HeaderHome />
    <div>
        <table border="1">
            <thead>
                <th>ID</th>
                <th>Name</th>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                </tr>
            </tbody>
        </table>
        <input type="text" placeholder="Имя" v-model="addUserNameсы">
        <button @click="addUser">Добавить</button>
    </div>

</template>

<script setup>
import HeaderHome from '../components/HeaderHome.vue';
import { ref } from 'vue';

const addUserName = ref('');

const users = ref([
    { id: 1, name: "ADilet" },
    { id: 2, name: "SagunGali" },
])

const addUser = () => {
    if (addUserName.value) {
        users.value.push({
            id: users.value.length + 1,
            name: addUserName.value
        })
        addUserName.value = ''
    }
}
</script>

<style scoped>
div {
    width: 100%;
    height: 500px;
    text-align: center;
    font-size: 26px;
}

table {
    margin: 20px auto;
}

td {
    padding: 5px 15px;
}

</style>