<template>
    <div class="to-do-list">
        <el-input type="text" placeholder="请输入今日任务名称..." v-model="currentText" @keyup.enter="addList" />

        <el-text class="mx-1" type="info">总数：{{ currentList.length }} 已完成：{{ currentList.filter(item => item.state).length }} 未完成：{{ currentList.filter(item => !item.state).length }}</el-text>

        <el-scrollbar max-height="300px">
            <TransitionGroup tag="div" enter-active-class="animate__animated animate__backInLeft" leave-active-class="animate__animated animate__backOutLeft">
                <div v-for="(item, index) in currentList" :key="item.id">
                    <div class="do-item">
                        <el-checkbox v-model="item.state" @change="changCurrentItem(index)" />
                        <el-text :class="['mx-1', 'name', { 'active-name': item.state }]" v-tooltip>
                            {{ item.name }}
                        </el-text>
                        <el-text class="mx-1 create-time" type="info">{{ item.created_time }}</el-text>
                        <el-text class="mx-1 update-time" type="info">{{ item.update_time }}</el-text>
                    </div>
                </div>
            </TransitionGroup>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { ToDo } from './types/Index';
// 当前任务
const currentText = ref<string>('');

// 存储任务列表
const currentList = ref<ToDo[]>([]);

// 数据存储
const setList = () => {
    localStorage.setItem('ToDo', JSON.stringify(currentList.value));
};

// 数据获取
const getList = () => {
    if (localStorage.getItem('ToDo')) {
        currentList.value = JSON.parse(localStorage.getItem('ToDo') || '');
    } else {
        currentList.value = [];
    }
};

// 当前时间
const currentTime = computed(() => {
    return `${new Date().toLocaleDateString().replaceAll('/', '-')} ${new Date().toLocaleTimeString()}`;
});

// 添加任务
const addList = () => {
    if (!currentText.value.trim()) return;

    currentList.value.push({
        id: new Date().getTime(),
        name: currentText.value,
        state: false,
        created_time: currentTime.value,
        update_time: '',
    });

    currentText.value = '';

    setList();
};

// 改变任务状态
const changCurrentItem = (index: number) => {
    currentList.value.splice(index, 1);

    setList();
};

onMounted(() => {
    getList();
});

onUnmounted(() => {
    localStorage.removeItem('ToDo');
});
</script>

<style scoped lang="scss">
.to-do-list {
    width: 500px;
    height: 100%;
    margin: 50px auto 0;
    border-radius: 2px;
    padding: 0 15px;
    box-sizing: border-box;
    .do-item {
        height: 30px;
        font-size: 16px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        margin: 10px 0;
        border: 1px solid #ff6700;
        border-radius: 4px;
        :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
            background-color: #ff6700;
            border-color: #ff6700;
        }
        .name {
            text-align: left;
            margin: 0 10px;
        }
        .create-time {
            margin-right: 10px;
        }
        .active-name {
            color: #ff6700;
        }
    }
}
</style>
