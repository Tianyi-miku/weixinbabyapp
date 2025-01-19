<template>
  <nut-cell class="topDay" @click="show = true">
    <template #icon>
      {{ weeks?.[0] }} - {{ weeks?.[6] }}
      <DownArrow />
    </template>
  </nut-cell>
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
  <div class="bar-chart">
    <EChart ref="canvas" />
  </div>
  <div class="bar-chart1">
    <EChart ref="canvas1" />
  </div>
  <nut-button style="width: 95%; margin: auto;" block type="primary" @click="Taro.navigateTo({
    url: '/subPackages1/pages/shuimianguanli/shuimianguanli'
  })">手动记录</nut-button>

  <div class="wenbenhezi">
    <div class="wenbenbiaoti">健康建议</div>
    <div class="wenbenneirong">
      根据中国卫健委发布的《0岁-5岁睡眠卫生指南》，1-2岁左右的宝宝每日睡眠总时长约11-14小时，3-5岁的孩子则是10-13小时。良好睡眠模式，如充足的睡眠、较早就寝以促进最佳进餐时间，对宝宝预防肥胖具有重要意义
      <span class="neirongzibiaoti"> 睡前活动：</span>
      <span>安排3~4项睡前活动，如洗澡、换睡衣、讲故事等。活动内容每天基本保持一致，固定有序，温馨适度。活动时间控制在20分钟内，活动结束时，尽量确保儿童处于较安静状态。</span>
      <span class="neirongzibiaoti"> 睡眠环境：</span>
      卧室应空气清新，温度适宜。可在卧室开小灯，睡后应熄灯。不宜在卧室放置电视、电话、电脑游戏机等设备。
    </div>
  </div>

  <nut-popup v-model:visible="show" position="bottom">
    <nut-calendar-card v-model="riqix" type="week" firstDayOfWeek="1" @change="onChange"></nut-calendar-card>
    <nut-button block type="primary" @click="() => { show = false, showEachts(weeks[0]) }">确认</nut-button>
  </nut-popup>
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
import { DownArrow } from '@nutui/icons-vue-taro'

let val = ref()
let val1 = ref()
let weeks = ref([])
let show = ref(false)
const riqix = ref([])
const canvas = ref(null);
const canvas1 = ref(null);
const InightDuration = ref(null);


useDidShow(() => {
  weeks.value = getCurrentWeekDates()
  riqix.value = [dayjs(weeks.value[0]).toDate(), dayjs(weeks.value[6]).toDate()]
  showEachts(weeks.value[0])
})


const onChange = (val) => {
  if (val) {
    riqix.value = val
    weeks.value = getCurrentWeekDates(val[0])
  }
}

function showEachts(day) {
  let babyId = Taro.getStorageSync('user')?.id
  Axios.get(`/sleep/week?babyId=${babyId}&startDate=${day}`).then(res => {
    let time = res.map(item => dayjs(item.day).format('YYYY-MM-DD'))
    InightDuration.value = res.map(item => {
      let n = item.sleepTypeVos.find(e => e.type === 'night')
      if (n) {
        return n.duration
      }
      return null
    })
    let noonDuration = res.map(item => {
      let n = item.sleepTypeVos.find(e => e.type === 'noon')
      if (n) {
        return n.duration
      }
      return null
    })
    // let duration = res.map(item => item.duration)
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
          name: '夜间',
          type: 'bar',
          stack: 'Ad',
          barWidth: '60%',
          data: InightDuration.value,
          itemStyle: {
            color: '#3E721D'
          }
        },
        {
          name: '午睡',
          type: 'bar',
          stack: 'Ad',
          barWidth: '60%',
          data: noonDuration,
          itemStyle: {
            color: '#FFC269',
            borderRadius: [20, 20, 0, 0]
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

  Axios.get(`/sleep/time?babyId=${babyId}&startDate=${day}`).then(res => {
    console.log(res.map(item => dayjs(item).format('HH:mm')));

    const options1 = {
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
        data: weeks.value,
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
          name: '夜间入睡时间(时)',
          type: 'line',
          data: res.map(item => dayjs(item).format('HH')),
          itemStyle: {
            color: '#3E721D'
          }
        },
      ]
    };
    const echartComponentInstance1 = canvas1.value; // 组件实例
    Taro.nextTick(() => {
      // 初始化图表
      echartComponentInstance1.refresh(options1)
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
.nut-cell__icon {
  margin: auto;
}

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
  /* z-index: 0;  */
}

.bar-chart1 {
  height: 40vh;
  width: 100%;
  /* z-index: 0;  */
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

.neirongzibiaoti {
  font-weight: bold;
  text-align: left;
}
</style>