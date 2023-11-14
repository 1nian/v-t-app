<template>
    <div class="main">
        <el-space v-model="size">
            <Demo v-permission:[store.permission]="store.permissionKey" msg="看啥sdasdas大的看啥sdasdas大的看啥sdasdas大的">{{ Class[1] }}</Demo>

            <el-text>权限列表：{{ store.permission.join(',') }}</el-text>
            <el-text>权限key：{{ store.permissionKey }}</el-text>
        </el-space>

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
import { ref, provide } from 'vue';
import { usePermissonStore } from '@/store/permission';

enum Class {
    重大风险 = 1,
    一般风险,
    低风险,
}

provide('card-enum', Class);

const { x, y } = useMouse();
const size = ref(20);

const store = usePermissonStore();
</script>

<style scoped lang="scss">
.main {
    height: 800px;
}
</style>
