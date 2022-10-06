import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import ApplicationRouter from './Router/ApplicationRouterFactory';
import 'bootstrap/dist/css/bootstrap.css';
import { ApplicationStoreFactory } from '@/Store/ApplicationStoreFactory';

createApp(App)
  .use(ApplicationStoreFactory)
  .use(ApplicationRouter)
  .mount('#app');
