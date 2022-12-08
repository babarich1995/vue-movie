import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import TvSeries from "../views/TvSeries.vue"
import UpComing from "../views/UpComing.vue"
import Movies from "../views/Movies.vue"

import Signin from "../views/Signin.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tvseries",
    name: "TvSeries",
    component: TvSeries,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
  },
  {
    path: "/upcoming",
    name: "UpComing",
    component: UpComing,
  },
 
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
