import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    component: () => import("@/views/main/Index.vue"),
  },
  {
    path: "/socket",
    meta: {
      title: "Socket",
    },
    component: () => import("@/views/socket/Index.vue"),
  },
  {
    path: "/todo",
    meta: {
      title: "TODO",
    },
    component: () => import("@/views/to-do-list/Index.vue"),
  },
  {
    path: "/rain-code",
    meta: {
      title: "代码雨",
    },
    component: () => import("@/views/rain-code/Index.vue"),
  },
  {
    path: "/draggable",
    component: () => import("@/views/vue-use-draggable/Index.vue"),
  },
  {
    path: "/lazy",
    meta: {
      title: "图片懒加载",
    },
    component: () => import("@/views/lazy/Index.vue"),
  },
];
