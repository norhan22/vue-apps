import { createRouter, createWebHistory } from "vue-router";

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
  {
    path: "/login",
    name: "login",
    component: () => import("../modules/auth/LoginForm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
