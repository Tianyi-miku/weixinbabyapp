<!-- @vue-skip -->
<template>
  <nut-popup v-model:visible="showPopup">
    <img :src="nizhenbang"></img>
  </nut-popup>
  <nut-calendar-card v-model="dakaDate" @change="onChange">
    <template #bottom="{ day }">
      <div v-for="(item, index) in list" :key="index">
        <div v-html="showData(item, day)"></div>
      </div>
    </template>
  </nut-calendar-card>
  <div class="buttons">
    <nut-button class="dakbuttons" type="primary" @click="daka">刷牙打卡</nut-button>
  </div>

  <div class="card">
    <div class="title" v-for="(item, index) in records" :key="index">
      <div class="cardRow"> <span class="hongdian">●</span> <span style="padding-left: 4px;">{{ item.name
          }}</span></div>
      <div class="dakaDate"> {{ dayjs(dakaDate.value).format('YYYY-MM-DD HH:mm:ss') }}</div>
      <div class="comment"> {{ item.comment }}</div>
    </div>
  </div>

  <div class="tianjiajilu">
    <img class="tianjiajiluImg" :src="tianjiajilu" @click="Taro.navigateTo({
      url: '/subPackages1/pages/kouqiangjilu/kouqiangjilu'
    })" />
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
import nizhenbang from "../../../assets/img/nizhenbang.png"
import tianjiajilu from '../../../assets/img/tianjiajilu.png'

const list = ref([])
const records = ref([])
const dakaDate = ref(dayjs().toDate())
const baby = Taro.getStorageSync('user')
const showPopup = ref(false)
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
  if (val) {
    dakaDate.value = val
    getRecorder()
  }
}

function daka(params) {
  const data = {
    babyId: baby.id,
    // measureTime: dayjs(dakaDate.value).add(8, 'hour').format('YYYY-MM-DD HH:mm:ss')
    measureTime: dayjs(dakaDate.value).format('YYYY-MM-DD HH:mm:ss')
  }
  Axios.post('/teeth/add', data).then(res => {
    // Taro.showToast({
    //   title: '打卡成功',
    //   icon: 'success',
    //   duration: 1000,
    //   image: nizhenbang
    // })
    showPopup.value = true
    setTimeout(() => {
      showPopup.value = false
    }, 2000);
    getlist()

  })
}

function showData(item, day) {
  // let ishasTf = false
  // if (records.value && records.value.length > 0) {
  //   for (let index = 0; index < records.value.length; index++) {
  //     const element = records.value[index];
  //     if (isTimeWithinDay(element.measureTime, `${day.year}-${day.month}-${day.date}`)) {
  //       ishasTf = true
  //       break
  //     }
  //   }
  // }

  if (isTimeWithinDay(item.measureTime, `${day.year}-${day.month}-${day.date}`)) {
    let returnString = item.isRecord ? '<span class="hongdian">●</span>' : ''
    if (item.brushTimes === 1) {
      return returnString + '<span>🌙</span>'
    }
    if (item.brushTimes > 1) {
      return returnString + '<span>☀️</span>'
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
.comment {
  font-size: 1.1rem;
  color: #b6b4b4;
}

.dakaDate {
  font-size: 0.8rem;
  color: #b6b4b4;
}

.cardRow {
  display: flex;
}

.title {
  padding: 0.5rem;
}

.card {
  margin: 1rem;
  height: 20vh;
  border-radius: 16px;
  background-color: #F2F2F2;
  overflow-y: scroll;
}

.buttons {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
}

.dakbuttons {
  width: 100%;
}

.tianjiajilu {
  position: absolute;
  right: 5%;
  margin-top: 10px;

}

.tianjiajiluImg {
  width: 4rem;
  height: 4rem;
}

.hongdian {
  color: red;
  font-size: 0.9rem;
}

.nut-calendarcard-day-inner {
  margin: 0;
  padding: 0;
  top: 0px;
  position: absolute;
}
</style>