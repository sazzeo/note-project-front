<template>
  <el-row>
    <el-col :span="24">
      <el-menu
          background-color="#ECECED"
          active-text-color="#F7941D"
          default-active="2"
          class="el-menu-vertical-demo"
          default-openeds="100"
      >
        <el-sub-menu
            v-for="menu of menus"
            :key="menu.menuSeq"
            :index="menu.menuSeq"
        >
          <template #title>
            <el-icon>
              <location/>
            </el-icon>
            <span>{{ menu.menuName }}</span>
          </template>
          <el-menu-item
              v-if="recodes"
              v-for="recode of recodes"
              :key="recode.recodeSeq+''"
              :index="recode.recodeSeq+''"
          >
            <template #title>{{ recode.recodeName }}</template>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import {Location, Setting} from "@element-plus/icons-vue";
import {Menu} from "@/types/common/menu";
import utils from "@/hooks/utils";
import {recodeApi} from "@/api/modules/recode";
import {Recode} from "@/types/common/recode";
const id = ref();
const menus = ref<Array<Menu>>([
  {
    menuSeq: 100,
    menuName: "Notes",
    menuPath: "",
  },
]);

const recodes = ref<Array<Recode>>([]);

const getRecodes = async () => {

  const url : string[] = window.location.pathname.split("/");
  const id = url[url.length-1];
  const res = await recodeApi.getRecode(id);
  recodes.value = res.data;
}

onMounted(() => {
  getRecodes();
})
</script>
<style scoped></style>
