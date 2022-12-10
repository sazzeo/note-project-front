<template>
  <el-row justify="center" align="middle">
    <el-col :span="8" class="logo">:) My Note</el-col>
  </el-row>
  <el-row class="login-page" justify="center" align="middle">
    <el-col :span="8" class="login-box">
      <el-row justify="center">
        <el-col :span="10" class="login-label"> Login </el-col>
      </el-row>
      <el-row justify="center" class="input">
        <el-col :span="18">
          <el-input
            v-model="loginForm.id"
            placeholder="아이디를 입력하세요"
            size="large"
          ></el-input>
        </el-col>
      </el-row>
      <el-row justify="center" class="input">
        <el-col :span="18">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            size="large"
          ></el-input>
        </el-col>
      </el-row>
      <el-row justify="center" class="input">
        <el-col :span="18">
          <el-button class="button" size="large" type="primary" @click="login"
            >로그인
          </el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <el-row justify="center" align="middle">
    <el-col :span="2" style="width: 100px; margin: 10px 0">
      <el-button text @click="$router.push('/sign-up')"> 회원가입 </el-button>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import {Member} from "@/types/member";

const loginForm = ref<Member>(new Member());

const auth = $store().auth;
const login = async () => {
  try {
    await auth.initAuthToken(loginForm.value);
    const id =auth.member.id;
    alert("로그인 되었습니다.");
    await $router.push(`/notes/${id}`);
  } catch (e) {
    console.log(e);
    alert(e);
  }
};
</script>

<style scoped>
.logo {
  margin: 40px 0;
  font-size: 30px;
}

.button {
  width: 276px;
}

.login-box {
  border: solid darkgray thin;
  border-radius: 7px;
  min-width: 400px;
  max-width: 400px;
  margin: 0 30px;
  padding-bottom: 20px;
}

.input {
  margin: 15px;
}

.login-label {
  text-align: center;
  margin: 20px 0;
  font-size: 25px;
  font-weight: bold;
}
</style>
