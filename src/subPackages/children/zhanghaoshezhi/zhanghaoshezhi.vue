<template>
    <nut-cell size="large" title="喂养ID" desc="12351321@qq.com"></nut-cell>
    <nut-cell size="large" title="手机号码" desc="未绑定"></nut-cell>
    <nut-cell size="large" title="手机号码" desc="未绑定"></nut-cell>
    <nut-cell size="large" title="成长参考" desc=""></nut-cell>
    <nut-button block type="primary" @click="tuichu">退出登录</nut-button>
</template>
<script setup>
import Taro from "@tarojs/taro";


function tuichu() {
    Taro.clearStorageSync()
    Taro.redirectTo(
        {
            url: '/pages/pages/index/index'
        })
}

</script>