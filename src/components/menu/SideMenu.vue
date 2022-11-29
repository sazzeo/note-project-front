<template>
  <el-row>
    <el-col :span="24">
      <el-menu
        background-color="#ECECED"
        active-text-color="#F7941D"
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu
          v-for="menu of menus"
          :key="menu.menuSeq"
          :index="menu.menuSeq"
        >
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ menu.menuName }}</span>
          </template>

          <el-menu-item
            v-for="childMenu of menu.childrenMenu"
            :key="childMenu.menuSeq"
            :index="childMenu.menuSeq"
            @click="redirect(childMenu.menuPath)"
          >
            <template #title>{{ childMenu.menuName }}</template>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { Location, Setting } from "@element-plus/icons-vue";
import { Menu } from "@/types/common/menu";

const menus = ref<Array<Menu>>([
  {
    menuSeq: "1",
    menuName: "Notes",
    menuPath: "",
    childrenMenu: [{ menuSeq: "3", menuName: "my note", menuPath: "/notes" }],
  },
]);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const redirect = (path: string) => {
  $router.push(path);
};
</script>
<style scoped></style>
