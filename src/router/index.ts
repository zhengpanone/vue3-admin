import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "../views/dashboard/analysis/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component:()=> import("@/views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component:()=> import("@/views/sys/Login.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    component: () => import( "@/views/About.vue"),
  },
  {
    path: '/403',
    name: '403',
    component:()=>import("@/views/error/403.vue")
  },
  {
    path: '/404',
    name: '404',
    component:()=>import("@/views/error/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
