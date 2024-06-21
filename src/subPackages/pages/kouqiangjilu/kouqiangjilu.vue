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
      <nut-input disabled="true" placeholder="请输入记录时间" v-model="formData.birthday" type="text" @click="show = true" />
      <nut-popup v-model:visible="show" position="bottom">
        <nut-calendar-card v-model="riqi"></nut-calendar-card>
        <nut-button block type="primary" @click="riqichange">确认</nut-button>
      </nut-popup>
    </nut-form-item>
    <nut-form-item label="备注" prop="beizhu">
      <nut-input v-model="formData.beizhu" placeholder="请输入备注" type="text" />
    </nut-form-item>
    <nut-space style="margin: 10px">
      <nut-button block type="primary" size="small" @click="submit">保存</nut-button>
    </nut-space>
  </nut-form>
</template>
<script setup>
import Axios from '../../../util/axios';
import { ref } from 'vue'
const formData = ref({
  name: '涂氟',
  measureTime: dayjs().format('YYYY-MM-DD'),
  mark: '',
})
const riqi = ref(null)




const submit = () => {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {
      const baby = Taro.getStorageSync('user')
      const data = {
        babyId: baby.id,
        ...formData.value
      }
      Axios.post('/baby/update', data).then(res => {
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
const choose = (param) => {
  formData.riqi = param[3]
}


</script>