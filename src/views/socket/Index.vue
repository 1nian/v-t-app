<template>
    <el-space class="sock">
        <el-space direction="vertical">
            <el-button class="sock-button" type="success" @click="flag = !flag">click</el-button>

            <el-collapse-transition>
                <div v-show="flag">
                    <div class="item"></div>
                    <div class="item"></div>
                </div>
            </el-collapse-transition>
        </el-space>

        <el-space>
            <Upload></Upload>
            <Table></Table>
            <div v-html="code" @click="getCode" class="code"></div>
            <img src="/user/code" alt="" />
        </el-space>
    </el-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Upload from './Upload.vue';
import Table from './Table.vue';
import api from '@/api';

const flag = ref(false);

const code = ref('');
const getCode = async () => {
    const res: string = await api.get(`/user/code?${Math.random()}`);

    code.value = res;
};
getCode();
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
