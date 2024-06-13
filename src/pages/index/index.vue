<template>
  <view class="demo">
    <view>
      欢迎使用 NutUI 开发 Taro 多端项目
      <Dongdong />
    </view>
    <view>{{ count }}</view>
    <view>
      <nut-button type="primary" @click="handleClick">
        Count++
      </nut-button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';
import Axios from '../../util/axios';

const count = ref(0);

const handleClick = () => {
  count.value++;
  const apiUrl = '/error';
  console.log('====================================');
  console.log(12312312);
  console.log('====================================');
  Axios.get(apiUrl)
    .then(response => {
      // 在这里处理你的数据  
    })
    .catch(error => {
      // 在这里处理错误  
    });
};
</script>

<style>
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>