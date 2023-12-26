<template>
    <el-space class="sock">
        <el-space>
            <Upload></Upload>
        </el-space>
    </el-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Upload from './Upload.vue';
</script>

<style scoped lang="scss">
.sock {
    .sock-button {
        width: 80px;
    }
    .item {
        width: 100px;
        height: 100px;
        margin-bottom: 20px;
        background-color: #ff6700;
    }
    .code {
        cursor: pointer;
    }
}
</style>
