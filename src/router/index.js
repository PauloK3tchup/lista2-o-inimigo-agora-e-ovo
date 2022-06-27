import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/musica",
      name: "musica",
      component: () => import("../views/MusicaView.vue"),
    },
    {
      path: "/conta",
      name: "conta",
      component: () => import("../views/ContaView.vue"),
    },
    {
      path: "/registrar",
      name: "registrar",
      component: () => import("../views/CriarContaView.vue"),
    },
  ],
});

export default router;
