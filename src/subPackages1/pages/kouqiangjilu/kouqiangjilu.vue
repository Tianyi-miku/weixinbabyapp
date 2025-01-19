<template>
  <nut-form ref="formRef" :model-value="formData" class="form" :rules="{
    name: [
      { required: true, message: '请填写名称' },
    ],
    measureTime: [
      { required: true, message: '请填写记录时间' },
    ],
  }">
    <!-- <nut-form-item label="名称" prop="name">
      <nut-input v-model="formData.name" placeholder="请输入名称" type="text" />
    </nut-form-item> -->
    <!-- <nut-form-item> -->

    <nut-cell title="请选择口腔记录" :desc="String(formData.name)" @click="showPop = true"></nut-cell>
    <!-- </nut-form-item> -->

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
  <nut-popup v-model:visible="showPop" position="bottom">
    <nut-picker v-model="val" :columns="columns" title="请选择口腔记录" @confirm="confirm" @cancel="showPop = false" />
  </nut-popup>
</template>
<script setup>
import Axios from '../../../util/axios';
import { ref } from 'vue'
import dayjs from 'dayjs';
import Taro from '@tarojs/taro'

const formRef = ref(null)
const val = ref(['涂氟'])
const formData = ref({
  name: '涂氟',
  measureTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  comment: '',
})
let data = dayjs(new Date())
const riqi = ref(new Date(data.year(), data.month(), data.date(), data.hour(), data.minute()))
const showPop = ref(false)

const columns = ref([
  { text: '涂氟', value: '涂氟' },
  { text: '窝沟封闭', value: '窝沟封闭' },
  { text: '其他', value: '其他' },
])

function confirm({ selectedValue, selectedOptions }) {
  showPop.value = false
  formData.value.name = selectedValue[0]
}
const submit = () => {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {
      const baby = Taro.getStorageSync('user')
      const data = {
        babyId: baby.id,
        ...formData.value,
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
.form .nut-picker__right {
  display: none;
}
</style>