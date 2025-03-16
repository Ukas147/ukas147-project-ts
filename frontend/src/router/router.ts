import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "../libs/vueRouter.ts";
import {
  CreateUserPage,
  Users,
  DepartmentsPage,
  CreateDepartmentPage,
  PageNotFound,
  DashboardPage,
} from "../pages";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "DashboardPage",
    component: DashboardPage,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/create-user",
    name: "CreateUserPage",
    component: CreateUserPage,
  },
  {
    path: "/departments",
    name: "DepartmentsPage",
    component: DepartmentsPage,
  },
  {
    path: "/create-department",
    name: "CreateDepartmentPage",
    component: CreateDepartmentPage,
  },
  {
    path: "/:pathMatch(.*)*", // Captura qualquer rota não definida
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
