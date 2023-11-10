<template>
    <div class="lazy">
        <img v-lazy="item" width="360" height="500" v-for="item in arr" alt="" />
    </div>
</template>

<script setup lang="ts">
const imageList: Record<string, { default: string }> = import.meta.glob('@/assets/images/*.*', { eager: true });
const arr = Object.values(imageList).map(i => i.default);
</script>

<style scoped lang="scss">
.lazy {
    width: 360px;
    height: 500px;
    margin: 0 auto;
    img {
        display: block;
        margin-bottom: 20px;
    }
}
</style>
