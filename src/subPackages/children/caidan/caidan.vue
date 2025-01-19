<template>
  <div class="beijing" v-if="isShowWz">
    <nut-radio-group v-model="val1" direction="horizontal" class="buttons1" @change="onChange">
      <nut-radio label="0" size="small" shape="button">早餐</nut-radio>
      <nut-radio label="1" size="small" shape="button">点心</nut-radio>
      <nut-radio label="2" size="small" shape="button">午餐</nut-radio>
      <nut-radio label="3" size="small" shape="button">点心</nut-radio>
      <nut-radio label="4" size="small" shape="button">晚餐</nut-radio>
    </nut-radio-group>
    <div class="content">

      <div class="tags">
        <nut-tag class="nut" type="success" v-for="(item, index) in list1" :key="index" closeable  color="#E9E9E9" text-color="#999999"
          @close="close(item.id)">
          <span style="width: 93%;">{{ item.name }}</span> 
        </nut-tag>
      </div>
    </div>
    <!-- <nut-radio-group v-model="val2" direction="horizontal">
    <nut-radio label="0" size="small" shape="button">主食</nut-radio>
    <nut-radio label="1" size="small" shape="button">鱼肉禽蛋</nut-radio>
    <nut-radio label="2" size="small" shape="button">蔬菜</nut-radio>
    <nut-radio label="3" size="small" shape="button">水果</nut-radio>
    <nut-radio label="4" size="small" shape="button">坚果</nut-radio>
    <nut-radio label="5" size="small" shape="button">豆类</nut-radio>
  </nut-radio-group> -->
    <div style="display: flex;flex-direction:row;">
      <nut-input v-model="val" placeholder="请输入食材" clearable>
      </nut-input>
      <nut-button type="primary" @click="addTolist">添加</nut-button>
    </div>
    <div class="title">
      食材清单
    </div>
    <div class="buttons">
      <nut-tag v-for="(item, index) in list" :key="index" round type="primary" class="nuttag" closeable
        @close="close(item.id)"> {{ item.name }} </nut-tag>
    </div>

    <div class="title">推荐</div>
    <div class="tuijian">
      <div @click="Taro.navigateTo({ url: '/subPackages/caidan/caidan1/clff' })" class="buttons2">一日饮食</div>
      <div @click="Taro.navigateTo({ url: '/subPackages/caidan/caidan2/clff' })" class="buttons2">一周饮食</div>
      <div @click="Taro.navigateTo({ url: '/subPackages/caidan/caidan3/clff' })" class="buttons2">摄入建议</div>
    </div>
  </div>
  <div v-else>
    菜单
  </div>
</template>
<script setup>
import Taro from '@tarojs/taro'
import { ref } from 'vue'
import { useDidShow } from '@tarojs/taro'
import Axios from '../../../util/axios';
import dayjs from 'dayjs';
import { getCurrentInstance } from '@tarojs/taro'
import { isShowWz } from "../../../util/ip"

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
    let ilist = []
    if (res) {
      res.forEach(element => {
        for (const key in element) {
          const item = element[key];
          ilist.push({
            id: key,
            name: item
          })
        }
      });
    }
    list.value = ilist
  })
}

function close(params) {
  console.log(params);
  Axios.delete(`/meal/${params}`).then(res => {
    getListByType(date)
    getList()
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
  /* padding-bottom: 5rem; */
  /* width: 90%; */
  display: flex;
  flex-wrap: wrap;
  margin-left: 5%;
}

.content {
  width: 90%;
  display: flex;
  margin: auto;
  height: 9.375rem;
  border-radius: .625rem;
  background-color: #ffffff;
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 0.5rem;
  border-radius: 0.1rem;
  color: #a3a3a3;
}

.nut {
  margin: 0.2rem;
  height: 1rem;
  width: auto;
  width: 100%;
}

/* .nut-tag--success { */
  /* color: var(--nut-tag-default-color, #7e7e7e); */
  /* background: var(--nut-tag-success-background-color, #ffffff); */
  /* border: var(--nut-tag-border-width, 2rpx) solid transparent; */
  /* display: flex; */
  /* flex-direction: row; */
  /* width: 100%; */
  /* height: 0.8rem; */
  /* font-size: 1rem; */
  /* justify-content: start; */
/* } */

.nuttagContent {
  display: flex;
  padding: 0.5rem;
}

.nuttag {
  padding: 0.2rem;
  margin: 0.5rem;
  background: transparent;
  color: #000;
  font-size: 0.7rem;
  height: 1.5rem;
  border: 1rpx solid rgb(0, 0, 0);
}

.title {
  margin: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  margin-left: 5%;
}

.buttons1 {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;

}

.buttons2 {
  text-align: center;
  width: 30%;
  height: 1.5rem;
  background-color: rgb(231, 231, 231);
  border-radius: 5px;
}

.tuijian {
  display: flex;
  margin-left: 5%;
  justify-content: space-between;
  width: 90%;

}

.beijing {
  background-color: rgb(248, 248, 248);
  height: 100%;
}

.nut-radio__button {
  color: var(--nut-radio-label-font-color, #1d1e1e);
  background: transparent;
  /* font-weight: bold 2px; */
  color: #7e7e7e;
}

.nut-radio__button--active {
  background: transparent;
  border: 4rpx solid rgb(171, 197, 145);
  position: relative;
  font-weight: bold;
}

.nut-input {
  position: relative;
  width: 70%;
  padding: 20rpx 50rpx;
  display: flex;
  line-height: 40rpx;
  background: var(--nut-white, #fff);
  font-size: var(--nut-input-font-size, var(--nut-font-size-2, 28rpx));
  box-sizing: border-box;
  left: 5%;
  border-radius: .625rem;
}

.nut-button {
  height: 3rem;
  left: 2rem;
  width: 18%;
  line-height: var(--nut-button-small-line-height, 52rpx);
  padding: var(--nut-button-small-padding, 0 24rpx);
  font-size: 1rem;
  border-radius: .625rem;
}

.nut-tag--close {
  font-size: 6px;
  float: right;
}
</style>