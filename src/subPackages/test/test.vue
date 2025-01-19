<template>
    <div class="neirong1">
        <div class="demo-list">
            <div>
                <div class="list-item" v-for="item in blogList">
                    <div class="list-item-msg">{{ item.msg }}</div>
                    <div class="bottomList">
                        <div class="leftIcon">
                            <div class="touxiang">
                                头像
                            </div>
                            <div class="name">name</div>
                            <div class="riqi">日期</div>
                        </div>
                        <div class="rightIcon">
                            <div class="Comment">
                                <Comment></Comment>

                            </div>
                            <div class="SFollow">
                                <template>
                                    <HeartFill color="red"></HeartFill>
                                </template>
                                <template>
                                    <SFollow></SFollow>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div class="bar-chart">
                    <EChart ref="canvas" />
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>
import Axios from '../../util/axios';
import { Comment, SFollow, HeartFill } from '@nutui/icons-vue-taro'
import { useDidShow } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import { ref, onMounted } from 'vue'
import dayjs from "dayjs";
import { loadEcharts } from "echarts4taro3";
import * as echarts from "echarts4taro3/lib/assets/echarts";; // 这里用了内置的，也可以用自定义的 echarts.js
import { EChart } from "echarts4taro3";



let blogList = ref(null)


let sleepDate = ref(null)

useDidShow(() => {
    getBlogList()
    getSleepTime()
    showEachts(weeks.value[0])
})


function getBlogList() {
    let babyId = Taro.getStorageSync('user')?.id

    Axios.get(`/blog/list/${babyId}?${babyId}`).then(res => {
        blogList.value = res
        console.log(res);
    })
}

function getSleepTime() {
    let babyId = Taro.getStorageSync('user')?.id
    let startDate = 2024 - 12 - 26
    Axios.get(`/sleep/time?${babyId}&${startDate}`).then(res => {
        sleepDate = res
        console.log(res);
    })
}

const options = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }
    ]
};
const echartComponentInstance = canvas.value; // 组件实例
Taro.nextTick(() => {
    // 初始化图表
    echartComponentInstance.refresh(options)
});

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


// function getSleepTime () {
//     let babyId = Taro.getStorageSync('user')?.id
//     Axios.get(`/blog/list/${babyId}?${babyId}`).then(res => {
//     blogList.value = res 
//     console.log(res);
//   })
// }
</script>

<style>
.gongyu {
    height: 100%;
    overflow: hidden;
}

.demo-list {
    height: 25rem;
    overflow: scroll;
}

.list-item {
    /* display: flex; */
    width: 96%;
    margin-left: 2%;
    /* margin-bottom: 20px; */
    /* text-align: center; */
    min-height: 350px;
    /* background-color: #f4a8b6; */
    border-radius: 5%;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.11);
    margin-top: 40px;
    position: relative;
}

.bottomList {
    position: absolute;
    bottom: 10px;
    display: flex;
    width: 100%;
}

.leftIcon {
    width: 70%;
    display: flex;
    font-size: 0.6rem;
    align-items: center;
}

.name {
    padding-left: 20px;
    font-size: .9rem;
    text-align: center;
}

.touxiang {
    width: 2rem;
    height: 2rem;
    padding-left: 1rem;
}

.riqi {
    padding-left: 1rem;
    font-size: .8rem;
}

.rightIcon {
    width: 30%;
    display: flex;
    justify-items: center;
}

.Comment {
    width: 50%;
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
}

.SFollow {
    width: 50%;
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
}

.neirong1 {
    width: 100%;
}

.tubiao {
    display: flex;
}


.content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 8rem;
    border-bottom: 1px solid rgb(206, 200, 200);
    margin-top: 1rem;
}

.biaoti {
    font-weight: bold;
    font-size: o.9rem;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
}

.nut-tab-pane {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    padding: 0;
    flex-shrink: 0;
    display: block;
    background-color: #f9f9f9c4;
    /* padding: 48rpx 40rpx; */
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: auto;
    height: 100%;
    word-break: break-all;
    /* width: 96%; */
    /* margin-left: 2%; */
}

.shequneirong {
    width: 100%;
    /* height: 10rem; */
    align-self: flex-start;
    background-color: rgb(255, 255, 255);
}

/* .nut-tabs {} */

.jiaobiao {
    font-size: 0.76rem;
    margin-top: 3.2rem;
}

.jiaobiao1 {
    font-size: 0.76rem;
    margin-top: 2rem;
}

.beijin {
    height: 100%;
}

.list-item-img {
    height: 5rem;
    width: 5rem;
}

.list-item-msg {
    padding: 10px;
}

.nut-tabs__content {
    height: 100%;
}

.nut-icon {
    padding: 10px;
}
</style>