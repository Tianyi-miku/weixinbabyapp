<template>
  <div class="logo">
    <view class='flex1'>
      <image style="width: 6rem; height: 6rem; padding-top: 4rem; padding-bottom: 1rem;" src='../../assets/logo.png'
        alt=""></image>
    </view>
    <div style="color: #7B7B7B;">您的科学喂养指南</div>
  </div>
  <div class="buttons">
    <nut-button class="itembutton" block type="primary"
      @click="Taro.navigateTo({ url: `/subPackages1/login/index?type=1` })">短信验证码登录</nut-button>
  </div>
  <div class="buttons">
    <nut-button class="itembutton" block type="primary"
      @click="Taro.navigateTo({ url: `/subPackages1/login/index?type=2` })">账户密码登录</nut-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Axios from '../../util/axios';
import Taro from '@tarojs/taro'

const formRef = ref(null)
const val = ref('1')


</script>

<style>
.buttons {
  width: 90%;
  margin: auto;
}

.itembutton {
  margin-top: 15px;
}

.logo {
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>