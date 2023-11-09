<template>
    <div class="main-demo" v-tooltip>
        {{ msg }}
    </div>
</template>

<script setup lang="ts">
// 运行时声明
defineProps({
    msg: {
        type: String,
        required: true,
    },
});
</script>

<style scoped lang="scss">
.main-demo {
    width: 100px;
    // 强制换行
    white-space: nowrap;
}
</style>
