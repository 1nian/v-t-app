import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        meta: {
            title: 'Welcome',
        },
        components: {
            'home-page': () => import('@/views/rain-code/Index.vue'),
        },
    },
    {
        path: '/layout',
        meta: {
            title: 'Layout',
        },
        component: () => import('@/layout/Index.vue'),
        redirect: '/coffee',
        children: [
            {
                path: '/coffee',
                meta: {
                    title: '咖啡列表页',
                },
                component: () => import('@/views/coffee/Index.vue'),
            },
            {
                path: '/socket',
                meta: {
                    title: 'Element-Plus',
                },
                component: () => import('@/views/socket/Index.vue'),
            },
            {
                path: '/todo',
                meta: {
                    title: '代办列表',
                },
                component: () => import('@/views/to-do-list/Index.vue'),
            },
            {
                path: '/draggable',
                component: () => import('@/views/vue-use-draggable/Index.vue'),
            },
            {
                path: '/lazy',
                meta: {
                    title: '图片懒加载',
                },
                component: () => import('@/views/lazy/Index.vue'),
            },
        ],
    },
];
