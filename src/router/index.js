import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/exercises/button-hydra',
    name: 'ButtonHydra',
    component: () => import('../views/ButtonHydra.vue')
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: () => import('../views/Exercises.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
