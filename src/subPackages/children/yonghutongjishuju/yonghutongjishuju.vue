<template>
    <template v-if="isShowWz">
        <nut-table :columns="columns" :data="data" striped style="font-size: small; margin: 0;">
        </nut-table>
    </template>
    <template v-else>
        <nut-table :columns="columns1" :data="data1" striped style="font-size: small; margin: 0;">
        </nut-table>
    </template>
</template>

<script setup>
import { ref, h } from 'vue';
import { useDidShow } from '@tarojs/taro';
import Axios from '../../../util/axios';
import dayjs from 'dayjs';
import { isShowWz } from "../../../util/ip"

const data1 = ref([
    {
        code: '小明',
        title: '名称',
        key: 'code',
    },
    {
        code: '实例',
        title: '实例',
        key: 'firstLogin',
    }
]);
const columns1 = ref([
    {
        title: '名称',
        key: 'code',
        width: 60
    },
    {
        title: '实例',
        key: 'firstLogin',
        width: 120
    },
]);
const columns = ref([
    {
        title: '账号',
        key: 'code',
        width: 60
    },
    {
        title: '首次登录时间',
        key: 'firstLogin',
        slot: 'firstLogin', // 使用插槽自定义渲染
        render: (record) => {
            return h(
                'span',
                {
                },
                dayjs(record.firstLogin).format('YYYY-MM-DD')
            );
        },
        width: 120
    },
    {
        title: '最新登录时间',
        key: 'lastLogin',
        slot: 'lastLogin', // 使用插槽自定义渲染
        render: (record) => {
            return h(
                'span',
                {
                },
                dayjs(record.lastLogin).format('YYYY-MM-DD')
            );
        }
        ,
        width: 120
    },
    {
        title: '使用时长',
        key: 'lastTime',
        slot: 'lastTime', // 使用插槽自定义渲染
        render: (record) => {
            return h(
                'span',
                {
                },
                formatDuration(record.lastTime)
            );
        }
        ,
        width: 100
    },
    {
        title: '登录总次数',
        key: 'totalTimes',
        width: 20
    },
]);

const data = ref([]);

function formatDuration(ms) {
    
    const seconds = Math.floor(ms / 1000);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let result = '';
    if (days > 0) result += `${days} 天 `;
    if (hours > 0) result += `${hours} 小时 `;
    if (minutes > 0) result += `${minutes} 分钟 `;
    if (remainingSeconds > 0) result += `${remainingSeconds} 秒`;

    return result.trim() || '0 秒';
}

useDidShow(() => {
    Axios.post('/login/record').then((res) => {
        data.value = res;
    });
});
</script>