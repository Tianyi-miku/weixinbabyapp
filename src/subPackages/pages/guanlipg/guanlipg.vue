<!-- Page A -->
<template>
  <div class="radio">
    <nut-radio-group v-model="val1" direction="horizontal" @change="getList">
      <nut-radio label="1" shape="button">身高</nut-radio>
      <nut-radio label="2" shape="button">体重</nut-radio>
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
import { useDidShow } from '@tarojs/taro'
import Axios from '../../../util/axios';

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
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '标准',
      type: 'line',
      data: []
    },
    {
      name: '最大',
      type: 'line',
      data: []
    },
    {
      name: '最小',
      type: 'line',
      data: []
    }
  ]
};

useDidShow(() => {
  getList()
})

function getList() {
  let babyId = Taro.getStorageSync('user')?.id
  if (val1.value === '1') {
    Axios.get(`/statistic/height/${babyId}`).then(res => {
      flush(res)
    })
  } else if (val1.value === '2') {
    Axios.get(`/statistic/weight/${babyId}`).then(res => {
      flush(res)
    })
  } else {
    Axios.get(`/statistic/head/${babyId}`).then(res => {
      flush(res)
    })
  }
}

function flush(res) {
  const echartComponentInstance = canvas.value; // 组件实例
  let Xdata = []
  let ydata = []
  let ydata1 = []
  let ydata2 = []
  res.data.forEach(item => {
    for (const key in item) {
      if (Object.hasOwnProperty.call(item, key)) {
        Xdata.push(key)
        ydata.push(item[key])
      }
    }
  })

  res.max.forEach(item => {
    for (const key in item) {
      if (Object.hasOwnProperty.call(item, key)) {
        ydata1.push(item[key])
      }
    }
  })
  res.min.forEach(item => {
    for (const key in item) {
      if (Object.hasOwnProperty.call(item, key)) {
        ydata2.push(item[key])
      }
    }
  })
  options.xAxis.data = Xdata

  options.series = [
    { name: '标准', type: 'line', data: ydata },
    { name: '最大', type: 'line', data: ydata1 },
    { name: '最小', type: 'line', data: ydata2 }
  ]
  Taro.nextTick(() => {
    // 初始化图表
    echartComponentInstance.refresh(options)
  });
}

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