<template>
    <nut-grid :border="false" column-num="5">
        <nut-grid-item>
            <nut-avatar>
                <span class="iconfont icon-yonghu"></span>
            </nut-avatar>
        </nut-grid-item>
        <nut-grid-item>
            <div>姓名</div>
            <div>年龄</div>
        </nut-grid-item>
        <nut-grid-item>
        </nut-grid-item>
        <nut-grid-item>
        </nut-grid-item>
        <nut-grid-item>
            <div class="grids">
                <span class="iconfont icon-xinzeng myionc" @click="Taro.navigateTo({
                    url: '/subPackages/children/xinzengbaobao/xinzengbaobao'
                })"></span>
                <span class="iconfont icon-24gl-swapHorizontal3 myionc" @click="show = true"></span>
            </div>
        </nut-grid-item>
    </nut-grid>
    <div class="cotnet">
        <nut-button size="large" type="primary">
            <div class="smrc">
                家庭共享
            </div>
            <div class="smrc">
                共同记录宝宝的日常
            </div>
        </nut-button>

        <nut-cell title="账号设置" is-link class="topa" @click="Taro.navigateTo({
            url: '/subPackages/children/zhanghaoshezhi/zhanghaoshezhi'
        })">
            <template #icon>
                <My />
            </template>
        </nut-cell>
        <nut-cell title="数据统计" is-link @click="Taro.navigateTo({
            url: '/subPackages/children/shujutongji/shujutongji'
        })"></nut-cell>
        <nut-cell title="联系我们" is-link @click="Taro.navigateTo({
            url: '/subPackages/children/lianxiwomen/lianxiwomen'
        })"></nut-cell>
        <nut-cell title="隐私政策" is-link @click="Taro.navigateTo({
            url: '/subPackages/children/yinsizhengce/yinsizhengce'
        })"></nut-cell>
    </div>
    <nut-popup position="bottom" v-model:visible="show">
        <div class="guanli">宝宝管理</div>
        <div class="group">
            <nut-radio-group v-model="val">
                <nut-radio label="1">宝宝 1</nut-radio>
                <nut-radio label="2">宝宝 2</nut-radio>
                <nut-radio label="3">宝宝 3</nut-radio>
            </nut-radio-group>
        </div>
    </nut-popup>
</template>
<script setup>
import { My } from '@nutui/icons-vue-taro'
import Taro from '@tarojs/taro';
import { ref } from 'vue'
const show = ref(false)
const val = ref('1')
</script>
<style>
.cotnet {
    margin: 0 2rem;
}

.topa {
    margin-top: 1rem;
}

.iconfont {
    font-size: large;
}

.grids {
    width: 2rem;
    display: flex !important;
    flex-wrap: wrap;
}

.myionc {
    font-size: small;
    display: flex;
    flex-wrap: wrap;
    width: 1rem;
}

.smrc {
    padding: 0;
    font-size: small;
    height: 50%;
    line-height: 1.5rem;
}

.guanli {
    height: 2vh;
    text-align: center;
}

.group {
    
}
</style>