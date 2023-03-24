import Vue from "vue";
import VueRouter from "vue-router";
import RootView from "../modules/RootView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: RootView,
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("../modules/home/HomeView.vue"),
        },
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("../modules/dashboard/DashboardView.vue"),
        },
      ],
    },
  ],
});

export default router;
