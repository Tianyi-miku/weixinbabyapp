<template>
    <nut-tabs v-model="value">
        <nut-tab-pane title="膳食教育" pane-key="1"> </nut-tab-pane>
        <nut-tab-pane title="自主进食" pane-key="2"> </nut-tab-pane>
    </nut-tabs>
</template>
<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'

const value = ref('1')

</script>