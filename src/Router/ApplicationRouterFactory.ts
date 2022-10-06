import { createRouter, createWebHistory } from 'vue-router';
import { Routes } from '@/Router/Routes';

const ApplicationRouterFactory = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: Routes
});
export default ApplicationRouterFactory;
