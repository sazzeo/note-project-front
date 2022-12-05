import { defineStore } from "pinia";
import { computed } from "vue";
import { Member } from "@/types/member";
import { authApi } from "@/api/modules/auth";

export default defineStore("auth", () => {
  const member = ref<Member>(new Member());

  const isLogged = computed<boolean>(() => {
    return Boolean(member.value.id && true);
  });

  const initAuthToken = async (loginMember: Member): Promise<any> => {
    try {
      const res = await authApi.login(loginMember);
      member.value = res.data;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const deleteAuthToken = () => {
    member.value = new Member();
  };

  return {
    isLogged,
    member,
    initAuthToken,
    deleteAuthToken,
  };
});
