<!-- Page A -->
<template>
  <div class="radio">
    <nut-radio-group v-model="val1" direction="horizontal">
      <nut-radio label="1" shape="button">身高</nut-radio>
      <nut-radio label="2" shape="button" @click="Taro.navigateTo({
        url: '/subPackages/pages/tizhong/tizhong'
      })">体重</nut-radio>
      <nut-radio label="3" shape="button">头围</nut-radio>
    </nut-radio-group>
  </div>
  <view class="bar-chart">
    <EChart ref="canvas" />
  </view>
  <div class="cent">世界卫生组织(WHO)2-5岁儿童成长数据绘制</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Taro from "@tarojs/taro";
import * as echarts from "echarts4taro3/lib/assets/echarts";; // 这里用了内置的，也可以用自定义的 echarts.js
import { loadEcharts } from "echarts4taro3";
loadEcharts(echarts); // 加载 echarts 库
import { EChart } from "echarts4taro3";

const val1 = ref('1')
const canvas = ref(null);
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
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
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
.radio {
  width: 100%;
  text-align: center;
  padding-top: 0.5rem;
}

.bar-chart {
  height: 40vh;
  width: 100%;
}

.cent {
  padding-top: 0.5rem;
  width: 100%;
  text-align: center;
  font-size: small;
}
</style>