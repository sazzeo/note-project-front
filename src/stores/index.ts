import { defineStore } from "pinia";
import selectBox from "@/stores/modules/selectBox";
import auth from "@/stores/modules/auth";
import SecureLS from "secure-ls";

const secret = "jy";

const ls = new SecureLS({
  encodingType: "aes",
  isCompression: false,
  encryptionSecret: secret,
});

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
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
      },
    },
  }
);
