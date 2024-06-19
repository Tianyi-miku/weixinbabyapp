<template>
    <nut-tabs v-model="value">
        <nut-tab-pane title="进食助手" pane-key="1">
            <nut-ellipsis :content="content" :rows="3" class="jszs"></nut-ellipsis>
            <div class="jszsba">适当的户外活动能增强食育</div>
            <div class="title">
                进食助手
            </div>
            <div class="content" @click="gojianshizhushou">
            </div>
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
            <nut-tabs v-model="value1"  class="tabs">
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
    background-color: rgb(163, 163, 163);
    border-radius: 8px;
}

.jszsba {
    padding: 1rem;
    background-color: rgb(213, 213, 213);
    border-radius: 8px;
    font-size: smaller;
}

.title {
    margin: 0.5rem 0;
}

.content {
    min-height: 10rem;
    background-color: rgb(163, 163, 163);
}

.paddi {
    margin-top: 0.5rem;
}
</style>