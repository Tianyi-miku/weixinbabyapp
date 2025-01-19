<template>
  <template v-if="isShowWz">
    <div class="top">
      <div class="tiz">
        <div>当前体重(kg)</div>
        <div>{{ babyValue?.nowWeight }}</div>
      </div>
      <div class="tiz">
        <div>BMI指数</div>
        <div> {{ (babyValue?.bmi)?.toFixed(2) }}</div>
      </div>
    </div>
    <view class="bar-chart">
      <EChart ref="canvas" />
    </view>
    <!-- <nut-cell title="当前体重" @click="show = true" :desc="showValue" v-if="isShowWz" tyle="width: 50%; 
  margin-left: 2.5%;" /> -->

    <nut-input v-model="showValue" input-align="right" placeholder="请输入当前体重" type="digit">
      <template #left>
        当前体重
      </template>
    </nut-input>
    <!-- <nut-cell title="更新时间" @click="showTime = true" :desc="dayjs(Timeval).format('YYYY-MM-DD HH:mm:ss')" v-if="isShowWz"
    tyle="width: 50%; 
  margin-left: 2.5%;" /> -->
    <nut-button size="large" type="primary" style="width: 95%; 
    margin-left: 2.5%;" @click="submitTo">更新体重</nut-button>
    <!-- <nut-number-keyboard v-model:visible="show" type="rightColumn" overlay v-model="showValue" @blur="show = false"  :custom-key="customKey"
    @close="show = false" ></nut-number-keyboard> -->

    <nut-popup v-model:visible="showTime" position="bottom">
      <nut-date-picker v-model="Timeval" :three-dimensional="false" type="datetime"
        @cancel="showTime = false"></nut-date-picker>
    </nut-popup>

    <div class="wenbenhezi">
      <div class="wenbenbiaoti">健康建议</div>
      <div class="wenbenneirong">{{ babyValue?.suggestion }}</div>
    </div>
  </template>
  <template v-else>
    个人建议
  </template>



</template>
<script setup>
import { isShowWz } from "../../../util/ip"
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
const Timeval = ref(new Date())
const showTime = ref(false)
const customKey = ref(['.'])


useDidShow(() => {
  getEhcart()
})

function getEhcart() {
  let babyId = Taro.getStorageSync('user')?.id
  Axios.get(`/basic/weight/${babyId}`).then(res => {
    babyValue.value = res
    showValue.value = res?.nowWeight ? res.nowWeight.toString() : '0'
    if (!res) {
      return
    }
    let time = res.weightList.map(item => dayjs(item.time).format('YYYY-MM-DD'))
    let weight = res.weightList.map(item => item.weight)
    const options = {
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: time,
        axisLabel: {
          fontSize: '0.6rem',
          formatter: (value) => {
            return dayjs(value).format('MM/DD')
          }
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '体重',
          type: 'line',
          barWidth: '60%',
          data: weight,
          itemStyle: {
            color: '#3E721D'
          }
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
    const time = dayjs(Timeval.value).format('YYYY-MM-DD HH:mm:ss')
    const data = {
      babyId: babyId,
      weight: parseFloat(showValue.value),
      measureTime: time
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

.nut-picker__right {
  display: none;
}

.wenbenhezi {
  /* 添加必要的CSS样式 */
  font-family: Arial, sans-serif;
  box-shadow: 0px 2px 8px rgb(201, 198, 198);
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  /* background-color: #8CC269; */
  border-radius: 15px;
  padding: 1rem;
}

.wenbenhezi .wenbenbiaoti {
  font-weight: bold;
  font-size: 14pt;
  width: 98%;
  height: 28pt;
  margin-top: 20px;
}

.wenbenhezi .wenbenneirong {
  list-style-type: disc;
  font-size: 12pt;
  width: 98%;
  margin-bottom: 40px;
}
</style>