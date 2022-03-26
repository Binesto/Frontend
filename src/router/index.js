import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/markets',
      name: 'markets',
      component: () => import('@/views/markets.vue')
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('@/views/wallet.vue')
    },
  ]
})

export default router
