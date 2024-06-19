<template>
    <nut-tabs v-model="value">
        <nut-tab-pane title="饮食知识" pane-key="1">
            <div class="title">
                食物知识
            </div>
            <div class="content">
            </div>
            <div class="title">
                膳食周记
            </div>
            <div class="content">
                <div class="topList">
                    <div class="item">
                        周一
                    </div>
                    <div class="item">
                        周二
                    </div>
                    <div class="item">
                        周三
                    </div>
                    <div class="item">
                        周四
                    </div>
                    <div class="item">
                        周五
                    </div>
                    <div class="item">
                        周六
                    </div>
                    <div class="item">
                        周日
                    </div>
                </div>
                <div class="bottomlist">
                    <div class="item">
                        <div>早餐</div>
                        <div>早餐</div>
                        <div>早餐</div>
                    </div>
                    <div class="item">
                        周二
                    </div>
                    <div class="item">
                        周三
                    </div>
                    <div class="item">
                        周四
                    </div>
                    <div class="item">
                        周五
                    </div>
                    <div class="item">
                        周六
                    </div>
                    <div class="item">
                        周日
                    </div>
                </div>
            </div>
        </nut-tab-pane>
        <nut-tab-pane title="饮食环境" pane-key="2" class="tabs">
            <nut-tabs v-model="value1" class="tabs">
                <nut-tab-pane title="进餐环境" pane-key="1"></nut-tab-pane>
                <nut-tab-pane title="餐桌礼仪" pane-key="2"> </nut-tab-pane>
                <nut-tab-pane title="饮食卫安" pane-key="3"></nut-tab-pane>
                <nut-tab-pane title="进餐氛围" pane-key="4"> </nut-tab-pane>
                <nut-tab-pane title="进餐情绪" pane-key="5"></nut-tab-pane>
            </nut-tabs>
        </nut-tab-pane>
    </nut-tabs>
</template>
<script setup>
import { ref } from 'vue'
const value = ref('1')
const value1 = ref('1')
</script>

<style>
.tabs {
    padding: 0 !important;
}

.title {
    margin-bottom: 0.5rem;
}

.content {
    min-height: 10rem;
    background-color: rgb(163, 163, 163);
    border-radius: 8px;
}

.topList {
    width: 100%;
    display: flex;
}

.bottomlist {
    width: 100%;
    display: flex;
}

.item {
    width: 14%;
}
</style>