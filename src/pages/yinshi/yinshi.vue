<template>
    <nut-tabs v-model="value" class="tabsBody">
        <nut-tab-pane title="饮食知识" pane-key="1">
            <div class="title">
                食物知识
            </div>
            <div class="content">
            </div>
            <div class="title">
                膳食周记
            </div>
            <nut-cell @click="show = true"> {{ dayjs(riqix[0]).format('YYYY-MM-DD')
            }} - {{ dayjs(riqix?.[1])?.format('YYYY-MM-DD') }}</nut-cell>


            <div class="content">
                <div class="topRiqi">
                    <div v-for="item in weeks" :key="item" class="item">
                        {{ dayjs(item).date() }}
                    </div>
                </div>

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
                        <div @click="Taro.navigateTo({
                            url: '/subPackages/children/caidan/caidan'
                        })">早餐</div>
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
    <nut-popup v-model:visible="show" position="bottom">
        <nut-calendar-card v-model="riqix" type="week" firstDayOfWeek="1" @change="onChange"></nut-calendar-card>
        <nut-button block type="primary" @click="show = false">确认</nut-button>
    </nut-popup>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import dayjs from 'dayjs';
const value = ref('1')
const value1 = ref('1')
const show = ref(false)


const riqix = ref([])

let weeks = ref([])

const onChange = (val) => {
    riqix.value = val
    weeks.value = getCurrentWeekDates(val[0])
}
onMounted(() => {
    weeks.value = getCurrentWeekDates()
    riqix.value = [dayjs(weeks.value[0]).toDate(), dayjs(weeks.value[6]).toDate()]
})
function getCurrentWeekDates(value) {
    // 获取当前日期 
    let today
    if (value) {
        today = dayjs(value);
    } else {
        today = dayjs();
    }
    // 计算本周的周一的日期（如果今天是周日，则周一是今天加1天；如果今天是周一，则就是今天）  
    const startOfWeek = today.subtract(today.day() ? today.day() - 1 : 6, 'day');
    // 创建一个数组来存储本周的日期（从周一开始）  
    const weekDates = [];
    // 循环生成从周一到周日的日期  
    for (let i = 0; i < 7; i++) {
        // 使用 add 方法获取本周的某一天  
        const date = startOfWeek.add(i, 'day');
        // 将日期添加到数组中  
        weekDates.push(date.format('YYYY-MM-DD'));
    }
    return weekDates;
}
</script>

<style>
.tabsBody {
    height: 100vh;
}

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
    text-align: center;
}

.topRiqi {
    display: flex;
    flex-wrap: wrap;
}
</style>