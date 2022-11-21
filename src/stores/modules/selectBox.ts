import { defineStore } from "pinia";
import { ref } from "vue";
import { codeApi } from "@/api/modules/code";

export default defineStore("selectBox", () => {
  const addresses = ref();

  const initAddresses = async () => {
    if (!addresses.value) {
      const res = await codeApi.selectAll();
      alert("실행");
      addresses.value = res.data;
      console.log("pinia address", addresses.value);
    }
  };

  return { addresses, initAddresses };
});
