export default [
  {
    path: "/login",
    name: "login",
    component: () => import("@/modules/auth/views/login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/modules/auth/views/signup.vue"),
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("@/modules/auth/views/welcome.vue"),
  },
];
