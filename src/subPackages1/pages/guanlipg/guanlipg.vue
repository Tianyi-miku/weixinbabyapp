<!-- Page A -->
<template>
  <template v-if="isShowWz">
    <div class="radio">
      <nut-radio-group v-model="val1" direction="horizontal" @change="getList">
        <nut-radio label="1" shape="button">身高</nut-radio>
        <nut-radio label="2" shape="button">体重</nut-radio>
        <nut-radio label="3" shape="button">头围</nut-radio>
      </nut-radio-group>
    </div>
    <EChart ref="canvas" class="bar-chart" />
    <div class="cent">
      <img :src="wenhao" class="wenhao">
      世界卫生组织(WHO)2-5岁儿童成长数据绘制
    </div>
    <div class="wenbenhezi">
      <div class="wenbenbiaoti">
        什么是生长曲线？</div>
      <div class="wenbenneirong">
        以身高为例，简单来说，就是把宝宝每个月测试出来的身高记录下来，把每个值作为一个点，然后把这些点连成一条线，这条线就叫做身高曲线。同理，把多次测量的体重值连成线就是体重曲线，把头围值连成线就是头围曲线。身高、体重、头围三条曲线都是生长曲线。
      </div>
      <div class="wenbenbiaoti">
        生长曲线怎么看？</div>
      <div class="wenbenneirong">
        我国儿童身高、体重、头围的正常范围是3%和97%这两条曲线之间，也就是说，这三条曲线和夹在它们之间的绿色区域，就是生长指标正常的区域。如果宝宝的成长曲线在区间内，并且整体平缓向上，一般来说可以认为是正常的。</div>
    </div>
  </template>
  <div v-else>
    <nut-table :columns="columns" :data="data">
    </nut-table>
  </div>

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
import { isShowWz } from "../../../util/ip"
import wenhao from '../../../assets/img/wenhao.png'

const val1 = ref('1')
const canvas = ref(null);
let unit = ref('cm')
const columns = ref([
  {
    title: '评估',
    key: 'name'
  },
  {
    title: '备注',
    key: 'record'
  }
])
const data = ref([
  {
    name: '小美',
    record: '无'
  },
  {
    name: '小红',
    record: '无'
  },
])
const options = {
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      let relVal = '';
      for (let i = 0, l = params.length; i < l; i++) {
        relVal += (i === 0 ? '' : '\n') + `${params?.[i]?.seriesName} ${params[i]?.value} ${unit.value}`
      }
      return relVal
    },
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
    name: 'Rainfall(mm)',
    type: 'value'
  },
  series: [
    {
      name: '测量',
      type: 'line',
      data: [],
      itemStyle: {
        color: '#3E721D'
      }
    },
    {
      name: '最大',
      type: 'line',
      data: [],
      lineStyle: {
        type: 'dashed'
      },
    },
    {
      name: '最小',
      type: 'line',
      data: [],
      lineStyle: {
        type: 'dashed'
      },
    }
  ]
};

useDidShow(() => {
  getList()
})

function getList() {
  let babyId = Taro.getStorageSync('user')?.id
  if (val1.value === '1') {
    unit.value = 'cm'
    options.yAxis.name = '身高cm',
      Axios.get(`/statistic/height/${babyId}`).then(res => {
        flush(res)
      })
  } else if (val1.value === '2') {
    unit.value = 'kg'
    options.yAxis.name = '体重kg',
      Axios.get(`/statistic/weight/${babyId}`).then(res => {
        flush(res)
      })
  } else {
    unit.value = 'cm'
    options.yAxis.name = '头围cm',
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
    { name: '测量', type: 'line', data: ydata },
    {
      name: '最大', type: 'line', data: ydata1, lineStyle: {
        type: 'dashed'
      },
    },
    {
      name: '最小', type: 'line', data: ydata2, lineStyle: {
        type: 'dashed'
      },
    }
  ]
  Taro.nextTick(() => {
    // 初始化图表
    echartComponentInstance.refresh(options)
  });
}

</script>

<style>
.wenbenhezi {

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
}

.wenbenhezi .wenbenbiaoti {
  font-weight: bold;
  font-size: 14pt;
  width: 96%;
  height: 28pt;
  margin-top: 20px;
}

.wenbenhezi .wenbenneirong {
  list-style-type: disc;
  font-size: 12pt;
  width: 96%;
  margin-bottom: 20px;
}

.radio {
  width: 100%;
  text-align: center;
  padding-top: 0.5rem;
}

.wenhao {
  padding: 3rpx;
  width: 1rem;
  height: 1rem;
}

.bar-chart {
  height: 40vh;
  width: 100%;
}

.cent {
  padding-top: 0.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: small;
  margin-bottom: 0.5rem;
}

.bottomcontent {
  color: #7B7B7B;
  width: 90%;
  background: #F5F5F5;
  font-size: small;
  padding: 0.5rem;
  margin: auto;
}
</style>