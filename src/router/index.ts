import {createRouter, createWebHistory} from "vue-router";
import member from "@/router/modules/member";
import board from "@/router/modules/board";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ ...member , ...board],
});

export default router;
