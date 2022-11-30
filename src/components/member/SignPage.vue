<template>
  <div>
    <el-row justify="center">
      <el-col :span="24">
        <div class="logo">:) My Note</div>
      </el-col>
    </el-row>
    <el-row justify="center">
      <div class="sign-up">
        <el-form :model="form" label-width="80px">
          <el-form-item label="아이디">
            <el-input v-model="form.id" />
          </el-form-item>
          <el-form-item label="비밀번호">
            <el-input v-model="form.password" />
          </el-form-item>
          <el-form-item label="닉네임">
            <el-input v-model="form.nickname" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">회원 가입</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { Member } from "@/types/member";
import { authApi } from "@/api/modules/auth";

const form = ref<Member>({
  nickname: "",
  id: "",
  password: "",
});

const onSubmit = async () => {
  try {
    const res = await authApi.sign(form.value);
    alert("회원가입 되었습니다.");
    await $router.push("/login");
  } catch (e) {
    alert("회원가입에 실패했습니다.");
  }
};
</script>

<style scoped>
.logo {
  margin-top: 50px;
  font-size: 30px;
}

.sign-up {
  border: solid darkgray thin;
  border-radius: 7px;
  min-width: 400px;
  max-width: 400px;
  margin: 30px 30px;
  padding: 40px;
}
</style>
