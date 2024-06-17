<template>
    <nut-form ref="formRef" :model-value="formData" :rules="{
        user: [
            { required: true, message: '请填写账号' },
        ],
        password: [
            { required: true, message: '请填写密码' },
        ],
    }">
        <nut-form-item label="身高">
            <nut-input v-model="formData.name" placeholder="请输入身高" type="text" />
        </nut-form-item>
        <nut-form-item label="体重">
            <nut-input v-model="formData.age" placeholder="请输入体重" type="text" />
        </nut-form-item>
        <nut-form-item label="头围">
            <nut-input v-model="formData.tel" placeholder="请输入头围" type="text" />
        </nut-form-item>
        <nut-form-item label="选择日期">
            <nut-cell title="" @click="show = true" />
            <nut-calendar v-model:visible="show" :default-value="formData.riqi" @close="show = false" @choose="choose">
            </nut-calendar>
        </nut-form-item>
        <nut-form-item>
            <nut-button type="primary" block @click="handleSubmit">提交</nut-button>
        </nut-form-item>
    </nut-form>
</template>
<script setup>
import { ref } from 'vue'

const formData = ref({
    name: '',
    age: '',
    tel: '',
    riqi: '2022-02-01',
})

const date = ref('2022-02-01')
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