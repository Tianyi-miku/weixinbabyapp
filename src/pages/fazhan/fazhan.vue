<template>
    <nut-grid :border="false" column-num="8">
        <nut-grid-item>
            <nut-avatar @click="gogeren">
                <span class="iconfont icon-yonghu"></span>
            </nut-avatar>
        </nut-grid-item>
        <nut-grid-item>
            <div>姓名</div>
            <div>年龄</div>
        </nut-grid-item>
    </nut-grid>
    <div class="zhibiao">身体指标</div>
    <div class="Tcard">
        <div class="sg">
            <div>身高</div>
        </div>
        <div class="bz">
            <div class="biaozhun">标准</div>
        </div>
        <div class="tz">
            <div> 体重</div>
        </div>
    </div>
    <div class="zhibiao">健康管理</div>
    <nut-grid :border="false" column-num="2">
        <nut-grid-item>
            <div class="guanli">体重管理</div>
        </nut-grid-item>
        <nut-grid-item>
            <div class="guanli">睡眠管理</div>
        </nut-grid-item>
        <nut-grid-item>
            <div class="guanli">口腔管理</div>
        </nut-grid-item>
        <nut-grid-item>
            <div class="guanli">排便管理</div>
        </nut-grid-item>
    </nut-grid>
</template>
<script setup>
import Taro from '@tarojs/taro'

function gogeren() {
    Taro.navigateTo({
        url: '/pages/fazhan/children/geren/geren'
    })
}
</script>
<style>
.guanli {
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    border-radius: 15px;
    width: 100%;
}

.iconfont {
    font-size: large;
}

.Tcard {
    width: 23.5rem;
    background-color: aliceblue;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem
}

.sg {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bz {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
}

.tz {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.biaozhun {
    background-color: white;
    border-radius: 50%;
    height: 6rem;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px;
}

.zhibiao {
    padding: 1rem;
}
</style>