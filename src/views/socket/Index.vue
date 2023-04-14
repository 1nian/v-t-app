<template>
  <ul>
    <li v-for="item in list">{{ item }}</li>
  </ul>

  <FormVue v-model:search="search" @update:search="updateSearch"></FormVue>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from "vue";
import FormVue from "../form/Index.vue";

const search = reactive({
  dates: "2023-04-04",
  inputs: "测试",
});

const instance = getCurrentInstance();

const list = ref<string[]>([]);

instance?.proxy?.$sockets.on("update:message", (msg: string) => {
  list.value.push(msg);
});

const updateSearch = (val: any) => {
  console.log(val);
};
</script>

<style scoped lang="scss"></style>
