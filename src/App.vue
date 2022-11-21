<template>
  <el-config-provider :locale="locale">
    <base-layout></base-layout>
  </el-config-provider>
</template>
<script setup lang="ts">
import locale from "element-plus/lib/locale/lang/ko";
</script>

<style scoped></style>
