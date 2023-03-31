<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from "vue";
console.log(getCurrentInstance()?.proxy?.$utils.getImageUrl("vue"));
console.log("打包方式", import.meta.env.VITE_BASE_URL);
</script>
