<template>
  <div>
    <div v-move-tips>{{ `来自父组件的信息${number}` }}</div>
    <div>{{ $utils.getString(`${$utils.times()}`) }}</div>
    <button @click="changJJ">子组件点击</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";

interface Props {
  number: number;
}

const props = withDefaults(defineProps<Props>(), {
  number: 1,
});

const emit = defineEmits(["update:number"]);

const numbers = ref(0);

const changJJ = (): void => {
  numbers.value--;
  emit("update:number", numbers.value);
};

const glb = getCurrentInstance();

console.log(glb?.proxy?.$utils.getString("949494949494"));

onMounted(() => {
  numbers.value = props.number;
});
</script>

<style scoped></style>
