<template>
    <nut-form ref="formRef" :model-value="formData" :rules="{
        shengao: [
            { required: true, message: '请输入身高' },
        ],
        tizhong: [
            { required: true, message: '请输入体重' },
        ],
        touwei: [
            { required: true, message: '请输入头围' },
        ],
        riqi: [
            { required: true, message: '请输入日期' },
        ],
    }">
        <nut-form-item label="身高" prop="shengao" required>
            <nut-input v-model="formData.shengao" placeholder="请输入身高" type="text" />
        </nut-form-item>
        <nut-form-item label="体重" prop="tizhong" required>
            <nut-input v-model="formData.tizhong" placeholder="请输入体重" type="text" />
        </nut-form-item>
        <nut-form-item label="头围" prop="touwei" required>
            <nut-input v-model="formData.touwei" placeholder="请输入头围" type="text" />
        </nut-form-item>
        <nut-form-item label="日期" prop="riqi" required>
            <nut-input v-model="formData.riqi" disabled="true" placeholder="请输入头围" type="text" @click="show = true" />
            <nut-calendar v-model:visible="show" :default-value="formData.riqi" @close="show = false" @choose="choose">
            </nut-calendar>
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

const formData = reactive({
    shengao: '',
    tizhong: '',
    touwei: '',
    riqi: dayjs().format('YYYY-MM-DD'),
})

const show = ref(false)
const choose = (param) => {
    formData.riqi = param[3]
}

const formRef = ref(null)
const handleSubmit = () => {
    formRef.value?.validate().then(({ valid, errors }) => {
        if (valid) {

        } else {
            console.warn('error:', errors)
        }
    })
}

</script>