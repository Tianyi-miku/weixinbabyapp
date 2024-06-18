<template>
    <div class="touxiang">
        <nut-avatar>
            <span class="iconfont icon-yonghu"></span>
        </nut-avatar>
    </div>
    <nut-form ref="formRef" :model-value="formData" :rules="{
        name: [
            { required: true, message: '请填写宝宝名称' },
        ],
        riqi: [
            { required: true, message: '请填写日期' },
        ],
        sex: [
            { required: true, message: '请选择性别' },
        ],
    }">
        <nut-form-item label="宝宝小名" prop="name" required>
            <nut-input v-model="formData.name" placeholder="请输入宝宝小名" type="text" />
        </nut-form-item>
        <nut-form-item label="宝宝生日" prop="riqi" required>
            <nut-input disabled="true" placeholder="请输入宝宝生日" type="text" @click="show = true" />
            <nut-popup v-model:visible="show" position="bottom">
                <nut-calendar-card v-model="formData.riqi" @change="onChange"></nut-calendar-card>
                <nut-button block type="primary" @click="show = false">确认</nut-button>
            </nut-popup>
        </nut-form-item>
        <nut-form-item label="性别" prop="sex" required>
            <nut-radio-group v-model="formData.sex" direction="horizontal">
                <nut-radio label="1">男</nut-radio>
                <nut-radio label="2">女</nut-radio>
            </nut-radio-group>
        </nut-form-item>

        <div style="width: 96%; margin-left: 2%; margin-right: 2%;">
            <nut-button block type="primary" @click="submit">确定添加</nut-button>
        </div>
    </nut-form>
</template>
<script setup>
import { ref } from 'vue';
import dayjs from 'dayjs'

const formData = ref({
    name: '',
    riqi: null,
    sex: '1'
})

const show = ref(false)
const formRef = ref(null)
const onChange = (val) => {
    console.log(val)
}

const submit = () => {
    formRef.value?.validate().then(({ valid, errors }) => {
        if (valid) {

        } else {
            console.warn('error:', errors)
        }
    })
}
</script>
<style>
.iconfont {
    font-size: large;
}

.touxiang {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem;
}
</style>