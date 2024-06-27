<template>
  <div class="top">
    <div class="tiz">
      <div>当前体重(kg)</div>
      <div>{{ babyValue.nowWeight }}</div>
    </div>
    <div class="tiz">
      <div>BMI指数</div>
      <div> {{ (babyValue.bmi)?.toFixed(2) }}</div>
    </div>
  </div>
  <view class="bar-chart">
    <EChart ref="canvas" />
  </view>
  <div class="jianyi">健康建议</div>
  <div class="jianyi content">
    <div>{{ babyValue.suggestion }}</div>
  </div>

  <nut-cell title="当前体重" @click="show = true" :desc="showValue" />
  <nut-button size="large" type="primary" @click="submitTo">更新体重</nut-button>
  <nut-number-keyboard v-model:visible="show" type="default" overlay v-model="showValue" @blur="show = false"
    @close="show = false" confirm-text="提交"></nut-number-keyboard>
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
import dayjs from "dayjs";

const show = ref(false)
const canvas = ref(null);
const babyValue = ref({})
const showValue = ref('')
const value = ref('')


useDidShow(() => {
  getEhcart()
})

function getEhcart() {
  let babyId = Taro.getStorageSync('user')?.id
  Axios.get(`/basic/weight/${babyId}`).then(res => {
    babyValue.value = res
    showValue.value = res.nowWeight ? res.nowWeight.toString() : ''
    let time = res.weightList.map(item => dayjs(item.time).format('YYYY-MM-DD'))
    let weight = res.weightList.map(item => item.weight)
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
        data: time
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '体重',
          type: 'line',
          stack: 'Total',
          data: weight
        },
      ]
    };
    const echartComponentInstance = canvas.value; // 组件实例
    Taro.nextTick(() => {
      // 初始化图表
      echartComponentInstance.refresh(options)
    });
  })
}

function submitTo() {
  if (showValue.value) {
    let babyId = Taro.getStorageSync('user')?.id
    const data = {
      babyId: babyId,
      weight: parseFloat(showValue.value),
      measureTime: dayjs().format('YYYY-MM-DD')
    }
    Axios.post('/basic/add', data).then(res => {
      Taro.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 1000
      })
      setTimeout(() => {
        getEhcart()
      }, 1000);
    })
  } else {
    Taro.showToast({
      title: '请输入体重',
      icon: 'error',
      duration: 1000
    })
  }
}

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