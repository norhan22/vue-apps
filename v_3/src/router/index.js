import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "@/modules/auth/auth.routes";
import helloWorldRoutes from "@/modules/HelloWorld/helloWorld.routes";

const routes = [...helloWorldRoutes, ...authRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
