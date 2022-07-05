import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "@/modules/auth/auth.routes";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../modules/HelloWorld/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../modules/HelloWorld/views/AboutView.vue"),
  },
  ...authRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
