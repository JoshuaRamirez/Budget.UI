import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DataGrid from '../views/DataGrid.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: DataGrid
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
