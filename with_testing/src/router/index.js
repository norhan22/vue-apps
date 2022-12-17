import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "@/modules/auth/auth.routes";
import helloWorldRoutes from "@/modules/HelloWorld/helloWorld.routes";
import usersRoutes from "@/modules/usersManagment/users.routes";

const routes = [
  ...helloWorldRoutes,
  ...authRoutes,
  {
    path: "/users",
    name: "users",
    component: () => import("@/App"),
    children: usersRoutes,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
