<template>
  <div>
    <div class="note-recode">지영의 노트</div>
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="hover">
          <el-row justify="center" align="middle">
            <div class="note-card">JAVA</div>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <el-row justify="center">
            <div class="note-card" @click="writeNote">+ 새 노트 생성</div>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-button class="new-button">새 분류 추가 +</el-button>
  </div>
</template>

<script setup lang="ts">

import {noteApi} from "@/api/modules/note";

const id = ref<string>($router.currentRoute.value.fullPath);

const getRecode = async () => {
  const res = await noteApi.get(id.value);
  console.log(res.data);
}

const writeNote = () => {
  $router.push("/notes/write");
}

onMounted(()=> {
  getRecode();
})


</script>

<style scoped>

.note-recode {
  font-size: 17px;
  font-weight: bold;
  margin: 15px 0;
}
.note-card {
  font-size: 20px;
  height: 80px;
  line-height: 80px;
}

.new-button{
  margin: 50px 0;
}
</style>
