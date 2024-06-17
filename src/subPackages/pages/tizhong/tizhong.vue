<template>
  <div class="top">
    <div class="tiz">
      <div>当前体重 (kg)</div>
      <div></div>
    </div>
    <div class="tiz">
      <div>BMI指数</div>
      <div></div>
    </div>
  </div>
  <view class="bar-chart">
    <EChart ref="canvas" />
  </view>
  <div class="jianyi">健康建议</div>
  <div class="jianyi content">
    <div>宝宝的体重高于正常水平，</div>
    <div>建议范围为 xx-xx kg。</div>
  </div>

  <nut-cell title="当前体重" @click="show = true" :desc="val" />
  <nut-button size="large" type="primary">更新体重</nut-button>
  <nut-number-keyboard v-model:visible="show" title="今天" overlay @input="onInput" v-model="val" @blur="show = false"
    @close="show = false" confirm-text="提交"></nut-number-keyboard>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Taro from "@tarojs/taro";
import * as echarts from "echarts4taro3/lib/assets/echarts";; // 这里用了内置的，也可以用自定义的 echarts.js
import { loadEcharts } from "echarts4taro3";
loadEcharts(echarts); // 加载 echarts 库
import { EChart } from "echarts4taro3";

const show = ref(false)
const canvas = ref(null);
const val = ref('')
const options = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
  ]
};

onMounted(() => {
  const echartComponentInstance = canvas.value; // 组件实例
  Taro.nextTick(() => {
    // 初始化图表
    echartComponentInstance.refresh(options)
  });
});
</script>

<style>
.top {
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: auto;
}

.bar-chart {
  height: 40vh;
  width: 100%;
}

.tiz {
  text-align: center;
}

.jianyi {
  padding: 1rem;
}

.content {
  background-color: beige;
  border-radius: 8px;
  margin: 0 1rem;
}
</style>