import { RouteRecordRaw } from "vue-router";

const router: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import("@/components/member/LoginPage.vue"),
        name: "login",
        meta: {
            title: "로그인 페이지",
        },
    },
    {
        path: '/sign-up',
        component: () => import("@/components/member/SignPage.vue"),
        name: "sign-up",
        meta: {
            title: "회원가입",
        },
    },
];

export default router;
