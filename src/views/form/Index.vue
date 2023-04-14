<template>
  <input type="text" v-model="model.dates" />
  <input type="text" v-model="model.inputs" />
</template>

<script setup lang="ts">
import { useVModel } from "./useVModel";

const props = defineProps({
  search: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["update:search"]);

const model = useVModel(props, "search", emit);
</script>

<style scoped lang="scss"></style>
