<template>
  <ul>
    <li v-for="item in list">{{ item }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";

const instance = getCurrentInstance();

const list = ref<string[]>([]);

instance?.proxy?.$sockets.on("update:message", (msg: string) => {
  list.value.push(msg);
});
</script>

<style scoped lang="scss"></style>
