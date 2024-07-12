<template>
  <nut-calendar-card v-model="value" @change="onChange">
    <template #bottom="{ day }">
      <div v-for="(item, index) in list" :key="index" style="font-size: 0.6rem;">
        {{ showData(item, day) }}
      </div>
    </template>
  </nut-calendar-card>
  <div class="card">
    <div class="title">{{ Idate }}</div>
    <div class="content" v-for="(item, index) in records" :key="index">
      <div class="item"> 第{{ index + 1 }}次便便 </div>
      <div class="item">{{ swichIcoolor(item.color) }}色</div>
      <div class="item">{{ swichshape(item.shape) }}</div>
    </div>
  </div>
  <div class="buttons">
    <nut-button type="primary" block @click="Taro.navigateTo({
    url: '/subPackages/pages/paibianjilu/paibianjilu'
  })">便便打卡</nut-button>
  </div>
</template>
<script setup>
import dayjs from 'dayjs';
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import { useDidShow } from '@tarojs/taro'
import isBetween from 'dayjs/plugin/isBetween'
import Axios from '../../../util/axios';

const list = ref([])
const records = ref([])
const dakaDate = ref(dayjs().toDate())
const baby = Taro.getStorageSync('user')
const value = ref(dayjs().toDate())
dayjs.extend(isBetween)

useDidShow(() => {
  getlist()
  getRecorder()
})


function getlist() {
  let babyId = Taro.getStorageSync('user')?.id
  Axios.get(`/poop/month?babyId=${babyId}&month=${dayjs(dakaDate.value).format('YYYY-MM')}`).then(res => {
    list.value = res
  })
}

function getRecorder() {
  let babyId = Taro.getStorageSync('user')?.id
  Axios.get(`/poop/date?babyId=${babyId}&date=${dayjs(dakaDate.value).format('YYYY-MM-DD')}`).then(res => {
    records.value = res
  })
}

const onChange = (val) => {
  dakaDate.value = dayjs(val).format('YYYY-MM-DD HH:mm:ss')
  getRecorder()
}

function showData(item, day) {
  if (isTimeWithinDay(item, `${day.year}-${day.month}-${day.date}`)) {
    return '🟡'
  }
}

function isTimeWithinDay(targetTimeString, dayDateString) {
  // 创建表示“另外一天”的开始和结束时间的 Dayjs 对象  
  const dayStart = dayjs(dayDateString).startOf('day');
  const dayEnd = dayjs(dayDateString).endOf('day');

  // 创建表示目标时间的 Dayjs 对象  
  const targetTime = dayjs(targetTimeString);

  // 确保目标时间和“另外一天”的日期部分相同  
  if (targetTime.isSame(dayStart, 'day')) {
    // 判断目标时间是否在当天的开始和结束时间之间  
    return targetTime.isBetween(dayStart, dayEnd, null, '[]'); // 包含边界值  
  }

  // 如果日期部分不同，则时间不在该天内  
  return false;
}


function swichIcoolor(value) {
  let color
  switch (value) {
    case 1:
      color = '黄'
      break;
    case 2:
      color = '绿'
      break;
    case 3:
      color = '褐'
      break;
    case 4:
      color = '灰'
      break;
    case 5:
      color = '黑'
      break;
    case 6:
      color = '红'
      break;
    default:
      break;
  }
  return color
}

function swichshape(value) {
  let shap
  switch (value) {
    case 1:
      shap = '正常'
      break;
    case 2:
      shap = '稀便'
      break;
    case 3:
      shap = '水样'
      break;
    case 4:
      shap = '粘稠'
      break;
    case 5:
      shap = '较干'
      break;
    case 6:
      shap = '干硬'
      break;
    default:
      break;
  }
  return shap
}

</script>

<style>
.title {
  width: 100%;
  text-align: center;
}

.content {
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  /* background-color: #ffecec; */
  border-radius: 8px;
  font-size: 0.8rem;
}

.item {
  padding-left: 1rem;
}

.card {
  margin: 1rem;
  height: 20vh;
  border-radius: 16px;
  background-color: #F2F2F2;
}

.buttons {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
}
</style>