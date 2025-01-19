<template>
  <nut-form>
    <nut-form-item label="睡眠时段">
      <nut-input v-model="formData.text" placeholder="请选择睡眠时段" type="text" disabled @click="show2 = true" />
    </nut-form-item>

    <nut-form-item label="开始时间">
      <nut-input v-model="formData.start" placeholder="请输入开始时间" type="text" disabled @click="show = true" />
    </nut-form-item>

    <nut-form-item label="结束时间">
      <nut-input v-model="formData.end" placeholder="请输入结束时间" type="text" disabled @click="show1 = true" />
    </nut-form-item>
  </nut-form>

  <nut-button size="large" type="primary" @click="submit">新增睡眠</nut-button>

  <nut-popup v-model:visible="show" position="bottom">
    <nut-date-picker v-model="val" type="datetime" :three-dimensional="false" @confirm="confirm"
      @cancel="show = false"></nut-date-picker>
  </nut-popup>

  <nut-popup v-model:visible="show1" position="bottom">
    <nut-date-picker v-model="val1" type="datetime" :three-dimensional="false" @confirm="confirm1"
      @cancel="show1 = false"></nut-date-picker>
  </nut-popup>

  <nut-popup v-model:visible="show2" position="bottom">
    <nut-picker :columns="columns" title="夜间睡眠" @confirm="confirm2" />
  </nut-popup>

</template>

<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import dayjs from 'dayjs';
import Axios from '../../../util/axios';


const columns = ref([
  { text: '午觉', value: 'noon' },
  { text: '夜间睡眠', value: 'night' },
])
const confirm2 = ({ selectedValue, selectedOptions }) => {
  // console.log(selectedValue[0], selectedOptions[0])
  formData.value.type = selectedValue[0]
  formData.value.text = selectedOptions[0].text
  show2.value = false
}

const show = ref(false)
const show1 = ref(false)
const show2 = ref(false)
let data = dayjs(new Date())
const formData = ref({ text: '', type: '', start: '', end: '' })
const val = ref(new Date(data.year(), data.month(), data.date(), data.hour(), data.minute()))
const val1 = ref(new Date(data.year(), data.month(), data.date(), data.hour(), data.minute()))



function submit() {
  if (formData.value.start && formData.value.end && formData.value.type) {
    if (dayjs(formData.value.end).isAfter(dayjs(formData.value.start))) {
      const diffInMilliseconds = dayjs(formData.value.end).diff(dayjs(formData.value.start));
      // 将毫秒差转换为小时  
      const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
      // 输出结果  
      console.log(`时间差为：${diffInHours.toFixed(2)} 小时`);

      let babyId = Taro.getStorageSync('user')?.id
      let data = {
        babyId: babyId,
        duration: diffInHours.toFixed(2),
        type: formData.value.type,
        startTime: dayjs(formData.value.start).format('YYYY-MM-DD HH:mm:ss'),
        stopTime: dayjs(formData.value.end).format('YYYY-MM-DD HH:mm:ss')
      }
      Axios.post(`/sleep/add`, data).then(res => {
        Taro.showToast({
          title: '保存成功',
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
      Taro.showToast({
        title: '请输入正确时间',
        icon: 'error',
        duration: 1000
      })
    }
  } else {
    Taro.showToast({
      title: '请输入时间',
      icon: 'error',
      duration: 1000
    })
  }
}


function confirm(value) {
  let arr = value.selectedOptions.map(item => item.value)
  let time = `${arr[0]}-${arr[1]}-${arr[2]} ${arr[3]}:${arr[4]}:00`
  formData.value.start = time
  show.value = false
}


function confirm1(value) {
  let arr = value.selectedOptions.map(item => item.value)
  let time = `${arr[0]}-${arr[1]}-${arr[2]} ${arr[3]}:${arr[4]}:00`
  formData.value.end = time
  show1.value = false
}

</script>