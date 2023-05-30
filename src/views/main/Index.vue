<template>
    <div class="main">
        <div class="main-item" v-for="(item, index) in list" @click="goPage(item.path)">
            {{ item?.meta?.title }}
        </div>
    </div>
</template>

<script setup>
import { routes } from '@/router/router.ts'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const list = computed(() => {
    return routes.filter(item => item?.meta?.title)
})

const router = useRouter()
const goPage = path => {
    router.push(path)
}
</script>

<style scoped lang='scss'>
.main {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .main-item {
        padding: 0 15px;
        cursor: pointer;
    }
}
</style>