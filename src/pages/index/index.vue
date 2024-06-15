<template>
  <div>
    <div class="logo">
      <view class='flex1'>
        <image src='../../assets/logo.png' alt=""></image>
      </view>
    </div>
    <nut-radio-group v-model="val" direction="horizontal" style="width: max-content">
      <nut-radio label="1">密码登录
        <template #icon>
          <Checklist />
        </template>
        <template #checkedIcon>
          <Checklist color="red" />
        </template>
      </nut-radio>
      <nut-radio label="2">
        验证码登录
        <template #icon>
          <Checklist />
        </template>
        <template #checkedIcon>
          <Checklist color="red" />
        </template>
      </nut-radio>
    </nut-radio-group>
    <nut-form ref="formRef" :model-value="formData" :rules="{
      user: [
        { required: true, message: '请填写账号' },
      ],
      password: [
        { required: true, message: '请填写密码' },
      ],
    }">
      <nut-form-item label="账号" prop="user" required>
        <nut-input v-model="formData.user" placeholder="请输入账号" type="text" />
      </nut-form-item>
      <nut-form-item v-if="val === '1'" label="密码" prop="password" required>
        <nut-input v-model="formData.password" placeholder="请输入密码" type="text" />
      </nut-form-item>
      <nut-form-item v-if="val === '2'" label="验证码" prop="yanzhenma" required>
        <nut-input v-model="formData.yanzhenma" placeholder="请输入验证码" type="text">
          <template #right>
            <nut-button type="primary" size="small">发送</nut-button>
          </template>
        </nut-input>
      </nut-form-item>

      <div style="width: 96%; margin-left: 2%; margin-right: 2%;">
        <nut-button block type="primary" @click="submit">提交</nut-button>
      </div>
    </nut-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';
import Axios from '../../util/axios';
import { Checklist } from '@nutui/icons-vue-taro'
import Taro from '@tarojs/taro'

const formData = ref({
  user: '',
  password: '',
  yanzhenma: ''
})
const formRef = ref(null)
const val = ref('1')
// const isLogin = reactive(false)

const submit = () => {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {
      console.log('success:', formData.value)
      Taro.switchTab({
        url: '/pages/fazhan/fazhan'
      })
    } else {
      console.warn('error:', errors)
    }
  })
}

</script>

<style>
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>