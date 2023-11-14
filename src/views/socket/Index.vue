<template>
    <div class="sock">
        <el-button class="sock-button" type="success" @click="flag = !flag">click</el-button>

        <el-collapse-transition>
            <div v-show="flag">
                <div class="item"></div>
                <div class="item"></div>
            </div>
        </el-collapse-transition>

        <Upload></Upload>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Upload from './Upload.vue';

const flag = ref(false);
</script>

<style scoped lang="scss">
.sock-button {
    width: 80px;
}
.item {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    background-color: #ff6700;
}
</style>
