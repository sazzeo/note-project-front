import { createRouter, createWebHistory } from "vue-router";
import campaign from "@/router/modules/campaign";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...campaign],
});

export default router;
