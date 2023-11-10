import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from './router';

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string;
    next();
});
