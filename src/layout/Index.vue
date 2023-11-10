<template>
    <div>
        <el-config-provider :locale="zhCn">
            <el-container>
                <el-header>
                    <Header />
                </el-header>
                <el-main>
                    <router-view v-slot="{ Component }">
                        <transition enter-active-class="animate__animated animate__fadeInLeftBig">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </el-main>
            </el-container>
        </el-config-provider>
    </div>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
</script>
