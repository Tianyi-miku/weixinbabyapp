<template>
  <div>
    <div class="logo">
      <view class='flex1'>
        <image style="width: 6rem; height: 6rem; padding: 4rem;" src='../../assets/logo.png' alt=""></image>
      </view>
    </div>
    <nut-radio-group v-model="val" direction="horizontal" style="width: max-content">
      <nut-radio label="1" shape="button" style="border: none;">
        验证码登录
      </nut-radio>
      <nut-radio label="2" shape="button" style="border: none;">密码登录
      </nut-radio>

    </nut-radio-group>
    <nut-form ref="formRef" :model-value="formData" :rules="{
      password: [
        { required: true, message: '请填写密码' },
      ],
      id: [{ required: true, message: '请填写账户' },]
    }">
      <nut-form-item label="电话" v-if="val === '1'" prop="number" required :rules="[
      { required: true, message: '请填写联系电话' },
      { validator: asyncValidator, message: '电话格式不正确' }
    ]">
        <nut-input v-model="formData.number" placeholder="请输入联系电话" type="text" />
      </nut-form-item>
      <nut-form-item v-if="val === '1'" label="验证码" prop="code" required>
        <nut-input v-model="formData.code" placeholder="请输入验证码" type="text">
          <template #right>
            <nut-button type="primary" size="small" :disabled=sendDisable @click="sendFormat">发送 {{ sendDisable ?
      (sendTime) : '' }}</nut-button>
          </template>
        </nut-input>
      </nut-form-item>
      <nut-form-item label="账号" v-if="val === '2'" prop="id" required>
        <nut-input v-model="formData.id" placeholder="请输入账号" type="text" />
      </nut-form-item>

      <nut-form-item v-if="val === '2'" label="密码" prop="password" required>
        <nut-input v-model="formData.password" placeholder="请输入密码" type="text" />
      </nut-form-item>
      <div style="width: 96%; margin-left: 2%; margin-right: 2%;">
        <nut-button block type="primary" @click="submit">登录</nut-button>
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
import { getCurrentInstance } from '@tarojs/taro'

const formData = ref({
  number: '',
  code: '',
  id: 10001,
  password: '18121827048',
})
const formRef = ref(null)
const type = getCurrentInstance().router.params.type
const val = ref(type)
const sendDisable = ref(false)
const sendTime = ref(60)

function sendFormat() {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {
      sendDisable.value = true
      Axios.post(`/sendMsg/${formData.value.number}`).then(res => {
      }).catch(() => { })
      if (!sendTime.value) {
        sendTime.value = 60
      }
      let sc = setInterval(() => {
        if (sendTime.value > 0) {
          sendTime.value--
          if (sendTime.value <= 0) {
            clearInterval(sc)
            sendDisable.value = false
          }
        }
      }, 1000);
    }
  })
}

const submit = () => {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {
      if (val.value === '1') {
        Axios.post('/login/code', formData.value).then(res => {
          Taro.setStorageSync('user', res)
          Taro.setStorageSync('token', res.token)
          if (res.name) {
            Taro.switchTab({
              url: '/pages/fazhan/fazhan'
            })
          } else {
            Taro.redirectTo({
              url: '/subPackages/children/xinzengbaobao/xinzengbaobao'
            })
          }
        })
      } else {
        let data = {
          ...formData.value
        }
        data.id = Number(data.id)
        Axios.post(`/login/id`, data).then(res => {
          Taro.setStorageSync('user', res)
          Taro.setStorageSync('token', res.token)
          if (res.name) {
            Taro.switchTab({
              url: '/pages/fazhan/fazhan'
            })
          } else {
            Taro.redirectTo({
              url: '/subPackages/children/xinzengbaobao/xinzengbaobao'
            })
          }
        })
      }
    } else {
      console.warn('error:', errors)
    }
  })
}
const asyncValidator = (val) => {
  const telReg = /^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/
  return new Promise((resolve, reject) => {
    if (!val) {
      reject('请输入联系电话')
    } else if (!telReg.test(val)) {
      reject('联系电话格式不正确')
    } else {
      resolve('')
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