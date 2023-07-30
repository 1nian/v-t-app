<template>
    <div ref="el" :style="style" style="position: fixed">我是x{{ x }},我是y{{ y }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDraggable } from '@vueuse/core';

const el = ref<HTMLDivElement | null>(null);

const { x, y, style } = useDraggable(el, {
    initialValue: { x: 0, y: 0 },
});
</script>

<style scoped></style>
