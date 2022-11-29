<template>
  <el-container style="height: 100vh">
    <el-header class="web-header" style="height: 70px; padding: 0px">
      <header-layout />
    </el-header>
    <el-container>
      <el-aside width="230px">
        <el-scrollbar height="calc(100vh - 70px)">
          <side-layout></side-layout>
        </el-scrollbar>
      </el-aside>
      <el-main class="web-main">
        <el-scrollbar height="calc(100vh - 70px)">
          <main-layout></main-layout>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts"></script>

<script></script>
<style scoped>
.web-main {
  padding: 0px;
}
</style>
