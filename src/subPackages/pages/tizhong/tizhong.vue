<template>
  <div>
    <div>当前体重</div>
    <div>BMI指数</div>
    <div id="echarts"></div>
    <div>健康建议</div>
    <div></div>
    <nut-button size="large" @click="show = true" type="primary">更新体重</nut-button>
    <nut-number-keyboard v-model:visible="show" title="Title" overlay @input="onInput" @blur="show = false"
      @close="show = false"></nut-number-keyboard>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>