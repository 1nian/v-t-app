<template>
  <input type="text" v-model="model.dates" />
  <input type="text" v-model="model.inputs" />
</template>

<script setup lang="ts">
import { useVModel } from "./useVModel";

const props = defineProps({
  searchs: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["update:searchs"]);

const model = useVModel(props, "searchs", emit);
</script>

<style scoped lang="scss"></style>
