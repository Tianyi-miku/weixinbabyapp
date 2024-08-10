<template>
  <nut-form ref="formRef" :model-value="formData" :rules="{
    name: [
      { required: true, message: '请填写名称' },
    ],
    measureTime: [
      { required: true, message: '请填写记录时间' },
    ],
  }">
    <nut-form-item label="名称" prop="name">
      <nut-input v-model="formData.name" placeholder="请输入名称" type="text" />
    </nut-form-item>
    <nut-form-item label="记录时间" prop="measureTime" required>
      <nut-input disabled="true" placeholder="请输入记录时间" v-model="formData.measureTime" type="text"
        @click="show = true" />
      <nut-popup v-model:visible="show" position="bottom">
        <nut-date-picker v-model="riqi" type="datetime" :three-dimensional="false"
        @cancel="show = false"></nut-date-picker>
        <nut-button block type="primary" @click="riqichange">确认</nut-button>
      </nut-popup>
    </nut-form-item>
    <nut-form-item label="备注" prop="comment">
      <nut-input v-model="formData.comment" placeholder="请输入备注" type="text" />
    </nut-form-item>
    <nut-form-item>
      <nut-button type="primary" block @click="submit">保存</nut-button>
    </nut-form-item>
  </nut-form>
</template>
<script setup>
import Axios from '../../../util/axios';
import { ref } from 'vue'
import dayjs from 'dayjs';
import Taro from '@tarojs/taro'

const formRef = ref(null)
const formData = ref({
  name: '涂氟',
  measureTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  comment: '',
})
let data = dayjs(new Date())
const riqi = ref(new Date(data.year(), data.month(), data.date(), data.hour(), data.minute()))

const submit = () => {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {
      const baby = Taro.getStorageSync('user')
      const data = {
        babyId: baby.id,
        ...formData.value
      }
      Axios.post('/teeth/record/add', data).then(res => {
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

const show = ref(false)
const riqichange = (param) => {
  
  formData.value.measureTime = dayjs(riqi.value).format('YYYY-MM-DD HH:mm:ss')
  show.value = false
}


</script>

<style>

.nut-picker__right {
  display: none;
}
</style>