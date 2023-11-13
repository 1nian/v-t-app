<template>
    <div class="main">
        <Demo msg="看啥sdasdas大的看啥sdasdas大的看啥sdasdas大的">{{ Class[1] }}</Demo>
        <div style="display: flex">
            <CardLine :lineList="cardList"></CardLine>
        </div>
        <el-text>鼠标位置：{{ x }} - {{ y }}</el-text>
    </div>
</template>

<script setup lang="ts">
import Demo from './Demo.vue';
import { cardList } from './list';
import { useMouse } from '@/feature/mouse';
import { provide } from 'vue';

enum Class {
    重大风险 = 1,
    一般风险,
    低风险,
}

provide('card-enum', Class);

const { x, y } = useMouse();
</script>

<style scoped lang="scss">
.main {
    height: 800px;
}
</style>
