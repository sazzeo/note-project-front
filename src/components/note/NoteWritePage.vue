<template>
  <div>
    <el-row>
      <el-input placeholder="제목을 입력하세요 :)" v-model="noteForm.title" class="input" size="large"></el-input>
    </el-row>
    <el-row style="width: 100vw" justify="center">
      <el-col :span="24">
        <md-editor v-model="noteForm.content" language="en-US" style="height: 75vh" placeholder="글을 입력하세요"/>
      </el-col>
      <el-col :span="25">
        <el-button v-if="recodeSeq" type="primary" class="submit-btn" size="large" @click="addNote">글 등록</el-button>
        <el-button v-if="noteSeq" type="primary" class="submit-btn" size="large" @click="modifyNote">수정</el-button>
        <el-button class="submit-btn" size="large"
                   @click="utils.goBack()"
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

const recodeSeq = utils.getParam("recodeSeq");
const noteSeq = utils.getParam("noteSeq");

const noteForm = ref<Note>(new Note());

const auth = $store().auth;

const addNote = async () => {
  noteForm.value.recodeSeq = parseInt(recodeSeq);
  console.log("recodeSeq", parseInt(recodeSeq));
  const res = await noteApi.addNote(noteForm.value);
  console.log(res.data);
  await utils.goPath('/notes/' + auth.member.id);
}

const getNote = async () => {
  const res = await noteApi.get( parseInt(noteSeq));
  noteForm.value = res.data;
}

const modifyNote = async () => {
  await noteApi.modify(noteForm.value);
  await utils.goPath('/notes/' + auth.member.id);
}

onMounted(()=>{
  if(noteSeq) {
    getNote();
  }
})
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
