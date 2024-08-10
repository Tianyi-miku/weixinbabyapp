<template>
    <div class="demo-list">
        <nut-list :list-data="data" :height="100">
            <template #default="{ index, item }">
                <div class="cotnent">
                    <div class="item">
                        <Date style="color: #8CC269;"></Date> {{ dayjs(item.day).format('YYYY-MM-DD') }}
                    </div>
                    <div class="item" v-if="isShowWz">
                        {{ item.brushTimes ? `刷牙 ${item.brushTimes} 次` : '' }}
                        {{ item.shape ? `排便 ${swichshape(item.shape)}` : '' }}
                        {{ item.duration ? `睡眠 ${item.duration.toFixed(2)} 小时` : '' }}
                        {{ item.weight ? `体重 ${item.weight} kg ${item.suggestion}` : '' }}
                    </div>
                    <div class="item">
                        宝宝 {{ item.age }}
                    </div>
                </div>
            </template>
        </nut-list>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { Date } from '@nutui/icons-vue-taro'
import Axios from '../../../util/axios';
import Taro from '@tarojs/taro'
import { useDidShow } from '@tarojs/taro'
import { isShowWz } from "../../../util/ip"
import dayjs from 'dayjs'

const data = ref([])

useDidShow(() => {
    getList()
})

function getList() {
    let babyId = Taro.getStorageSync('user')?.id
    Axios.get(`/statistic/latest/${babyId}`).then(res => {
        data.value = res
        console.log(res);
    })
}

function swichshape(value) {
    let shap
    switch (value) {
        case 1:
            shap = '正常'
            break;
        case 2:
            shap = '稀便'
            break;
        case 3:
            shap = '水样'
            break;
        case 4:
            shap = '粘稠'
            break;
        case 5:
            shap = '较干'
            break;
        case 6:
            shap = '干硬'
            break;
        default:
            break;
    }
    return shap
}

</script>

<style>
.demo-list {
    background: #F9F9F9;
}

.list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    border-radius: 10px;
}

.cotnent {
    background-color: #FFFFFF;
    margin: 1rem;
    padding: 1rem;
}

.item {
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
}
</style>