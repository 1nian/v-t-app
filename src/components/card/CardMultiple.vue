<template>
    <div class="card-multiple">
        <template v-for="item in multipleList">
            <div class="multiple-name">
                <div :class="['box', { 'box-active': item.isBoxActive }]"></div>
                <div class="name">{{ item.name }}</div>
            </div>
            <div :class="['multiple-value', { 'multiple-value-active': item.isSizeActive }]">{{ item.value }}</div>
        </template>
    </div>
</template>

<script setup lang="ts">
interface Multiple {
    name: string;
    value: string;
    isBoxActive: boolean;
    isSizeActive: boolean;
}

type MultipleList = Multiple[];
withDefaults(defineProps<{ multipleList: MultipleList }>(), {
    multipleList: () => [],
});
</script>

<style scoped lang="scss">
.card-multiple {
    width: 217;
    height: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    gap: 10px;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 1);
    text-align: center;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.16);
    border: 1px solid rgba(126, 134, 142, 0.24);
    .multiple-name {
        display: flex;
        align-items: center;
        .box {
            width: 6px;
            height: 6px;
            border: 1px solid rgba(15, 111, 255, 1);
            background-color: rgba(15, 111, 255, 0.2);
            margin-right: 5px;
            border-radius: 50%;
        }
        .box-active {
            background-color: rgba(187, 187, 187, 0.2);
            border: 1px solid rgba(187, 187, 187, 1);
        }
        .name {
            width: 160px;
            font-size: 13px;
            color: #555555;
            text-align: left;
        }
    }
    .multiple-value {
        color: #555555;
        font-size: 13px;
    }
    .multiple-value-active {
        color: #0f6fff;
    }
}
</style>
