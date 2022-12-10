<template>
  <el-row
      :gutter="20"
      class="default-header"
      align="middle"
      justify="space-between"
  >
    <el-col :span="6">
      <div class="logo">:) My Note</div>
    </el-col>
    <el-col :span="6">
      <div v-if="auth.member.authToken">
        <el-button type="plane" text @click="$router.push('/login')"
        >{{ auth.member.nickname}}
        </el-button>
        <el-button type="plane" text @click="logout()"
        >로그아웃
        </el-button>
      </div>
      <div v-else>
        <el-button type="plane" text @click="$router.push('/login')"
        >로그인
        </el-button>
        <el-button type="plane" text @click="$router.push('/sign-up')"
        >회원가입
        </el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">

const auth = $store().auth;

const logout = () => {
  auth.deleteMember();
  $router.push('/login')
}

</script>

<style scoped>
.default-header {
  width: 100vw;
}
</style>
