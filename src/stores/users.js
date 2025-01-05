import {defineStore} from 'pinia';
import {useRouter} from "vue-router";

export const useUsers = defineStore('users', {
    state: () => ({
        router: useRouter(),
        users: [
            {
                name: 'Dias',
                email: 'diasgalymbek47@gmail.com',
                password: 'qwerty1234'
            },
            {
                name: 'Adilet',
                email: 'Adilettos@gmail.com',
                password: 'qwerty1234'
            }
        ],
        activeUser: JSON.parse(localStorage.getItem('user')) || null
    }),
    actions: {
        checkUser(user) {
            const findUser = this.users.find(u => u.email === user.email && u.password === user.password);
            if (findUser) {
                localStorage.setItem('user', JSON.stringify(findUser));
                this.activeUser = findUser;
                alert('Вы вошли в систему!');
                this.router.push('/');
            } else {
                alert('Логин или пароль неправильный!');
            }
        }
    }
})