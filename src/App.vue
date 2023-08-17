<template>
    <el-config-provider :locale="zhCn">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <router-view></router-view>
        </el-container>
    </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
</script>
