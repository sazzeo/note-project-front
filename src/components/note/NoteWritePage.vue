<template>
  <div>
  <el-row>
    <el-input placeholder="제목을 입력하세요 :)" v-model="noteDetailForm.text" class="input" size="large"></el-input>
  </el-row>
  <el-row style="width: 100vw" justify="center">
    <el-col :span="24">
      <md-editor v-model="text" language="en-US" style="height: 75vh" placeholder="글을 입력하세요"/>
    </el-col>
    <el-col :span="25">
      <el-button type="primary" class="submit-btn" size="large">글 등록</el-button>
      <el-button class="submit-btn" size="large"
                 @click="utils.goPath('/notes/id')"
      >취소
      </el-button>
    </el-col>
  </el-row>
  </div>
</template>

<script setup lang="ts">
import MdEditor from "md-editor-v3";
import 'md-editor-v3/lib/style.css';
import utils from "@/hooks/utils";

const noteDetailForm = ref({text:""});
const text = ref("");


</script>
<style scoped>
.input {
  font-size: 25px;
  height: 60px;
  font-weight: bold;
}
.submit-btn {
  padding: 0px 20px;
  font-size: 16px;
  margin: 5px 10px;
}

</style>
