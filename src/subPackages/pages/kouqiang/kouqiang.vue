<template>
  <nut-calendar-card v-model="value" @change="onChange">
    <template #bottom="{ day }">
      {{ list.includes(day.date) ? '☺' : '' }}
    </template>
  </nut-calendar-card>

  <div class="card">
    <div class="title">涂氟</div>
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
import { ref } from 'vue'
import Axios from '../../../util/axios';
import Taro from '@tarojs/taro'

const value = ref(null)
const list = [1, 2, 3, 4]
const dakaDate = ref(null)
const baby = Taro.getStorageSync('user')

const onChange = (val) => {
  dakaDate.value = val
}

function daka(params) {
  const data = {
    babyId: baby.id,
    measureTime: dakaDate.value
  }
  Axios.post('/teeth/add', data).then(res => {
    Taro.showToast({
      title: '新增成功',
      icon: 'success',
      duration: 1000
    })
  })
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