import { defineStore } from "pinia";
import selectBox from "@/stores/modules/selectBox";
import auth from "@/stores/modules/auth";

export default defineStore(
  "store",
  () => {
    return {
      selectBox: selectBox(),
      auth: auth(),
    };
  },
  {
    persist: {
      key: "auth",
      paths: ["auth.member"],
    },
  }
);
