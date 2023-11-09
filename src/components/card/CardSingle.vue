<template>
    <div class="card-single">
        <div class="single-name" v-for="item in singleList">
            <div class="box"></div>
            <div class="name">{{ item.name }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
type Single = {
    name: string;
};

type Props = {
    singleList: Single[];
};

withDefaults(defineProps<Props>(), {
    singleList: () => [],
});

const emit = defineEmits<{
    (e: 'single-click', item: Single): void;
}>();
</script>

<style scoped lang="scss">
.card-single {
    width: 370px;
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
    .single-name {
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
        .name {
            width: 160px;
            font-size: 13px;
            color: #555555;
            text-align: left;
        }
    }
}
</style>
