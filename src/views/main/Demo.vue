<template>
    <el-text class="main-demo" v-tooltip>
        {{ msg }}
    </el-text>
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
    display: block;
}
</style>
