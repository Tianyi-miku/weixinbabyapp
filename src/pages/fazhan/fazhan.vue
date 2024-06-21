<template>
    <div class="top">
        <div @click="Taro.navigateTo({
            url: '/subPackages/pages/geren/geren'
        })">
            <nut-avatar size="large">
                <img :src="imgUrl" />
            </nut-avatar>
        </div>
        <div class="name">
            <div>姓名: {{ baby?.name }}</div>
            <div>年龄: {{ baby?.age }}</div>
        </div>
    </div>
    <div class="zhibiao">身体指标</div>
    <div class="Tcard" @click=" Taro.navigateTo({
            url: '/subPackages/pages/shenti/shenti',
        })">
        <div class="sg">
            <div>身高 :{{ jichu?.height }}</div>
        </div>
        <div class="bz" @click.stop="Taro.navigateTo({
            url: '/subPackages/pages/guanlipg/guanlipg'
        })">
            <div class="biaozhun">标准 <RectRight></RectRight>
            </div>
        </div>
        <div class="tz">
            <div> 体重:{{ jichu?.weight }}</div>
        </div>
    </div>
    <div class="zhibiao">健康管理</div>
    <nut-grid :border="false" column-num="2">
        <nut-grid-item>
            <div class="guanli" @click=" Taro.navigateTo({
            url: '/subPackages/pages/tizhong/tizhong'
        })">体重管理</div>
        </nut-grid-item>
        <nut-grid-item>
            <div class="guanli" @click=" Taro.navigateTo({
            url: '/subPackages/pages/shuimian/shuimian'
        })">睡眠管理</div>
        </nut-grid-item>
        <nut-grid-item>
            <div class="guanli" @click=" Taro.navigateTo({
            url: '/subPackages/pages/kouqiang/kouqiang'
        })">口腔管理</div>
        </nut-grid-item>
        <nut-grid-item>
            <div class="guanli" @click=" Taro.navigateTo({
            url: '/subPackages/pages/paibian/paibian'
        })">排便管理</div>
        </nut-grid-item>
    </nut-grid>
</template>
<script setup>
import Taro from '@tarojs/taro'
import { RectRight } from '@nutui/icons-vue-taro'
import { ref, onMounted } from 'vue'
import { documentUrl } from './../../util/ip'
import { useDidShow } from '@tarojs/taro'
import Axios from '../../util/axios'

const baby = ref(null)
const imgUrl = ref('https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png')

const jichu = ref(null)

onMounted(() => {
    baby.value = Taro.getStorageSync('user')
    if (baby.value.avatarPath) {
        imgUrl.value = documentUrl + baby.value.avatarPath
    }
    if (baby.value.id) {
        Axios.get(`/basic/${baby.value.id}`).then(res => {
            jichu.value = res
        })
    }
})

</script>
<style>
.top {
    display: flex;
    padding: 0 1rem;
}

.name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding-left: 1rem;
}

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
    background-color: aliceblue;
    margin-left: 2%;
    margin-right: 2%;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sg {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bz {
    padding: 1rem;
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