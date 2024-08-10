<template>
  <div>
    <nut-cell class="topDay" @click="show = true"> {{ weeks?.[0] }} - {{ weeks?.[6] }} </nut-cell>
    <div class="topRiqi">
      <div class="topList">
        <div class="item">
          周一
        </div>
        <div class="item">
          周二
        </div>
        <div class="item">
          周三
        </div>
        <div class="item">
          周四
        </div>
        <div class="item">
          周五
        </div>
        <div class="item">
          周六
        </div>
        <div class="item">
          周日
        </div>
      </div>
      <div v-for="item in weeks" :key="item" class="item">
        {{ dayjs(item).date() }}
      </div>
    </div>
    <cover-view class="bar-chart">
      <EChart ref="canvas" v-show="!show" />
    </cover-view>
  </div>
  <cover-view>
    <nut-popup v-model:visible="show" position="bottom">
      <nut-calendar-card v-model="riqix" type="week" firstDayOfWeek="1" @change="onChange"></nut-calendar-card>
      <nut-button block type="primary" @click="() => { show = false, showEachts(weeks[0]) }">确认</nut-button>
    </nut-popup>
  </cover-view>

  <nut-button style="width: 95%; margin: auto;" block type="primary" @click="Taro.navigateTo({
      url: '/subPackages/pages/shuimianguanli/shuimianguanli'
    })">手动记录</nut-button>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Taro from "@tarojs/taro";
import dayjs from "dayjs";
import * as echarts from "echarts4taro3/lib/assets/echarts";; // 这里用了内置的，也可以用自定义的 echarts.js
import { loadEcharts } from "echarts4taro3";
loadEcharts(echarts); // 加载 echarts 库
import { EChart } from "echarts4taro3";
import { useDidShow } from '@tarojs/taro'
import Axios from '../../../util/axios';

let val = ref()
let val1 = ref()
let weeks = ref([])
let show = ref(false)
const riqix = ref([])
const canvas = ref(null);


useDidShow(() => {
  weeks.value = getCurrentWeekDates()
  riqix.value = [dayjs(weeks.value[0]).toDate(), dayjs(weeks.value[6]).toDate()]
  showEachts(weeks.value[0])
})


const onChange = (val) => {
  riqix.value = val
  weeks.value = getCurrentWeekDates(val[0])
}

function showEachts(day) {
  let babyId = Taro.getStorageSync('user')?.id
  Axios.get(`/sleep/week?babyId=${babyId}&startDate=${day}`).then(res => {
    let time = res.map(item => dayjs(item.day).format('YYYY-MM-DD'))
    let duration = res.map(item => item.duration)
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
          name: '时长',
          type: 'bar',
          stack: 'Total',
          data: duration,
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

function getCurrentWeekDates(value) {
  // 获取当前日期 
  let today
  if (value) {
    today = dayjs(value);
  } else {
    today = dayjs();
  }
  // 计算本周的周一的日期（如果今天是周日，则周一是今天加1天；如果今天是周一，则就是今天）  
  const startOfWeek = today.subtract(today.day() ? today.day() - 1 : 6, 'day');
  // 创建一个数组来存储本周的日期（从周一开始）  
  const weekDates = [];
  // 循环生成从周一到周日的日期  
  for (let i = 0; i < 7; i++) {
    // 使用 add 方法获取本周的某一天  
    const date = startOfWeek.add(i, 'day');
    // 将日期添加到数组中  
    weekDates.push(date.format('YYYY-MM-DD'));
  }
  return weekDates;
}

</script>
<style>
.topDay {
  text-align: center;
  width: 100%;
  padding: 1rem;
}

.item {
  width: 14%;
  text-align: center;
}

.topRiqi {
  display: flex;
  flex-wrap: wrap;
}

.topList {
  width: 100%;
  display: flex;
}

.bar-chart {
  height: 40vh;
  width: 100%;
  z-index: 0;
}

.jieshu {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.kaishi {
  width: 20%;
}

.titles {
  height: 100%;
  padding-left: 1%;
  display: flex;
  align-items: center;
}

.rpicker {
  width: 80%;
  height: max-content;
}
</style>