<template>
    <Demo msg="看啥sdasdas大的">{{ Class[1] }}</Demo>
</template>

<script setup lang="ts">
import Demo from './Demo.vue';
enum Class {
    重大风险 = 1,
    一般风险,
    低风险,
}
</script>

<style scoped lang="scss"></style>
