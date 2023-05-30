<template>
  <ul>
    <li v-permission="item" v-for="item in list">{{ item }}</li>
  </ul>

  <FormVue v-model:searchs="searchs" @update:search="updateSearch"></FormVue>

  <!-- <button @click="load">下载</button> -->
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from "vue";
import FormVue from "../form/Index.vue";
import { vPermission } from '@/directives/permission'
// import download from '@/utils/download'

const searchs = reactive({
  dates: "2023-04-04",
  inputs: "测试",
});

const instance = getCurrentInstance();

const list = ref<string[]>(['222', '000']);

instance?.proxy?.$sockets.on("update:message", (msg: string) => {
  list.value.push(msg);
});

const updateSearch = (val: any) => {
  console.log(val);
};

// const load = () => {
//   download(['https://demo.herinapp.com/daqi-api//public/export/xlsx/2023年04月28日站点预警结果统计表.xlsx', 'https://demo.herinapp.com/daqi-api//public/export/word/2023年04月28日陕西省大气环境数据诊断分析.docx'])
// }
</script>

<style scoped lang="scss"></style>
