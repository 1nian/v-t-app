<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const list: string[] = ['1', '2']

const list2: Array<boolean> = [true, false]

const list3: any[] = [1, '2', true]

const count = ref(1)
</script>

<template>

  <div style="display:flex">
    <div class="button">
      TOP{{ count }}
    </div>

    <div class="card">
      <div class="title"></div>
    </div>

    <div class="card-2">
      <div class="title"></div>
    </div>

    <div class="text"></div>
    <div class="text-2"></div>
  </div>

</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}

.button {
  width: 40px;
  height: 18px;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  font-family: DIN-BlackItalicAlt-Regular, DIN-BlackItalicAlt;
  color: #EF6667;
  line-height: 18px;
  font-style: oblique;
  border-radius: 4px;
  border: 1px solid rgba(239, 102, 103, 0.50);
  background-color: rgba(239, 102, 103, 0.10);
  background-clip: text;
  -webkit-background-clip: text;
  /* -webkit-text-fill-color: transparent; */
}

.card {
  width: 343px;
  height: 308px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px 6px 6px 6px;
  opacity: 1;

  border: 1px solid #FFFFFF;

  .title {
    width: 100%;
    height: 50px;
    background: linear-gradient(180deg, rgba(228, 237, 255, 0.5) 0%, rgba(232, 236, 243, 0) 100%);
  }
}

.card-2 {
  width: 163px;
  height: 115px;
  background: linear-gradient(147deg, rgba(22, 120, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6px 6px 6px 6px;
  opacity: 1;
  border: 1px solid #FFFFFF;
}

.text {
  width: 313px;
  height: 46px;
  background: linear-gradient(90deg, rgba(253, 146, 4, 0.08) 0%, rgba(253, 146, 4, 0) 100%);
  border-radius: 2px 2px 2px 2px;
  opacity: 1;
  border: 1px solid rgba(253, 146, 4, 0.05);
}

.text-2{
  width: 343px;
height: 50px;
background: linear-gradient(174deg, rgba(22,120,255,0.1) 0%, rgba(255,255,255,0) 100%);
box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.08);
border-radius: 6px 6px 6px 6px;
opacity: 1;
border: 1px solid #FFFFFF;
}
</style>
