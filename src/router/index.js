import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('@/views/AuthView.vue')
    },
    {
      path: '/music',
      name: 'Music',
      component: () => import('@/views/MusicView.vue')
    }
  ],
})

export default router
