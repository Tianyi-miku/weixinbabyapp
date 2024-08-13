<template>
    <div>
        <nut-input v-model="val" placeholder="请输入食材" clearable>
            <template #right>
                <nut-button type="primary" size="small" @click="addtoList">添加</nut-button>
            </template>
        </nut-input>
    </div>
    <div class="title">
        食材清单
    </div>
    <div>
        <nut-tag v-for="(item, index) in list" :key="index" round class="nuttag"> {{ item.name }}
        </nut-tag>
    </div>
    <div class="buttons" style="position: absolute;
    bottom: 10rem;
    padding-left: 2rem;">
        <div>
            <nut-button type="primary" @click="Taro.redirectTo({
            url: '/subPackages/children/caidan/caidan'
        })">菜品清单</nut-button>
        </div>
        <div>
            <nut-button plain>过敏食材</nut-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import { useDidShow } from '@tarojs/taro'
import Axios from '../../../util/axios';

const val = ref('')
const list = ref('')

useDidShow(() => {
    getList()
})

function getList() {
    let babyId = Taro.getStorageSync('user')?.id
    Axios.get(`/allergic/${babyId}`).then(res => {
        list.value = res
    })
}

function addtoList() {
    if (val.value) {
        let babyId = Taro.getStorageSync('user')?.id
        let data = {
            babyId: babyId,
            name: val.value
        }
        Axios.post(`/allergic/add`, data).then(res => {
            val.value = ''
            getList()
            Taro.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 1000
            })
        })
    } else {
        Taro.showToast({
            title: '请输入食材',
            icon: 'error',
            duration: 1000
        })
    }

}

</script>

<style>
.nuttag {
    padding: 0.2rem;
    margin: 0.5rem;
    background: #7fadd6;
}

.title {
    margin: 0.5rem;
}

.buttons {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
}
</style>