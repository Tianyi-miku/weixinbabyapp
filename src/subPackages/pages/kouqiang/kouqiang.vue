<!-- @vue-skip -->
<template>
  <nut-calendar-card v-model="dakaDate" @change="onChange">
    <template #bottom="{ day }">
      <div v-for="(item, index) in list" :key="index">
        {{ showData(item, day) }}
      </div>
    </template>
  </nut-calendar-card>

  <div class="card">
    <div class="title" v-for="(item, index) in records" :key="index">
      <div> {{ item.name }}</div>
      <div> {{ dayjs(dakaDate.value).format('YYYY-MM-DD HH:mm:ss') }}</div>
      <div> {{ item.comment }}</div>
    </div>
  </div>
  <div class="buttons">
    <div>
      <nut-button type="primary" @click="daka">刷牙打卡</nut-button>
    </div>
    <div>
      <nut-button type="info" @click="Taro.navigateTo({
    url: '/subPackages/pages/kouqiangjilu/kouqiangjilu'
  })">口腔记录</nut-button>
    </div>
  </div>
</template>
<script setup>
import Axios from '../../../util/axios';
import Taro from '@tarojs/taro'
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro'


const list = ref([])
const records = ref([])
const dakaDate = ref(dayjs().toDate())
const baby = Taro.getStorageSync('user')
dayjs.extend(isBetween)

useDidShow(() => {
  getlist()
  getRecorder()
})

function getlist() {
  let babyId = Taro.getStorageSync('user')?.id
  Axios.get(`/teeth/month?babyId=${babyId}&month=${dayjs(dakaDate.value).format('YYYY-MM-DD')}`).then(res => {
    list.value = res
  })
}

function getRecorder() {
  let babyId = Taro.getStorageSync('user')?.id
  Axios.get(`/teeth/record?babyId=${babyId}&date=${dayjs(dakaDate.value).format('YYYY-MM-DD')}`).then(res => {
    records.value = res
  })
}

const onChange = (val) => {
  dakaDate.value = val
  getRecorder()
}

function daka(params) {
  const data = {
    babyId: baby.id,
    measureTime: dayjs(dakaDate.value).format('YYYY-MM-DD HH:mm:ss')
  }
  Axios.post('/teeth/add', data).then(res => {
    Taro.showToast({
      title: '打卡成功',
      icon: 'success',
      duration: 1000
    })
    getlist()
  })
}

function showData(item, day) {
  if (isTimeWithinDay(item.measureTime, `${day.year}-${day.month}-${day.date}`)) {
    if (item.brushTimes === 1) {
      return '◐'
    }
    if (item.brushTimes === 2) {
      return '◉'
    }
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
</script>
<style>
.title {
  padding: 0.5rem;
}

.card {
  margin: 1rem;
  height: 20vh;
  border-radius: 16px;
  background-color: aliceblue;
}

.buttons {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
}
</style>