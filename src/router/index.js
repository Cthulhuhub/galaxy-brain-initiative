import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/puzzles/button-hydra',
    name: 'ButtonHydra',
    component: () => import('../views/ButtonHydra.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
