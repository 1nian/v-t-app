<template>
    <div class="main-box">
        <div class="search">
            <el-input v-model="search" clearable @clear="getCoffeeList"></el-input>
            <el-button :icon="Search" round @click="getCoffeeList">搜索</el-button>
            <el-button :icon="Plus" round @click="handleCreate">添加</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%" border max-height="500">
            <el-table-column label="名称" prop="name" />
            <el-table-column label="价格" prop="price" width="200" />
            <el-table-column label="描述" prop="description" />
            <el-table-column label="操作" align="center" width="200">
                <template #default="scope">
                    <el-button @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination v-model:current-page="pagination.currentPage" v-model:page-size="pagination.pageSize" :page-sizes="[10, 20, 50, 100]" layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        <el-dialog v-model="dialogFormVisible" title="Coffee">
            <el-form :model="form">
                <el-form-item label="名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="价格" :label-width="formLabelWidth">
                    <el-input v-model.number="form.price" autocomplete="off" />
                </el-form-item>
                <el-form-item label="描述" :label-width="formLabelWidth">
                    <el-input v-model="form.description" autocomplete="off" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="save"> Confirm </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { Search, Plus } from '@element-plus/icons-vue';
import api from '@/api';
import { Coffees, CoffeesLists } from '@/types';

/** 列表 **/
const search = ref('');
const tableData = ref<Coffees[]>([]);
const total = ref(0);
const pagination = reactive({
    currentPage: 1,
    pageSize: 10,
});

// 改变页数
const handleSizeChange = (val: number) => {
    pagination.pageSize = val;
    if (pagination.currentPage === 1) {
        getCoffeeList();
    }
};
// 改变页码
const handleCurrentChange = (val: number) => {
    pagination.currentPage = val;
    getCoffeeList();
};

// 获取咖啡列表
const getCoffeeList = async () => {
    let res = await api.post<CoffeesLists>(`/coffees/query`, {
        name: search.value,
        page: pagination.currentPage,
        limit: pagination.pageSize,
    });

    if (!res.success) {
        return;
    }

    tableData.value = res.data?.list ?? [];
    total.value = res.data?.total ?? 0;
};
getCoffeeList();

/** 表单 **/
const dialogFormVisible = ref(false);
const form = reactive<Coffees>({
    name: '',
    price: 0,
    description: '',
});
const formLabelWidth = '140px';

// 增加/编辑
const handleCreate = () => {
    dialogFormVisible.value = true;
};

const handleEdit = async (index: number, row: Coffees) => {
    let res = await api.get<Coffees>(`/coffees/${row._id}`);
    if (!res.success) {
        return;
    }

    dialogFormVisible.value = true;
    form.name = res.data.name;
    form.price = res.data.price;
    form.description = res.data.description;
    form._id = res.data._id;
};

const save = async () => {
    if (form?._id) {
        let data: Coffees = {
            name: form.name,
            price: form.price,
            description: form.description,
        };

        await api.patch(`/coffees/${form._id}`, data);
    } else {
        await api.post('/coffees', form);
    }
    getCoffeeList();
    dialogFormVisible.value = false;
};

// 删除
const handleDelete = async (index: number, row: Coffees) => {
    await api.delete(`/coffees/${row._id}`);

    getCoffeeList();
};
</script>

<style lang="scss" scoped>
.main-box {
    .search {
        display: flex;
    }
}
</style>
