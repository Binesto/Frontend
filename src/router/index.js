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
    {
      path: '/notification',
      name: 'notification',
      component: () => import('@/views/notification.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/settings.vue')
    },
  ]
})

export default router
