<template>
    <nut-form v-if="isShowWz" ref="formRef" :model-value="formData" :rules="{
        height: [
            { required: true, message: '请输入身高' },
        ],
        weight: [
            { required: true, message: '请输入体重' },
        ],
        head: [
            { required: true, message: '请输入头围' },
        ],
        riqi: [
            { required: true, message: '请输入日期' },
        ],
    }">
        <nut-form-item label="身高(cm)" prop="height" required type="number">
            <nut-input v-model="formData.height" placeholder="请输入身高" type="text" />
        </nut-form-item>
        <nut-form-item label="体重(kg)" prop="weight" required type="number">
            <nut-input v-model="formData.weight" placeholder="请输入体重" type="text" />
        </nut-form-item>
        <nut-form-item label="头围" prop="head" required type="number">
            <nut-input v-model="formData.head" placeholder="请输入头围" type="text" />
        </nut-form-item>
        <nut-form-item label="日期" prop="measureTime" required>
            <nut-input disabled="true" placeholder="请输入日期" v-model="formData.measureTime" type="text"
                @click="show = true" />
            <nut-popup v-model:visible="show" position="bottom">
                <nut-calendar-card v-model="riqi"></nut-calendar-card>
                <nut-button block type="primary" @click="riqichange">确认</nut-button>
            </nut-popup>
        </nut-form-item>

        <nut-form-item>
            <nut-button type="primary" block @click="handleSubmit">保存</nut-button>
        </nut-form-item>
    </nut-form>
    <div v-else>
        <nut-table :columns="columns" :data="data">
        </nut-table>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import { ref } from 'vue'
import dayjs from 'dayjs'
import Axios from '../../../util/axios';
import Taro from '@tarojs/taro'
import { useDidShow } from '@tarojs/taro'
import { isShowWz } from "../../../util/ip"

const columns = ref([
  {
    title: '人员',
    key: 'name'
  },
  {
    title: '性别',
    key: 'sex'
  },
  {
    title: '备注',
    key: 'record'
  }
])
const data = ref([
  {
    name: '小美',
    sex: '女',
    record: '无'
  },
  {
    name: '小爱',
    sex: '女',
    record: '无'
  },
])

const formData = ref({
    babyId: null,
    height: '',
    weight: '',
    head: '',
    measureTime: dayjs().format('YYYY-MM-DD'),
})
const riqi = ref(null)
const show = ref(false)
function riqichange() {
    formData.value.measureTime = dayjs(riqi.value).format('YYYY-MM-DD')
    show.value = false
}

const formRef = ref(null)
let id = Taro.getStorageSync('user').id

useDidShow(() => {
    if (id) {
        Axios.get(`/basic/${id}`).then(res => {
            res.measureTime = dayjs(res.measureTime).format('YYYY-MM-DD')
            formData.value = res
        })
    }
})

const handleSubmit = () => {
    formRef.value?.validate().then(({ valid, errors }) => {
        if (valid) {
            let babyId = Taro.getStorageSync('user')?.id
            const data = {
                babyId: babyId,
                height: parseFloat(formData.value.height),
                weight: parseFloat(formData.value.weight),
                head: parseFloat(formData.value.head),
                // measureTime: formData.value.measureTime
                measureTime: dayjs(formData.value.measureTime).format('YYYY-MM-DD HH:mm:ss')
            }
            Axios.post('/basic/add', data).then(res => {
                Taro.showToast({
                    title: '保存成功',
                    icon: 'success',
                    duration: 1000
                })
                setTimeout(() => {
                    Taro.switchTab({
                        url: '/pages/fazhan/fazhan'
                    })
                }, 1000);
            })
        } else {
            console.warn('error:', errors)
        }
    })
}

</script>