<template>
    <div class="title1">食物知识</div>
    <div class="title1"> <img class=" btn_jinshizhushou" :src="kxys"
            @click="Taro.navigateTo({ url: '/subPackages/children/shiwuzhishi/shiwuzhishi' })" /></div>
    <div class="title1">膳食计划</div>

    <nut-cell @click="show = true"> {{ dayjs(riqix[0]).format('YYYY-MM-DD')
        }} - {{ dayjs(riqix?.[1])?.format('YYYY-MM-DD') }}</nut-cell>


    <div class="content1">
        <div class="topRiqi">
            <div v-for=" item in weeks " :key="item" class="item">
                {{ dayjs(item).date() }}
            </div>
        </div>
        <div class="topList">
            <div class="item" @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[0]}` })">
                周一
            </div>
            <div class="item" @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[1]}` })">
                周二
            </div>
            <div class="item" @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[2]}` })">
                周三
            </div>
            <div class="item" @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[3]}` })">
                周四
            </div>
            <div class="item" @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[4]}` })">
                周五
            </div>
            <div class="item" @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[5]}` })">
                周六
            </div>
            <div class="item" @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[6]}` })">
                周日
            </div>
        </div>
        <div class="bottomlist">
            <div class="item" v-for="( item, index ) in weeksList " :key="index">
                <div v-for="( e, index ) in item " :key="index" style="font-size: 0.7rem;">
                    <div class="itemType"> {{ swithItype(e[0].type) }}</div>
                    <div class="itemCaidan" v-for="(element, i) in e" :key="i"> {{ element.name }}</div>
                </div>
            </div>
        </div>
    </div>


    <nut-popup v-model:visible="show" position="bottom">
        <nut-calendar-card v-model="riqix" type="week" firstDayOfWeek="1" @change="onChange"></nut-calendar-card>
        <nut-button block type="primary" @click="() => { show = false, getList(weeks[0]) }">确认</nut-button>
    </nut-popup>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import dayjs from 'dayjs';
import { useDidShow } from '@tarojs/taro'
import Axios from '../../util/axios';

import { isShowWz } from "../../util/ip"
// import kxys from '../../assets/img/kxys.png'

import { ref} from 'vue'
import { documentUrl } from '../../util/ip'
const kxys = ref(documentUrl + '/kxys.png')

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
}

.content1 {
    min-height: 10rem;
    /* background-color: rgb(163, 163, 163); */
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

.btn_jinshizhushou {
    width: 100%;
    height: 9rem;
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

.itemType {
    background-color: #8CC269;
    border-radius: 8px;
    color: #ffffff;
}

.itemCaidan {
    background-color: #f1f1f1;
}
</style>