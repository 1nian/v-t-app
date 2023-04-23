import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/socket",
  },
  {
    path: "/socket",
    component: () => import("@/views/socket/Index.vue"),
  },
  {
    path: "/todo",
    component: () => import("@/views/to-do-list/Index.vue"),
  },
  {
    path: "/rain-code",
    component: () => import("@/views/rain-code/Index.vue"),
  },
  {
    path: "/draggable",
    component: () => import("@/views/vue-use-draggable/Index.vue"),
  },
  {
    path: "/lazy",
    component: () => import("@/views/lazy/Index.vue"),
  },
];
