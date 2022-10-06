import { RouteRecordRaw } from 'vue-router';
import AccountSummaryTable from '@/Components/AccountSummaryTable/AccountSummaryTable.vue';

export const Routes : Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: AccountSummaryTable
  }
];
