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
      <el-button type="plane" text @click="$router.push('/login')"
        >로그인
      </el-button>
      <el-button type="plane" text @click="$router.push('/sign-up')"
        >회원가입
      </el-button>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">


</script>

<style scoped>
.default-header {
  width: 100vw;
}
</style>
