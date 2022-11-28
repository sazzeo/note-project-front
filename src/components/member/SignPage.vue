<template>
  <div>

    <el-row justify="center">
      <el-col :span="24">
        <div class="logo">:) My Note</div>
      </el-col>
    </el-row>
    <el-row  justify="center">
      <div class="sign-up">
        <el-row >
          <el-col :span="24">사인</el-col>
        </el-row>
      </div>
    </el-row>

  </div>

</template>

<script setup lang="ts">


</script>

<style scoped>

.sign-up {
  border: solid darkgray thin;
  border-radius: 7px;
  min-width: 400px;
  max-width: 400px;
  margin: 0 30px;
  padding-bottom: 20px;
}

</style>