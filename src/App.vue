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
import utils from "@/hooks/utils";

const isPath = utils.isPath;

</script>

<style scoped></style>
