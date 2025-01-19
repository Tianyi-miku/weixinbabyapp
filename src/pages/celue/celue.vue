<template>
    <template v-if="isShowWz">
        <nut-swiper style="height:8rem " :init-page="2" :auto-play="3000" pagination-visible indicator v-if="isShowWz">
            <nut-swiper-item v-for="(item, index) in list" :key="index">
                <img :src="item" width="100%" height="100%">
            </nut-swiper-item>
        </nut-swiper>
        <nut-tabs v-model="value" auto-height="true">
            <nut-tab-pane title="喂养方式" pane-key="1">
                <nut-tabs v-model="value1" direction="vertical">
                    <nut-tab-pane title="顺应喂养" pane-key="1">
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages1/pages/shunyinweiyang/shunyinweiyang/shunyinweiyang' })">
                            <div class="biaoti">饭渣宝宝？试试顺应喂养！</div>
                            <div class="biaoqian">顺应喂养</div>
                        </div>
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages1/pages/shunyinweiyang/shunyinweiyang1/shunyinweiyang1' })">
                            <div class="biaoti">顺应喂养如何做到？</div>
                            <div class="biaoqian">顺应喂养</div>
                        </div>
                    </nut-tab-pane>

                    <nut-tab-pane title="榜样示范" pane-key="2">
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages1/pages/shunyinweiyang/bangyangshifan/bangyangshifan' })">
                            <div class="biaoti">给孩子树立一个好榜样！</div>
                            <div class="biaoqian">榜样示范</div>
                        </div>
                    </nut-tab-pane>
                    <nut-tab-pane title="控制喂养" pane-key="3">
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages1/pages/shunyinweiyang/kongzhiweiyang/kongzhiweiyang' })">
                            <div class="biaoti">控制性喂养是好是坏？</div>
                            <div class="biaoqian">控制喂养</div>
                        </div>
                    </nut-tab-pane>
                    <nut-tab-pane title="限制饮食" pane-key="4">
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages1/pages/shunyinweiyang/xianzhi/xianzhi' })">
                            <div class="biaoti">限制性喂养需适当！</div>
                            <div class="biaoqian">榜样示范</div>
                        </div>
                    </nut-tab-pane>
                    <nut-tab-pane title="进食压力" pane-key="5">
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages1/pages/shunyinweiyang/yali/yali' })">
                            <div class="biaoti">强迫宝宝进食不可取</div>
                            <div class="biaoqian">强迫进食</div>
                        </div>
                    </nut-tab-pane>
                    <nut-tab-pane title="反复尝试" pane-key="6">
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages1/pages/shunyinweiyang/fanfu/fanfu' })">
                            <div class="biaoti">宝宝食物恐新怎么办？</div>
                            <div class="biaoqian">食物恐新</div>
                        </div>
                    </nut-tab-pane>
                    <nut-tab-pane title="奖励策略" pane-key="7">
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages1/pages/shunyinweiyang/jiangli1/jiangli1' })">
                            <div class="biaoti">奖励的误区</div>
                            <div class="biaoqian">奖励</div>
                        </div>
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages1/pages/shunyinweiyang/jiangli2/jiangli2' })">
                            <div class="biaoti">正向奖励怎么做</div>
                            <div class="biaoqian">奖励</div>
                        </div>
                    </nut-tab-pane>

                </nut-tabs>
            </nut-tab-pane>
            <nut-tab-pane title="喂养理念" pane-key="2">
                <nut-tabs v-model="value2" direction="vertical">
                    <nut-tab-pane title="健康饮食" pane-key="1">
                        <div class="contentJg" @click="Taro.navigateTo({ url: '/subPackages/celue/kexue/kexue' })">
                            <div class="biaoti">健康饮食怎么做？</div>
                            <div class="biaoqian">健康饮食</div>
                        </div>
                        <div class="contentJg" @click="Taro.navigateTo({ url: '/subPackages/celue/kexue2/kexue2' })">
                            <div class="biaoti">爸爸妈妈怎么做</div>
                            <div class="biaoqian">健康饮食</div>
                        </div>
                    </nut-tab-pane>

                    <nut-tab-pane title="隔代喂养" pane-key="2">
                        <div class="contentJg" @click="Taro.navigateTo({ url: '/subPackages/celue/gedai/gedai' })">
                            <div class="biaoti">长辈带娃注意什么？</div>
                            <div class="biaoqian">隔代喂养</div>
                        </div>
                    </nut-tab-pane>
                    <nut-tab-pane title="喂养态度" pane-key="3">
                        <div class="contentJg" @click="Taro.navigateTo({ url: '/subPackages/celue/taidu/taidu' })">
                            <div class="biaoti">一致的喂养态度很重要！！！</div>
                            <div class="biaoqian">喂养态度</div>
                        </div>

                    </nut-tab-pane>
                    <nut-tab-pane title="喂养焦虑" pane-key="4">
                        <div class="contentJg" @click="Taro.navigateTo({ url: '/subPackages/celue/celve/celve' })">
                            <div class="biaoti">如何避免出现焦虑情绪？</div>
                            <div class="biaoqian">喂养焦虑</div>
                        </div>
                    </nut-tab-pane>
                </nut-tabs>

            </nut-tab-pane>


            <nut-tab-pane title="养育方式" pane-key="3">
                <nut-tabs v-model="value3" direction="vertical">
                    <nut-tab-pane title="宽容教育" pane-key="1">
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages/weiyangfangshi/kuanrong/kuanrong' })">
                            <div class="biaoti">心平气和地对待宝宝吃饭问题！</div>
                            <div class="biaoqian">宽容教育</div>
                        </div>
                    </nut-tab-pane>

                    <nut-tab-pane title="喂养反思" pane-key="2">
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages/weiyangfangshi/fansi/fansi' })">
                            <div class="biaoti">父母也在学习如何做更好的父母！</div>
                            <div class="biaoqian">喂养反思</div>
                        </div>
                    </nut-tab-pane>

                    <nut-tab-pane title="接纳幼儿" pane-key="3">
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages/weiyangfangshi/jiena/jiena' })">
                            <div class="biaoti">要让宝宝体验“我很重要”</div>
                            <div class="biaoqian">接纳幼儿</div>
                        </div>
                    </nut-tab-pane>

                    <nut-tab-pane title="尊重教育" pane-key="4">
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages/weiyangfangshi/zunzhong/zunzhong' })">
                            <div class="biaoti">尊重就是“我可以”</div>
                            <div class="biaoqian">尊重教育</div>
                        </div>
                    </nut-tab-pane>

                    <nut-tab-pane title="个体差异" pane-key="4">
                        <div class="contentJg"
                            @click="Taro.navigateTo({ url: '/subPackages/weiyangfangshi/gerenyali/gerenyali' })">
                            <div class="biaoti">接受个体差异，“光盘不是目的”</div>
                            <div class="biaoqian">个体差异</div>
                        </div>
                    </nut-tab-pane>
                </nut-tabs>
            </nut-tab-pane>
        </nut-tabs>
        <img :src="Frame15" class="button"
            @click=" Taro.navigateTo({ url: '/subPackages/children/jinshizhushou/jinshizhushou' })" />
    </template>
    <div v-else>
        <nut-table :columns="columns" :data="data"></nut-table>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import { isShowWz } from "../../util/ip"
import lunboq1 from "../../assets/img/lunboq1.png"
import lunboq2 from "../../assets/img/lunboq2.png"
import lunboq3 from "../../assets/img/lunboq3.png"

import { Swiper, SwiperItem } from '@nutui/nutui-taro'

import { documentUrl } from './../../util/ip'

const Frame15 = ref(documentUrl + '/Frame15.png')

const list = [
    lunboq1,
    lunboq2,
    lunboq3,
]

const columns = ref([
    {
        title: '策略',
        key: 'name'
    },
    {
        title: '名称',
        key: 'sex'
    },
    {
        title: '备注',
        key: 'record'
    }
])
const data = ref([
    {
        name: '个人策略',
        sex: '小美',
        record: '自学'
    },
    {
        name: '他人策略',
        sex: '小爱',
        record: '教授'
    },
    {
        name: '家庭策略',
        sex: '小红',
        record: '教授与自学'
    }
])
const value = ref('1')
const value1 = ref('1')
const value2 = ref('1')
const value3 = ref('1')
const content = ref(
    'NutUI3.0上线后我们研发团队也在不断的优化'
)

function gojianshizhushou() {
    Taro.navigateTo({
        url: '/subPackages/children/jinshizhushou/jinshizhushou'
    })
}

function gojiankangyinshi(params) {

}

</script>
<style>
page {
    overflow: hidden;
}

.button {
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: 35rem;
    right: 1rem
}

.contentJg {
    min-height: 3rem;
    width: 100%;
    border-bottom: 2px solid rgb(197, 201, 194);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 0.3rem;
}

.biaoti {
    left: 0px;
    /* top: 2rem; */
    font-size: 12pt;
    font-weight: 600;
}

.biaoqian {

    margin-top: auto;
    margin-top: 0.3rem;
    font-size: 8pt;
    color: white;
    background-color: #8CC269;
    border-radius: 5px;
    padding: 2px;
}

.nut-tabs {
    height: 100%;
}
</style>