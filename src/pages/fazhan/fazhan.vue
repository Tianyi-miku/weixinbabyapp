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
            <div> {{ baby?.name }}</div>
            <div> {{ baby?.age }}</div>
        </div>
    </div>
    <div class="zhibiao">身体指标</div>
    <div class="Tcard" @click=" Taro.navigateTo({
            url: '/subPackages/pages/shenti/shenti',
        })">
        <div class="sg">
            <div>身高 cm</div>
            <div>{{ jichu?.height }}</div>
        </div>
        <div class="bz" @click.stop="Taro.navigateTo({
            url: '/subPackages/pages/guanlipg/guanlipg'
        })">
            <div class="biaozhun"><span style="margin-left: 0.5rem;">{{ jichu?.comment }}</span>
                <RectRight style="margin-bottom: -0.2rem;"></RectRight>
            </div>
        </div>
        <div class="tz">
            <div>体重 kg</div>
            <div>{{ jichu?.weight }}</div>
        </div>
    </div>
    <div class="zhibiao">健康管理</div>
    <nut-grid :border="false" column-num="2">
        <nut-grid-item>
            <div class="guanli" @click=" Taro.navigateTo({
            url: '/subPackages/pages/tizhong/tizhong'
        })">
                <div>
                    <img :src="tizhongguanli" class="imgs" />
                    <div>体重管理</div>
                </div>
            </div>
        </nut-grid-item>
        <nut-grid-item>
            <div class="guanli" @click=" Taro.navigateTo({
            url: '/subPackages/pages/shuimian/shuimian'
        })">
                <div>
                    <img :src="shuimianguanli" class="imgs" />
                    <div>睡眠管理</div>
                </div>
            </div>
        </nut-grid-item>
        <nut-grid-item>
            <div class="guanli" @click=" Taro.navigateTo({
            url: '/subPackages/pages/kouqiang/kouqiang'
        })">
                <div>
                    <img :src="kouqiangguanli" class="imgs" />
                    <div>口腔管理</div>
                </div>
            </div>
        </nut-grid-item>
        <nut-grid-item>
            <div class="guanli" @click=" Taro.navigateTo({
            url: '/subPackages/pages/paibian/paibian'
        })">
                <div>
                    <img :src="paibianguanli" class="imgs" />
                    <div>排便管理</div>
                </div>
            </div>
        </nut-grid-item>
    </nut-grid>
</template>
<script setup>
import Taro from '@tarojs/taro'
import { RectRight } from '@nutui/icons-vue-taro'
import { ref } from 'vue'
import { useDidShow } from '@tarojs/taro'
import { documentUrl } from './../../util/ip'
import Axios from '../../util/axios'
import tizhongguanli from '../../assets/img/tizhongguanli.png'
import shuimianguanli from '../../assets/img/shuimianguanli.png'
import kouqiangguanli from '../../assets/img/kouqiangguanli.png'
import paibianguanli from '../../assets/img/paibianguanli.png'

const baby = ref(null)
const imgUrl = ref('https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png')

const jichu = ref(null)

useDidShow(() => {
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
    /* background-color: #8CC269; */
    border-radius: 15px;
    width: 100%;
}

.iconfont {
    font-size: large;
}

.Tcard {
    background-color: #8CC269;
    margin-left: 2%;
    margin-right: 2%;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sg {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    flex-direction: column;
    padding-top: 0.5rem;
    width: 33%;
}

.bz {
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;
}

.tz {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    flex-direction: column;
    padding-top: 0.5rem;
    width: 33%;
}

.biaozhun {
    background-color: #daeed3;
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

.imgs {
    height: 4rem;
    width: 4rem;
}
</style>