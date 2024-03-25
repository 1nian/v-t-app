<template>
    <div>
        <el-table :data="tableData" style="width: 100%" show-overflow-tooltip>
            <el-table-column prop="date" label="Date" width="120" />
            <el-table-column prop="name" label="Name" width="80" />
            <el-table-column prop="address" label="Address" width="180" />
        </el-table>

        <el-space direction="vertical">
            <el-text>{{ names.join(',') }}</el-text>
            <el-text>{{ dates.join(',') }}</el-text>
        </el-space>
    </div>
</template>

<script lang="ts">
import { ref, computed, defineComponent, onMounted } from 'vue';

interface TableItem {
    name: string;
    date: string;
    address: string;
}

export default defineComponent({
    setup() {
        const tableData = ref<TableItem[]>([]);

        const names = computed(() => {
            return tableData.value.map(item => item.name);
        });
        const dates = computed(() => {
            return tableData.value.map(item => item.date);
        });

        onMounted(() => {
            tableData.value.push({
                name: '222',
                date: '555',
                address: 'cccc',
            });
        });

        return {
            tableData,
            names,
            dates,
        };
    },
});
</script>

<style scoped>
/* 样式 */
</style>
