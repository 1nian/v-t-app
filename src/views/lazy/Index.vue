<template>
    <div>
        <img v-lazy="item" width="360" height="500" v-for="item in arr" alt="">
    </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { vLazy } from '@/directives/lazy'

const imageList = import.meta.glob('@/assets/images/*.*', { eager: true })
const arr = Object.values(imageList).map(i => i.default) 	//.pop( for.jsx files 	// 如果你的语言
console.log(arr);



</script>

<style scoped lang='scss'></style>