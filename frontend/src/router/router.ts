import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "../libs/vueRouter.ts";
import { CreateUserPage, PageNotFound } from "../views"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/create-user",
    name: "CreateUserPage",
    component: CreateUserPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
