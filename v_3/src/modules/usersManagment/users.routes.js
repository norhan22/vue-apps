const resource = "modules/usersManagment/views";
export default [
  {
    path: "create",
    name: "createUser",
    component: () => import(`@/${resource}/userForm`),
  },
  {
    path: "edit/:id",
    name: "editUser",
    component: () => import(`@/${resource}/userForm`),
  },
  {
    path: "/",
    name: "allUsers",
    component: () => import(`@/${resource}/list`),
  },
];
