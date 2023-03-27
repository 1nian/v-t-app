import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/text",
  },
  {
    path: "/text",
    component: () => import("@/views/Text.vue"),
  },
  {
    path: "/todo",
    component: () => import("@/views/to-do-list/Index.vue"),
  },
  {
    path: "/rain-code",
    component: () => import("@/views/rain-code/Index.vue"),
  },
];
