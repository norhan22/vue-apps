export default [
  {
    path: "/home",
    name: "home",
    component: () => import("@/modules/HelloWorld/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/modules/HelloWorld/views/AboutView.vue"),
  },
];
