<template>
    <nut-cell size="large" title="喂养ID" :desc="list?.id"></nut-cell>
    <nut-cell size="large" title="喂养号码" :desc="list?.number"></nut-cell>
    <!-- <nut-cell size="large" title="微信号码" :desc="list?.weixinCode"></nut-cell> -->
    <nut-cell size="large" title="成长参考" desc=""></nut-cell>
    <nut-button block type="primary" style="width: 95%;margin: auto" @click="tuichu">退出登录</nut-button>
</template>
<script setup>
import Taro from "@tarojs/taro";
import { ref, onMounted } from 'vue'
import Axios from '../../../util/axios';
import { useDidShow } from '@tarojs/taro'

let list = ref(null)
useDidShow(() => {
    Axios.get('/user/info').then(res => {
        list.value = res
    })
})


function tuichu() {
    Taro.clearStorageSync()
    Taro.redirectTo(
        {
            url: '/pages/index/index'
        })
}

</script>