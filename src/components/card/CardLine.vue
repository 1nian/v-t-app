<template>
    <div :class="['crad-line', { 'crad-line-active': currentIndex === index }]" v-for="(item, index) in lineList" :key="index" @click="changeLine(item, index)">
        <div class="line-name">{{ item.name }}</div>
        <div class="line-value">{{ item.value }}</div>
        <div class="line-desc" v-if="currentIndex === index && item.type === 'single'">
            <CardSingle :singleList="item.desc"></CardSingle>
        </div>
        <div class="line-desc" v-if="currentIndex === index && item.type === 'multiple'">
            <CardMultiple :multipleList="item.desc"></CardMultiple>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Desc {
    name: string;
    value?: string;
}

interface Line {
    name: string;
    value: string;
    desc: Desc[];
    type: 'single' | 'multiple';
}

interface Props {
    lineList: Line[];
}

// 基于类型申明

// 不赋默认值
// defineProps<Props>();

// 赋默认值
withDefaults(defineProps<Props>(), {
    lineList: () => [],
});

const currentIndex = ref<number | null>(null);

const changeLine = (item: Line, index: number) => {
    if (currentIndex.value === index) {
        currentIndex.value = null;
        return;
    }

    currentIndex.value = index;
};
</script>

<style scoped lang="scss">
.crad-line {
    width: 186px;
    height: 100%;
    padding: 5px 10px;
    background-color: #f5f7fa;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    cursor: pointer;
    .line-name {
        font-size: 14px;
        color: #717274;
    }
    .line-value {
        width: 80px;
        height: 22px;
        color: #5473e8;
        font-size: 12px;
        text-align: center;
        line-height: 22px;
        background-color: rgba(84, 115, 232, 0.2);
    }
    .line-desc {
        position: absolute;
        top: 32px;
        z-index: 2;
    }
}
.crad-line-active {
    background-color: rgba(153, 153, 153, 0.25);
}
</style>
