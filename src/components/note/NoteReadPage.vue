<template>
  <div>
    <el-row>
      <el-col class="title">
        {{note.title}}
      </el-col>
    </el-row>
    <el-row style="width: 100vw" justify="center">
      <el-col :span="24">
        <md-editor preview-only v-model="note.content" language="en-US" style="height: 75vh"
                   placeholder="글을 입력하세요"/>
      </el-col>
      <el-col :span="10">
        <el-button type="primary" class="submit-btn" size="large" @click="goModifyPage">글 수정</el-button>
        <el-button type="primary" class="submit-btn" size="large" @click="removeNote">글 삭제</el-button>
        <el-button class="submit-btn" size="large"
                   @click="goBack()"
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
import {noteApi} from "@/api/modules/note";
import {Note} from "@/types/common/note";
import {$store} from "@/hooks/store";

const noteSeq = utils.getParam("noteSeq");

const note = ref<Note>(new Note());
const noteForm = ref({title:""});

const getNote = async () =>{
  const res = await noteApi.get(noteSeq);
  note.value = res.data;
  console.log(res.data);
}
const auth = $store().auth;

const removeNote = async () => {
  alert("정말 삭제하시겠습니까?");
  await noteApi.remove(parseInt(noteSeq));
  utils.goBack();
}

const goBack = utils.goBack;

const goModifyPage = ()=>{
  utils.goPath("/notes/modify/"+ note.value.noteSeq);
}

onMounted(()=>{
  getNote();
})


</script>
<style scoped>
.title {

  font-size: 20px;
  margin: 20px 0;
  padding: 0px 0 15px 0;
  border-bottom: solid thin lightgray;
}

.submit-btn {
  padding: 0px 20px;
  font-size: 16px;
  margin: 5px 10px;
}

</style>
