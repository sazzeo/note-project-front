<template>
  <div>
    <div class="title">{{id}}의 노트</div>
    <div v-if="recodes" v-for="recode in recodes">
      <div class="note-recode" text>{{ recode.recodeName }}</div>
      <el-row :gutter="12">
        <el-col :span="6" v-if="recode.notes" v-for="note in recode.notes">
          <el-card class="note-card-wrap" shadow="hover" @click="goReadNote(note.noteSeq)">
            <el-row justify="center" align="middle">
              <div class="note-card">{{note.title}}</div>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <el-row justify="center">
              <div class="note-add" @click="goWriteNote(recode.recodeSeq)">+ 새 노트 생성</div>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-button v-if="member.id== id " class="new-button" @click="dialogFormVisible = true">
      새 분류 추가 +
    </el-button>
    <el-dialog v-model="dialogFormVisible" title="분류 추가하기" width="400px">
      <el-form :model="recodeForm">
        <el-form-item label="새 분류 이름" :label-width="'100px'">
          <el-input v-model="recodeForm.recodeName" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">취소</el-button>
        <el-button type="primary" @click="confirm">
          추가하기
        </el-button>
      </span>
      </template>
    </el-dialog>

  </div>
</template>

<script setup lang="ts">

import {noteApi} from "@/api/modules/note";
import {Recode} from "@/types/common/recode";
import utils from "@/hooks/utils";
import {recodeApi} from "@/api/modules/recode";

const id = ref<string>(utils.getParam("id"));

const member = $store().auth.member;

const recodes = ref<Array<Recode>>([]);
const recodeForm = ref<Recode>(new Recode());
const dialogFormVisible = ref(false)

const getRecode = async () => {
  const res = await recodeApi.getRecode(id.value);
  recodes.value = res.data;
}

const addRecode = async () => {
  const res = await recodeApi.addRecode(recodeForm.value);
  recodes.value.push(res.data);
}

const getNotes = async () => {
  const res = await noteApi.getAll(id.value);
  recodes.value = res.data;
}


const confirm = async () => {
  await addRecode();
  closeDialog();
}

const closeDialog = () => {
  dialogFormVisible.value = false;
  recodeForm.value.recodeName = "";
}

const goWriteNote = (recodeSeq: number) => {
  $router.push("/notes/write/" + recodeSeq);
}

const goReadNote = (noteSeq : number) => {
  $router.push("/notes/read/" + noteSeq);
}

onMounted(() => {
  //getRecode();
  getNotes();
})

</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: bold;
  padding: 20px 0px;
  border-bottom: #dddddd solid thin;
}

.note-recode {
  font-size: 17px;
  font-weight: bold;
  margin: 40px 0 15px 0;
}
.note-card-wrap {
  background-color:  #f9e0a8;
}
.note-card {
  font-size: 20px;
  height: 80px;
  line-height: 80px;
}

.note-add {
  font-size: 15px;
  height: 80px;
  line-height: 80px;
}

.new-button {
  margin: 50px 0;
}
</style>
