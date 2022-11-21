import { defineStore } from "pinia";
import selectBox from "@/stores/modules/selectBox";

export default defineStore("store", () => {
  return {
    selectBox: selectBox(),
  };
});
