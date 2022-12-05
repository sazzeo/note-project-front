<template>
  <div>
    <div v-if="recodes" v-for="recode in recodes">
      <div class="note-recode">{{recode.recodeName}}</div>
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
              <div class="note-card" @click="writeNote(recode.recodeSeq)">+ 새 노트 생성</div>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <el-button class="new-button" @click="dialogFormVisible = true">
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
import {Recode} from "@/types/common/note";
import utils from "@/hooks/utils";

const id = ref<string>(utils.getParam("id"));

const recodes = ref<Array<Recode>>([]);
const recodeForm = ref<Recode>(new Recode());
const dialogFormVisible = ref(false)

const getRecode = async () => {
  const res = await noteApi.getRecode(id.value);
  recodes.value = res.data;
}

const addRecode = async () => {
  const res = await noteApi.addRecode(recodeForm.value);
}


const confirm = async () => {
  await addRecode();
  closeDialog();

}

const closeDialog = () => {
  dialogFormVisible.value = false;
  recodeFrom.value.recodeName = "";
}

const writeNote = (recodeSeq : number) => {
  $router.push("/notes/write/" + recodeSeq);
}

onMounted(() => {
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

.new-button {
  margin: 50px 0;
}
</style>
