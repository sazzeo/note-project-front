import { RouteRecordRaw } from "vue-router";

const router: Array<RouteRecordRaw> = [
  {
    path: "/notes/:id",
    component: () => import("@/components/note/NoteList.vue"),
    name: "notes",
    meta: {
      title: "보드 페이지",
    },
  },
  {
    path: "/notes/write",
    component: () => import("@/components/note/NoteWritePage.vue"),
    name: "notes-write",
    meta: {
      title: "노트 write 페이지",
    },
  },
];

export default router;
