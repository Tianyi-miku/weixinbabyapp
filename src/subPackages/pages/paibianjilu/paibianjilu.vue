<template>
  <nut-form ref="formRef" :model-value="formData" :rules="{
    measureTime: [
      { required: true, message: '请输入日期' },
    ],
  }">
    <nut-form-item label="记录时间" prop="measureTime" required>
      <nut-input disabled="true" placeholder="请输入记录时间" v-model="formData.measureTime" type="text"
        @click="show = true" />
      <nut-popup v-model:visible="show" position="bottom">
        <nut-calendar-card v-model="riqi"></nut-calendar-card>
        <nut-button block type="primary" @click="riqichange">确认</nut-button>
      </nut-popup>
    </nut-form-item>
    <nut-form-item label="便便颜色" prop="color" required>
      <nut-radio-group v-model="formData.color" direction="horizontal">
        <nut-radio label="1">
          黄色
          <template #icon>
            <span class="iconfont icon-bianbian1 myionc" style="color: #f4ea2a;" </span>
          </template>
          <template #checkedIcon>
            <span class="iconfont icon-bianbian1 myionc" style="color: #f4ea2a; border: 1px solid #002f49;" </span>
          </template>
        </nut-radio>
        <nut-radio label="2">
          绿色
          <template #icon>
            <span class="iconfont icon-bianbian1 myionc" style="color: green" </span>
          </template>
          <template #checkedIcon>
            <span class="iconfont icon-bianbian1 myionc" style="color: green; border: 1px solid #002f49;" </span>
          </template>
        </nut-radio>
        <nut-radio label="3">
          褐色
          <template #icon>
            <span class="iconfont icon-bianbian1 myionc" style="color: chocolate" </span>
          </template>
          <template #checkedIcon>
            <span class="iconfont icon-bianbian1 myionc" style="color: chocolate; border: 1px solid #002f49;" </span>
          </template>
        </nut-radio>
        <nut-radio label="4">
          灰色
          <template #icon>
            <span class="iconfont icon-bianbian1 myionc" style="color: gray" </span>
          </template>
          <template #checkedIcon>
            <span class="iconfont icon-bianbian1 myionc" style="color: gray; border: 1px solid #002f49;" </span>
          </template>
        </nut-radio>
        <nut-radio label="5">
          黑色
          <template #icon>
            <span class="iconfont icon-bianbian1 myionc" style="color: black" </span>
          </template>
          <template #checkedIcon>
            <span class="iconfont icon-bianbian1 myionc" style="color: black; border: 1px solid #002f49;" </span>
          </template>
        </nut-radio>
        <nut-radio label="6">
          红色
          <template #icon>
            <span class="iconfont icon-bianbian1 myionc" style="color: red" </span>
          </template>
          <template #checkedIcon>
            <span class="iconfont icon-bianbian1 myionc" style="color: red; border: 1px solid #002f49;" </span>
          </template>
        </nut-radio>
      </nut-radio-group>
    </nut-form-item>
    <nut-form-item label="便便形态" prop="shape" required>
      <nut-radio-group v-model="formData.shape" direction="horizontal">
        <nut-radio label="1" shape="button">正常</nut-radio>
        <nut-radio label="2" shape="button">稀便</nut-radio>
        <nut-radio label="3" shape="button">水样</nut-radio>
        <nut-radio label="4" shape="button">粘稠</nut-radio>
        <nut-radio label="5" shape="button">较干</nut-radio>
        <nut-radio label="6" shape="button">干硬</nut-radio>
      </nut-radio-group>
    </nut-form-item>
    <nut-form-item>
      <nut-button type="primary" block @click="handleSubmit">保存</nut-button>
    </nut-form-item>
  </nut-form>
</template>
<script setup>
import { reactive } from 'vue';
import { ref } from 'vue'
import dayjs from 'dayjs'
import { Jimi40 } from '@nutui/icons-vue-taro'
import Axios from '../../../util/axios';
import Taro from '@tarojs/taro'

const formData = ref({
  color: '1',
  measureTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  shape: '1',
})
const riqi = ref(null)
const show = ref(false)
const riqichange = (param) => {
  formData.value.measureTime = dayjs(riqi.value).format('YYYY-MM-DD HH:mm:ss')
  show.value = false
}

const formRef = ref(null)
const handleSubmit = () => {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {
      const baby = Taro.getStorageSync('user')
      const data = {
        babyId: baby.id,
        color: parseInt(formData.value.color),
        shape: parseInt(formData.value.shape),
        measureTime: formData.value.measureTime
      }
      Axios.post('/poop/add', data).then(res => {
        Taro.showToast({
          title: '新增成功',
          icon: 'success',
          duration: 1000
        })
        setTimeout(() => {
          Taro.navigateBack({
            delta: 1
          })
        }, 1000);
      })
    } else {
      console.warn('error:', errors)
    }
  })
}

</script>
<style>
.myionc {
  font-size: small;
  display: flex;
  flex-wrap: wrap;
  width: 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid;
  border-width: 1px;
}
</style>