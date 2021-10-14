import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Home" },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { title: "About" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const DEFAULT_TITLE = " - ThingPilot";
router.afterEach((to) => {
  nextTick(() => {
    document.title =
      to.meta.title + DEFAULT_TITLE || DEFAULT_TITLE.split("-").pop().trim();
  });
});

export default router;
