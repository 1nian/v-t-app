<template>
    <el-upload class="avatar-uploader" action="#" :show-file-list="false" :auto-upload="false" :on-change="handlerChange">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
import api from '@/api';

import type { UploadFile } from 'element-plus';

type Result = {
    code: number;
    data: string;
    message: string;
};

const imageUrl = ref('');

const handlerChange = async (file: UploadFile) => {
    const res: Result = await api.post(
        '/upload',
        {
            file: file.raw,
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
    );

    if (res.code === 201) {
        ElMessage({
            message: res.message,
            type: 'success',
        });
        imageUrl.value = res.data;
    } else {
        ElMessage({
            message: res.message,
            type: 'error',
        });
    }
};
</script>

<style scoped>
.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>
