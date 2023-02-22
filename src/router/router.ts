import { RouteRecordRaw } from 'vue-router';

export const routes:RouteRecordRaw[] = [
  {
    path:'/',
    redirect: '/text'
  },
  {
    path:'/text',
    component: () => import('@/views/Text.vue')
  },
]