<template>
    <div v-if="isShowWz">

        <div class="title1">食物知识</div>
        <!-- <div class="title1"> <img class=" btn_jinshizhushou" :src="kxys"
            @click="Taro.navigateTo({ url: '/subPackages/children/shiwuzhishi/shiwuzhishi' })" /></div> -->

        <div> <img class=" btn_jinshizhushou" :src=yins
                @click="Taro.navigateTo({ url: '/subPackages/children/shiwuzhishi/shiwuzhishi' })" /></div>

        <div class="title1">膳食计划</div>


        <nut-cell @click="show = true">
            <template #icon>
                {{ dayjs(riqix[0]).format('YYYY-MM-DD')
                }} - {{ dayjs(riqix?.[1])?.format('YYYY-MM-DD') }}
                <DownArrow />
            </template>
        </nut-cell>


        <div class="content1">
            <div style="width: 4rem;">
                <div class="riqi">
                    <div class="item">
                        {{ dayjs(weeks[0]).date() }}
                    </div>
                    <div class="item">
                        周一
                    </div>
                </div>
            </div>
            <div class="item2" v-if="weeksList[0] == 0"
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[0]}` })">
                输入菜单
            </div>
            <div class="item1" v-else
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[0]}` })">
                <div v-for="( item, index ) in weeksList[0] " :key="index" style="width: 50px;">
                    <div class="itemType">{{ swithItype(item[0].type) }}</div>
                    <div class="itemCaidan" v-for="(element, i) in item" :key="i">{{ element.name }}</div>
                </div>
            </div>




        </div>

        <div class="content1">
            <div style="width: 4rem;">
                <div class="riqi">
                    <div class="item">
                        {{ dayjs(weeks[1]).date() }}
                    </div>
                    <div class="item">
                        周二
                    </div>
                </div>
            </div>
            <div class="item2" v-if="weeksList[1] == 0"
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[1]}` })">
                输入菜单
            </div>
            <div class="item1" v-else
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[1]}` })">
                <div v-for="( item, index ) in weeksList[1] " :key="index">
                    <div class="itemType">{{ swithItype(item[0].type) }}</div>
                    <div class="itemCaidan" v-for="(element, i) in item" :key="i">{{ element.name }}</div>
                </div>
            </div>
        </div>

        <div class="content1">
            <div style="width: 4rem;">
                <div class="riqi">
                    <div class="item">
                        {{ dayjs(weeks[2]).date() }}
                    </div>
                    <div class="item">
                        周三
                    </div>
                </div>
            </div>
            <div class="item2" v-if="weeksList[2] == 0"
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[2]}` })">
                输入菜单
            </div>
            <div class="item1" v-else
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[2]}` })">
                <div v-for="( item, index ) in weeksList[2] " :key="index">
                    <div class="itemType">{{ swithItype(item[0].type) }}</div>
                    <div class="itemCaidan" v-for="(element, i) in item" :key="i">{{ element.name }}</div>
                </div>
            </div>
        </div>

        <div class="content1">
            <div style="width: 4rem;">
                <div class="riqi">
                    <div class="item">
                        {{ dayjs(weeks[3]).date() }}
                    </div>
                    <div class="item">
                        周四
                    </div>
                </div>
            </div>
            <div class="item2" v-if="weeksList[3] == 0"
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[3]}` })">
                输入菜单
            </div>
            <div class="item1" v-else
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[3]}` })">
                <div v-for="( item, index ) in weeksList[3] " :key="index">
                    <div class="itemType">{{ swithItype(item[0].type) }}</div>
                    <div class="itemCaidan" v-for="(element, i) in item" :key="i">{{ element.name }}</div>
                </div>
            </div>
        </div>

        <div class="content1">
            <div style="width: 4rem;">
                <div class="riqi">
                    <div class="item">
                        {{ dayjs(weeks[4]).date() }}
                    </div>
                    <div class="item">
                        周五
                    </div>
                </div>
            </div>
            <div class="item2" v-if="weeksList[4] == 0"
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[4]}` })">
                输入菜单
            </div>
            <div class="item1" v-else
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[4]}` })">
                <div v-for="( item, index ) in weeksList[4] " :key="index">
                    <div class="itemType">{{ swithItype(item[0].type) }}</div>
                    <div class="itemCaidan" v-for="(element, i) in item" :key="i">{{ element.name }}</div>
                </div>
            </div>
        </div>

        <div class="content1">
            <div style="width: 4rem;">
                <div class="riqi">
                    <div class="item">
                        {{ dayjs(weeks[5]).date() }}
                    </div>
                    <div class="item">
                        周六
                    </div>
                </div>
            </div>
            <div class="item2" v-if="weeksList[5] == 0"
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[5]}` })">
                输入菜单
            </div>
            <div class="item1" v-else
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[5]}` })">
                <div v-for="( item, index ) in weeksList[5] " :key="index">
                    <div class="itemType">{{ swithItype(item[0].type) }}</div>
                    <div class="itemCaidan" v-for="(element, i) in item" :key="i">{{ element.name }}</div>
                </div>
            </div>
        </div>

        <div class="content1">
            <div style="width: 4rem;">
                <div class="riqi">
                    <div class="item">
                        {{ dayjs(weeks[6]).date() }}
                    </div>
                    <div class="item">
                        周日
                    </div>
                </div>
            </div>
            <div class="item2" v-if="weeksList[6] == 0"
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[6]}` })">
                输入菜单
            </div>
            <div class="item1" v-else
                @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[6]}` })">
                <div v-for="( item, index ) in weeksList[6] " :key="index">
                    <div class="itemType">{{ swithItype(item[0].type) }}</div>
                    <div class="itemCaidan" v-for="(element, i) in item" :key="i">{{ element.name }}</div>
                </div>
            </div>
        </div>


        <nut-popup v-model:visible="show" position="bottom">
            <nut-calendar-card v-model="riqix" type="week" firstDayOfWeek="1" @change="onChange"></nut-calendar-card>
            <nut-button block type="primary" @click="() => { show = false, getList(weeks[0]) }">确认</nut-button>
        </nut-popup>
    </div>
    <div v-else>
        <nut-table :columns="columns" :data="data"></nut-table>
    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import dayjs from 'dayjs';
import { useDidShow } from '@tarojs/taro'
import Axios from '../../util/axios';

import { isShowWz } from "../../util/ip"
import { documentUrl } from './../../util/ip'

import { DownArrow } from '@nutui/icons-vue-taro'

const yins = ref(documentUrl + '/kxys.png')


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
        name: '2',
        sex: '小美',
        record: '自学'
    },
    {
        name: '1',
        sex: '小爱',
        record: '教授'
    },
    {
        name: '3',
        sex: '小红',
        record: '教授与自学'
    }
])

const value = ref('1')
const value1 = ref('1')
const show = ref(false)

const riqix = ref([])

let weeks = ref([])
let weeksList = ref([])


function swithItype(value) {
    if (!value) {
        return '早餐'
    } else if (value == 1) {
        return '点心'
    } else if (value == 2) {
        return '午餐'
    }
    else if (value == 3) {
        return '点心'
    } else if (value == 4) {
        return '晚餐'
    }
}

const onChange = (val) => {
    if (val) {
        riqix.value = val
        weeks.value = getCurrentWeekDates(val[0])
    }
}

useDidShow(() => {
    weeks.value = getCurrentWeekDates()
    riqix.value = [dayjs(weeks.value[0]).toDate(), dayjs(weeks.value[6]).toDate()]
    getList(weeks.value[0])
})

function getList(day) {
    let babyId = Taro.getStorageSync('user')?.id
    Axios.get(`/meal/week?babyId=${babyId}&startDate=${day}`).then(res => {
        const li = res.map(list => {
            const groupedByType = list.reduce((acc, item) => {
                if (!acc[item.type]) {
                    acc[item.type] = [];
                }
                acc[item.type].push(item);
                return acc;
            }, {});
            const groupedArrays = Object.values(groupedByType);
            return groupedArrays
        })
        weeksList.value = li
        console.log(li)
    })
}


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

.title1 {
    margin-bottom: 0.5rem;
    font-weight: bold;
    margin-left: .5rem;
}

.content1 {
    display: flex;
    flex-direction: row;
    margin-left: .5rem;
}

.topList {
    width: 3rem;
    display: flex;
}

.neirong {
    display: flex;
}

.bottomlist {
    width: 10rem;
    display: flex;
    flex-direction: column;

}


.item1 {
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(241, 240, 240);
    margin-bottom: 1rem;
    width: 80%;
    min-height: 3rem;
    border-radius: 15px;
}

.item2 {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: rgb(241, 240, 240);
    margin-bottom: 1rem;
    width: 80%;
    height: 3rem;
    border-radius: 5px;
    text-align: center;
    color: #747373;
    justify-content: center;
}

.itemType {
    background-color: #8CC269;
    border-radius: 8px;
    color: #ffffff;
    width: 3rem;
    font-size: 0.9rem;
}

.itemCaidan {
    /* background-color: #f1f1f1; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    font-size: 0.9rem;
}


.item {
    font-size: .9rem;
}


.topRiqi {
    display: flex;
    flex-wrap: wrap;

}

.riqi {
    margin-bottom: 0.5rem;
    background-color: rgb(236, 236, 236);
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    padding: .2rem;
}


.nut-cell {
    position: relative;
    left: 3rem;
    width: 20rem;
    padding: var(--nut-cell-padding, 26rpx 32rpx);
    color: #000000;
    font-size: 1rem;
    box-sizing: border-box;
    box-shadow: none
}

.btn_jinshizhushou {
    width: 95%;
    height: 9rem;
    margin-left: .5rem;
    border-radius: 15px;
}

.title {
    margin: 0.5rem 0;
    color: #3E721D;
    font-size: 1rem;
    height: max-content;
}

.content {
    padding-top: 0.5rem;
    color: #7B7B7B;
}

.nut-tabs {
    overflow-y: scroll;
    height: 100%;
}
</style>