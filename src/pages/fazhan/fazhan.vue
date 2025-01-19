<template>
    <div class="top" v-if="isShowWz">
        <div @click="Taro.navigateTo({
            url: '/subPackages1/pages/geren/geren'
        })">
            <nut-avatar size="large">
                <img :src="imgUrl" />
            </nut-avatar>
        </div>
        <div class="name">
            <div style="display: flex; flex-wrap: wrap;">
                <span> {{ baby?.name }}</span>
                <span v-if="baby?.sex == '0'" class="iconfont icon-xingbienv xznb"></span>
                <span v-else class="iconfont icon-xingbienan xzbb"></span>
            </div>
            <div style=" display: flex;"> {{ baby?.age }}
                <img :src="Frame2" class="bi" @click="Taro.navigateTo({
                    url: '/subPackages/children/xiugaibaobao/xiugaibaobao'
                })" />
            </div>
        </div>
    </div>
    <div v-if="isShowWz" class="zhibiao">身体指标</div>
    <div v-if="isShowWz" class="Tcard" @click=" Taro.navigateTo({
        url: '/subPackages1/pages/shenti/shenti',
    })">
        <div class="sg">
            <div>身高 (cm)</div>
            <div>{{ jichu?.height ? jichu.height : "00.00" }}</div>
        </div>

        <div class="bz" @click.stop="Taro.navigateTo({
            url: '/subPackages1/pages/guanlipg/guanlipg'
        })">
            <div class="biaozhun">
                <span style=" padding-top: 0.1rem;">{{ jichu?.comment }}</span>
                <div class="xiangxi">
                    <span>
                        查看详细
                    </span>
                    <RectRight style="margin-bottom: -0.2rem;font-size: 0.6rem; width: 0.6rem;
    height: 1rem;"></RectRight>
                </div>
            </div>

        </div>

        <div class="tz">
            <div>体重 (kg)</div>
            <div>{{ jichu?.weight ? jichu.weight : "00.00" }}</div>
        </div>
    </div>
    <div v-if="isShowWz" class="zhibiao">健康管理</div>
    <nut-grid v-if="isShowWz" :border="false" column-num="2">
        <nut-grid-item>
            <div class="guanli" @click=" Taro.navigateTo({
                url: '/subPackages1/pages/tizhong/tizhong'
            })">
                <div>
                    <img :src="tizhongguanli" class="imgs" />
                    <div>体重管理</div>
                </div>
            </div>
        </nut-grid-item>
        <nut-grid-item>
            <div class="guanli" @click=" Taro.navigateTo({
                url: '/subPackages1/pages/shuimian/shuimian'
            })">
                <div>
                    <img :src="shuimianguanli" class="imgs" />
                    <div>睡眠管理</div>
                </div>
            </div>
        </nut-grid-item>
        <nut-grid-item>
            <div class="guanli" @click=" Taro.navigateTo({
                url: '/subPackages1/pages/kouqiang/kouqiang'
            })">
                <div>
                    <img :src="kouqiangguanli" class="imgs" />
                    <div>口腔管理</div>
                </div>
            </div>
        </nut-grid-item>
        <nut-grid-item>
            <div class="guanli" @click=" Taro.navigateTo({
                url: '/subPackages1/pages/paibian/paibian'
            })">
                <div>
                    <img :src="paibianguanli" class="imgs" />
                    <div>排便管理</div>
                </div>
            </div>
        </nut-grid-item>
    </nut-grid>
    <div v-else>
        <nut-table :columns="columns" :data="data">
        </nut-table>
    </div>
</template>
<script setup>
import { isShowWz } from "../../util/ip"
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


import Frame2 from '../../assets/img/Frame2.png'
const columns = ref([
    {
        title: '基础',
        key: 'name'
    },
    {
        title: '共同',
        key: 'sex'
    },
    {
        title: '备注',
        key: 'record'
    }
])
const data = ref([
    {
        name: '是',
        sex: '小美',
        record: '良好'
    },
    {
        name: '是',
        sex: '小爱',
        record: '一般'
    },
])
const baby = ref(null)
const imgUrl = ref('https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png')

const jichu = ref(null)

useDidShow(() => {
    baby.value = Taro.getStorageSync('user')
    console.log(baby.value)
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
.xzbb {
    color: #8CC269;
    width: 50px;
}

.xznb {
    color: #FFC269;
    width: 50px;
}

.bi {
    width: 50px;
    height: 50px;

}

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
    box-shadow: 0px 2px 8px rgb(212, 206, 206);
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
    flex-direction: column;
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
    flex-direction: column;
    box-shadow: 1px;
}

.xiangxi {
    display: flex;
    flex-direction: row;
    font-size: .7rem;
    color: #989898;
    padding-top: 0.1rem;
    align-items: center;
}

.zhibiao {
    padding: 1rem;
}

.imgs {
    height: 4rem;
    width: 4rem;
}
</style>