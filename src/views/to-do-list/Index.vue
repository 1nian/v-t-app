<template>
  <div class="to-do-list">
    <input
      class="do-input"
      type="text"
      placeholder="请输入今日任务名称..."
      v-model="currentText"
      @keyup.enter="addList"
    />
    <div class="count">
      总数：{{ currentList.length }} 已完成：{{
        currentList.filter((item) => item.state).length
      }}
      未完成：{{ currentList.filter((item) => !item.state).length }}
    </div>
    <div class="do-item" v-for="item in currentList" :key="item.id">
      <input
        type="checkbox"
        v-model="item.state"
        @change="changCurrentItem(item)"
      />
      <div :class="['name', item.state ? 'active-name' : '']">
        {{ item.name }}
      </div>
      <div class="create-time">{{ item.created_time }}</div>
      <div class="update-time">{{ item.update_time }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { ToDo } from "./types/Index";
// 当前任务
const currentText = ref<string>("");

// 存储任务列表
const currentList = ref<ToDo[]>([]);

// 数据存储
const setList = () => {
  localStorage.setItem("ToDo", JSON.stringify(currentList.value));
};

// 数据获取
const getList = () => {
  if (localStorage.getItem("ToDo")) {
    currentList.value = JSON.parse(localStorage.getItem("ToDo") || "");
  } else {
    currentList.value = [];
  }
};

// 当前时间
const currentTime = computed(() => {
  return `${new Date()
    .toLocaleDateString()
    .replaceAll("/", "-")} ${new Date().toLocaleTimeString()}`;
});

// 添加任务
const addList = () => {
  if (!currentText.value.trim()) return;

  currentList.value.push({
    id: new Date().getTime(),
    name: currentText.value,
    state: false,
    created_time: currentTime.value,
    update_time: "",
  });

  currentText.value = "";

  setList();
};

// 改变任务状态
const changCurrentItem = (item: ToDo) => {
  currentList.value = currentList.value.map((items) => {
    if (items.id === item.id) {
      return {
        ...items,
        update_time: currentTime.value,
      };
    } else {
      return {
        ...items,
      };
    }
  });

  setList();
};

onMounted(() => {
  getList();
});
</script>

<style scoped>
.to-do-list {
  width: 500px;
  height: 300px;
  margin: 50px auto 0;
  border-radius: 2px;
  border: 1px solid #ff6700;
  padding: 0 15px;
  box-sizing: border-box;
}
.do-input {
  width: 100%;
  height: 20px;
  font-size: 14px;
  margin: 10px 0;
}
input {
  margin: 0;
  padding: 0;
  background: #ffffff;
  border: 1px solid #2da7e0;
  border-radius: 2px;
}
.do-input input:focus {
  border: none;
  box-shadow: 0 0 0 1px #42a7ff, 0 0 0 3px #bde7ff;
}
.do-item {
  width: 100%;
  height: 30px;
  font-size: 16px;
  line-height: 30px;
  border-bottom: 1px solid #ff6700;
  display: flex;
  align-items: center;
}
.name {
  margin: 0 10px;
}
.create-time {
  margin-right: 10px;
}
.active-name {
  color: #ff6700;
}
</style>
