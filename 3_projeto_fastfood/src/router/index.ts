import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import(/* webpackChunkName: "Pedidos" */ '../views/Pedidos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
