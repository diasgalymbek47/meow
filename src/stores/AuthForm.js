import { defineStore } from 'pinia';

export const useAuthenticationForm = defineStore('auth_form', {
    state: () => ({
        name: '',
        email: '',
        password: '',
        isRegister: false,
    })
})