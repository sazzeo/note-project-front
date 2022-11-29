<template>
  <el-config-provider :locale="locale">
    <div v-if="isPath('/login')">
      <login-page></login-page>
    </div>
    <div v-else-if="isPath('/sign-up')">
      <sign-page></sign-page>
    </div>
    <div v-else>
      <base-layout></base-layout>
    </div>
  </el-config-provider>
</template>
<script setup lang="ts">
import locale from "element-plus/lib/locale/lang/ko";

const isPath = (path: string): boolean => {
  const fullPath = $router.currentRoute.value.fullPath;
  return fullPath === path;
};
</script>

<style scoped></style>
