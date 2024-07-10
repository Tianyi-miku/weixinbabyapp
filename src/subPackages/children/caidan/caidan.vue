<template>
  <nut-radio-group v-model="val1" direction="horizontal" class="buttons1" @change="onChange">
    <nut-radio label="0" size="small" shape="button">早餐</nut-radio>
    <nut-radio label="1" size="small" shape="button">点心</nut-radio>
    <nut-radio label="2" size="small" shape="button">午餐</nut-radio>
    <nut-radio label="3" size="small" shape="button">点心</nut-radio>
    <nut-radio label="4" size="small" shape="button">晚餐</nut-radio>
  </nut-radio-group>
  <div class="content">
    <div class="tags">
      <nut-tag class="nut" type="success" v-for="(item, index) in list1" :key="index"> {{ item.name }} </nut-tag>
    </div>
  </div>
  <nut-radio-group v-model="val2" direction="horizontal">
    <nut-radio label="0" size="small" shape="button">主食</nut-radio>
    <nut-radio label="1" size="small" shape="button">鱼肉禽蛋</nut-radio>
    <nut-radio label="2" size="small" shape="button">蔬菜</nut-radio>
    <nut-radio label="3" size="small" shape="button">水果</nut-radio>
    <nut-radio label="4" size="small" shape="button">坚果</nut-radio>
    <nut-radio label="5" size="small" shape="button">豆类</nut-radio>
  </nut-radio-group>
  <div>
    <nut-input v-model="val" placeholder="请输入食材" clearable>
      <template #right>
        <nut-button type="primary" size="small" @click="addTolist">添加</nut-button>
      </template>
    </nut-input>
  </div>
  <div class="title">
    食材清单
  </div>
  <div class="buttons">
    <nut-tag v-for="(item, index) in list" :key="index" round type="primary" class="nuttag"> {{ item }}</nut-tag>
  </div>
  <div class="buttons1">
    <div>
      <nut-button type="primary">菜品清单</nut-button>
    </div>
    <div>
      <nut-button plain @click="Taro.redirectTo({
    url: '/subPackages/children/guominshicai/guominshicai'
  })">过敏食材</nut-button>
    </div>
  </div>
</template>
<script setup>
import Taro from '@tarojs/taro'
import { ref } from 'vue'
import { useDidShow } from '@tarojs/taro'
import Axios from '../../../util/axios';
import dayjs from 'dayjs';
import { getCurrentInstance } from '@tarojs/taro'

const val1 = ref('0')
const val2 = ref('0')
const val = ref('')
const list = ref([])
const list1 = ref([])
const date = getCurrentInstance().router.params.date

useDidShow(() => {
  Taro.setNavigationBarTitle({ title: dayjs(date).format('YYYY年-MM月-DD日') })
  getListByType(date)
  getList()
})


function onChange() {
  getListByType()
}

function getListByType() {
  let babyId = Taro.getStorageSync('user')?.id
  let data = {
    babyId: babyId,
    type: Number(val1.value),
    date: dayjs(date).format('YYYY-MM-DD')
  }
  Axios.post(`/meal/type`, data).then(res => {
    list1.value = res
  })
}

function getList() {
  let babyId = Taro.getStorageSync('user')?.id
  Axios.get(`/meal/names/${babyId}`).then(res => {
    list.value = res
  })
}

function addTolist() {
  if (val.value) {
    let babyId = Taro.getStorageSync('user')?.id
    let data = {
      babyId: babyId,
      item: Number(val2.value),
      type: Number(val1.value),
      name: val.value,
      date: dayjs(date).format('YYYY-MM-DD HH:mm:ss'),
    }
    Axios.post(`/meal/add`, data).then(res => {
      Taro.showToast({
        title: '保存成功',
        icon: 'success',
        duration: 1000
      })
      val.value = ''
      getList()
      getListByType()
    })
  } else {
    Taro.showToast({
      title: '请输入食材',
      icon: 'error',
      duration: 1000
    })
  }
}


</script>
<style>
.buttons {
  padding-top: 2rem;
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.content {
  width: 90%;
  display: flex;
  margin: auto;
  height: 9.375rem;
  border-radius: .625rem;
  /* background-color: #aaaaaa; */
}

.tags {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
}

.nut {
  margin: 0.2rem;
  height: 1rem;
}

.nuttagContent {
  display: flex;
  padding: 0.5rem;
}

.nuttag {
  padding: 0.2rem;
  margin: 0.5rem;
  background: #7fadd6;
}

.title {
  margin: 0.5rem;
}

.buttons1 {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
}
</style>