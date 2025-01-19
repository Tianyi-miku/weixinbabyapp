<template>
    <nut-form v-if="isShowWz" ref="formRef" :model-value="formData" :rules="{
        height: [
            { required: true, message: '请输入身高' },
        ],
        weight: [
            { required: true, message: '请输入体重' },
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
        <nut-form-item label="头围(非必填)" prop="head" type="number">
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
    <div v-if="isShowWz" class="wenbenhezi" @click=" Taro.navigateTo({ url: '/subPackages/clff/clff' })">
        <div class="wenbenbiaoti">如何给宝宝测量身高体重和头围？</div>
        <div class="wenbenneirong">身高、体重、头围等数据，是宝宝生长发育是否良好的重要评价指标。除了定期带宝宝去体检，家长们自己在家也可以给宝宝测量这些指标，下面我们就来说说具体的测量方法。</div>
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
import { documentUrl } from '../../../util/ip'

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

<style>
.wenbenhezi {
    /* 添加必要的CSS样式 */
    font-family: Arial, sans-serif;
    box-shadow: 0px 2px 8px rgb(201, 198, 198);
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    /* background-color: #8CC269; */
    border-radius: 15px;
}

.wenbenhezi .wenbenbiaoti {
    font-weight: bold;
    font-size: 14pt;
    width: 98%;
    height: 28pt;
    margin-top: 20px;
}

.wenbenhezi .wenbenneirong {
    list-style-type: disc;
    font-size: 12pt;
    width: 98%;
    margin-bottom: 40px;
}
</style>