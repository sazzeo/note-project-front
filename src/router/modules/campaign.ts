import { RouteRecordRaw } from "vue-router";

const prefix = "/main";

const router: Array<RouteRecordRaw> = [
  {
    path: `${prefix}/main`,
    component: () => import("@/components/MainPage.vue"),
    name: "main",
    meta: {
      title: "캠페인 요청/전송",
    },
  },
];

export default router;
