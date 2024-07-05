<template>
    <nut-tabs v-model="value">
        <nut-tab-pane title="进食助手" pane-key="1">
            <div class="topjinshi">
                <img class="yumaoqiu" :src="yumaoqiu" />
                <div class="jszsba">适当的户外活动能增强食育</div>
            </div>

            <div class="title">
                进食助手
            </div>
            <img class="btn_jinshizhushou" :src="btn_jinshizhushou" @click="gojianshizhushou" />
        </nut-tab-pane>
        <nut-tab-pane title="喂养方式" pane-key="2">
            <div class="title">
                概念
            </div>
            <nut-ellipsis :content="content" :rows="3" class="jszs"></nut-ellipsis>
            <div class="jszsba">适当的户外活动能增强食育</div>
            <div class="title">
                喂养建议
            </div>
            <div class="content">
            </div>
        </nut-tab-pane>
        <nut-tab-pane title="喂养理念" pane-key="3">
            <div class="content paddi" @click="gojiankangyinshi">
            </div>
            <div class="content paddi" @click="gojiankangyinshi">
            </div>
            <div class="content paddi" @click="gojiankangyinshi">
            </div>
        </nut-tab-pane>
        <nut-tab-pane title="养育方式" pane-key="4" class="tabs">
            <nut-tabs v-model="value1" class="tabs">
                <nut-tab-pane title="宽容教育" pane-key="1">
                    <div class="title">
                        概念
                    </div>
                    <div class="content">
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="喂养反思" pane-key="2">
                    <div class="title">
                        概念
                    </div>
                    <div class="content">
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="接纳幼儿" pane-key="3">
                    <div class="title">
                        概念
                    </div>
                    <div class="content">
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="尊重教育" pane-key="4">
                    <div class="title">
                        概念
                    </div>
                    <div class="content">
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="个人压力" pane-key="5">
                    <div class="title">
                        概念
                    </div>
                    <div class="content">
                    </div>
                </nut-tab-pane>
            </nut-tabs>
        </nut-tab-pane>
    </nut-tabs>
</template>
<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import yumaoqiu from '../../assets/img/yumaoqiu.png'
import btn_jinshizhushou from '../../assets/img/btn_jinshizhushou.png'

const value = ref('1')
const value1 = ref('1')
const content = ref(
    'NutUI3.0上线后我们研发团队也在不断的优化'
)

function gojianshizhushou() {
    Taro.navigateTo({
        url: '/subPackages/children/jinshizhushou/jinshizhushou'
    })
}

function gojiankangyinshi(params) {
    Taro.navigateTo({
        url: '/subPackages/children/jiankangyinshi/jiankangyinshi'
    })
}

</script>
<style>
.tabs {
    padding: 0 !important;
}

.jszs {
    padding: 1rem;
    background: #F3F3F3;
    border-radius: .5rem;
}

.jszsba {
    padding: 0.5rem;
    background: #F3F3F3;
    border-radius: .5rem;
    font-size: smaller;
}

.title {
    margin: 0.5rem 0;
}

.content {
    min-height: 10rem;
    background: #F3F3F3;
}

.paddi {
    margin-top: 0.5rem;
}

.yumaoqiu {
    height: 8rem;
    width: 100%;
}

.btn_jinshizhushou {
    width: 100%;
    height: 11rem;
}

.topjinshi {
    width: 21.9375rem;
    height: 10.125rem;
    background: #F3F3F3;
    border-radius: .5rem .5rem .5rem .5rem;
}
</style>