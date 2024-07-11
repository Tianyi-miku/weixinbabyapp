<template>
    <nut-row :gutter="10" style="padding: 0.5rem;" type="flex" align="center" justify="center">
        <nut-col :span="6" class="nutrow">
            <nut-avatar size="large"
                @click="Taro.navigateTo({ url: '/subPackages/children/xiugaibaobao/xiugaibaobao' })">
                <img
                    :src="baby?.avatarPath ? documentUrl + baby.avatarPath : 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'" />
            </nut-avatar>
        </nut-col>
        <nut-col :span="12">
            <div>姓名: {{ baby?.name }}</div>
            <div>年龄: {{ baby?.age }}</div>
        </nut-col>
        <nut-col :span="6" class="nutrow">
            <div class="grids">
                <span class="iconfont icon-xinzeng myionc" @click="Taro.navigateTo({
        url: '/subPackages/children/xinzengbaobao/xinzengbaobao'
    })"></span>
                <span class="iconfont icon-24gl-swapHorizontal3 myionc" @click="openlist"></span>
            </div>
        </nut-col>
    </nut-row>

    <div class="cotnet" style="margin-top: 2.5rem;">
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
                <Setting />
            </template>
        </nut-cell>
        <nut-cell title="数据统计" is-link @click="Taro.navigateTo({
        url: '/subPackages/children/shujutongji/shujutongji'
    })">
            <template #icon>
                <Refresh />
            </template>
        </nut-cell>
        <nut-cell title="联系我们" is-link @click="Taro.navigateTo({
        url: '/subPackages/children/lianxiwomen/lianxiwomen'
    })">
            <template #icon>
                <My />
            </template>
        </nut-cell>
        <nut-cell title="隐私政策" is-link @click="Taro.navigateTo({
        url: '/subPackages/children/yinsizhengce/yinsizhengce'
    })">
            <template #icon>
                <Tips />
            </template>
        </nut-cell>
    </div>
    <nut-popup position="bottom" v-model:visible="show" @closed="colseShow">
        <div class="guanli">宝宝管理</div>
        <div class="group">
            <nut-radio-group v-model="val">
                <nut-radio v-for="item in list" :key="item.id" :label="Number(item.id)" style="width: 100vw;">
                    <div class="item">
                        <div class="toux">
                            <nut-avatar size="large">
                                <img
                                    :src="item.avatarPath ? documentUrl + item.avatarPath : 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'" />
                            </nut-avatar>
                        </div>
                        <div class="name">
                            <div>姓名: {{ item?.name }}</div>
                            <div>年龄: {{ item?.age }}</div>
                        </div>
                        <div class="shanchu" v-if="list.length > 1 && baby.id != item.id" @click.stop="dele(item)">删除
                        </div>
                    </div>
                    <template #icon>
                        <Checklist />
                    </template>
                    <template #checkedIcon>
                        <Checklist color="#8CC269" />
                    </template>
                </nut-radio>
            </nut-radio-group>
        </div>
    </nut-popup>
</template>
<script setup>
import { My, Refresh, Setting, Tips } from '@nutui/icons-vue-taro'
import Taro from '@tarojs/taro';
import { ref, reactive } from 'vue'
import Axios from '../../../util/axios';
import { documentUrl } from './../../../util/ip'
import { Checklist } from '@nutui/icons-vue-taro'
import { useDidShow } from '@tarojs/taro'

const show = ref(false)
const val = ref(null)
const list = ref([])

const baby = ref(null)

useDidShow(() => {
    baby.value = Taro.getStorageSync('user')
    val.value = Number(baby.value.id)
})
function openlist() {
    Axios.get('/baby/list').then(res => {
        if (res.length > 0) {
            list.value = res
            show.value = true
        }
    })
}
function colseShow() {
    const baby1 = list.value.find(item => item.id == val.value)
    if (baby1?.id) {
        baby.value = baby1
        Taro.setStorageSync('user', baby.value)
    }
}

function dele(item) {
    Axios.delete(`/baby/${item.id}`).then(res => {
        Taro.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000
        })
        openlist()
    })
}
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
    display: flex;
    width: 100%;
    flex-wrap: wrap;
}

.item {
    display: flex;
    width: 100%;
}

.toux {
    padding: 1rem 0;
    width: max-content;
    min-width: 20%;
}

.name {
    min-width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem
}

.shanchu {
    min-width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nutrow {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>