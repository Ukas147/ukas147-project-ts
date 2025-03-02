import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "../libs/vueRouter.ts";
import { CreateUserPage, Users, PageNotFound, DashboardPage } from "../views"

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
