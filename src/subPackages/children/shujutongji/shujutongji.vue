<template>
    <div class="demo-list">
        <nut-list :list-data="data" :height="100">
            <template #default="{ index, item }">
                <div class="cotnent">
                    <div class="item">
                        <Date></Date> {{ item.day }}
                    </div>
                    <div class="item">
                        {{ item.brushTimes ? `刷牙 ${item.brushTimes} 次` : '' }}
                        {{ item.shape ? `排便 ${swichshape(item.shape)}` : '' }}
                        {{ item.duration ? `睡眠 ${item.duration} 小时` : '' }}
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

const data = ref([])

onMounted(() => {
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
.demo-list .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    border-radius: 10px;
}

.cotnent {
    background-color: #aaaaaa;
    margin-bottom: 10px;
    padding: 1rem;
}

.item {
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
}
</style>