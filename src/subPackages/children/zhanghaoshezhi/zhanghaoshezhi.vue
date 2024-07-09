<template>
    <nut-cell size="large" title="喂养ID" :desc="id"></nut-cell>
    <nut-cell size="large" title="手机号码" desc="未绑定"></nut-cell>
    <nut-cell size="large" title="手机号码" desc="未绑定"></nut-cell>
    <nut-cell size="large" title="成长参考" desc=""></nut-cell>
    <nut-button block type="primary" @click="tuichu">退出登录</nut-button>
</template>
<script setup>
import Taro from "@tarojs/taro";
import { ref, onMounted } from 'vue'

let id = ref('')
onMounted(() => {
    id.value = Taro.getStorageSync('user')?.id
})


function tuichu() {
    Taro.clearStorageSync()
    Taro.redirectTo(
        {
            url: '/pages/index/index'
        })
}

</script>