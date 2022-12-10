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
    path: "/notes/write/:recodeSeq",
    component: () => import("@/components/note/NoteWritePage.vue"),
    name: "notes-write",
    meta: {
      title: "노트 write 페이지",
    },
  },
  {
    path: "/notes/read/:noteSeq",
    component: () => import("@/components/note/NoteReadPage.vue"),
    name: "notes-read",
    meta: {
      title: "노트 read 페이지",
    },
  },
  {
    path: "/notes/modify/:noteSeq",
    component: () => import("@/components/note/NoteWritePage.vue"),
    name: "notes-modify",
    meta: {
      title: "노트 modify 페이지",
    },
  },
];

export default router;
