import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "../libs/vueRouter.ts";
import CreateUserPage from "../views/CreateUserPage/CreateUserPage.vue";
import PageNotFound from "../views/PageNotFound/PageNotFound.vue";

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
