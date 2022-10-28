import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import ApplicationRouter from './Router/ApplicationRouterFactory';
import 'bootstrap/dist/css/bootstrap.css';
import ApplicationStore from '@/Store/ApplicationStore';

createApp(App)
  .use(ApplicationStore)
  .use(ApplicationRouter)
  .mount('#app');
