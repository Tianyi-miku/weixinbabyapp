<template>
  <nut-radio-group v-model="val1" direction="horizontal" class="buttons">
    <nut-radio label="1" shape="button">早餐</nut-radio>
    <nut-radio label="2" shape="button">点心</nut-radio>
    <nut-radio label="3" shape="button">午餐</nut-radio>
    <nut-radio label="4" shape="button">点心</nut-radio>
    <nut-radio label="5" shape="button">晚餐</nut-radio>
  </nut-radio-group>
  <div class="content">
    <div class="tags">
      <nut-tag type="success"> success </nut-tag>
    </div>
  </div>
  <div class="nuttagContent">
    <nut-tag round type="primary" class="nuttag"> 主食 </nut-tag>
    <nut-tag round type="primary" class="nuttag"> 鱼肉禽蛋 </nut-tag>
    <nut-tag round type="primary" class="nuttag"> 蔬菜 </nut-tag>
    <nut-tag round type="primary" class="nuttag"> 水果 </nut-tag>
    <nut-tag round type="primary" class="nuttag"> 坚果 </nut-tag>
    <nut-tag round type="primary" class="nuttag"> 豆类 </nut-tag>
  </div>
  <div>
    <nut-input v-model="val" placeholder="请输入食材" clearable>
      <template #right>
        <nut-button type="primary" size="small">添加</nut-button>
      </template>
    </nut-input>
  </div>
  <div class="title">
    食材清单
  </div>
  <div>
    <nut-tag round type="primary" class="nuttag"> 菜单1 </nut-tag>
    <nut-tag round type="primary" class="nuttag"> 菜单2 </nut-tag>
    <nut-tag round type="primary" class="nuttag"> 菜单3 </nut-tag>
  </div>
  <div class="buttons">
    <div>
      <nut-button type="primary">菜品清单</nut-button>
    </div>
    <div>
      <nut-button type="info" @click="Taro.navigateTo({
        url: '/subPackages/children/guominshicai/guominshicai'
      })">过敏食材</nut-button>
    </div>
  </div>
</template>
<script setup>
import Taro from '@tarojs/taro'
import { ref } from 'vue'
const val1 = ref('1')
const val = ref('')
</script>
<style>
.buttons {
  padding-top: 2rem;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.content {
  width: 100%;
  height: 150px;
  border-radius: 10px;
  background-color: #aaaaaa;
}

.tags {
  padding: 0.5rem;
}

.nuttagContent {
  display: flex;
  padding: 0.5rem;
}

.nuttag {
  padding: 0.2rem;
  margin: 0.5rem;
}

.title {
  margin: 0.5rem;
}

.buttons {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
}
</style>