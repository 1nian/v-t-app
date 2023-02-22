<template>
  <div class="text">
    <div v-move-tips class="text-1">{{ `我是父组件我是父组件我是父组件我是父组件` }}</div>
    <div v-move-tips class="text-1">{{ `我是父组件` }}</div>
    <button @click="changnumber">父组件点击</button>
    <Text2 v-model:number="number"></Text2>
  </div>
</template>

<script setup lang='ts'>
import Text2 from './Text2.vue'
import { ref, reactive } from 'vue'

const number = ref(110)

const changnumber = () => {
  number.value++
}

</script>

<style scoped>
.text {
  width: 200px;
  word-break: keep-all;
}
</style>