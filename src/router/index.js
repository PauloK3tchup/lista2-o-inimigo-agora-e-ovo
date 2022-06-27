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
      path: "/livros",
      name: "livros",
      component: () => import("../views/LiView.vue"),
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
    {
      path: "/editora",
      name: "editora",
      component: () => import("../views/EditoraView.vue"),
    },
    {
      path: "/autor",
      name: "autor",
      component: () => import("../views/AutorView.vue"),
    },
  ],
});

export default router;
