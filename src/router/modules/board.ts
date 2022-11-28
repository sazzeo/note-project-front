import { RouteRecordRaw } from "vue-router";

const router: Array<RouteRecordRaw> = [
    {
        path: '/boards',
        component: () => import("@/components/board/BoardList.vue"),
        name: "boards",
        meta: {
            title: "보드 페이지",
        },
    },
];

export default router;
