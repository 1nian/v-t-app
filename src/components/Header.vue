<template>
    <el-row :gutter="20">
        <el-col :span="4" v-for="(item, index) in list" :key="index" @click="goPage(item.path)">
            <el-text class="mx-1" :type="$route.path === item?.path ? 'success' : ''">{{ item?.meta?.title }}</el-text>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { routes } from '@/router/router';
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const list = computed(() => {
    return routes.filter(item => item?.meta?.title);
});

const router = useRouter();
const goPage = (path: string) => {
    router.push(path);
};
</script>

<style scoped lang="scss">
.mx-1:hover {
    cursor: pointer;
}
</style>
