<template>
    <div>
        <nut-input v-model="val" placeholder="请输入食材" clearable>
            <template #right>
                <nut-button type="primary" size="small">添加</nut-button>
            </template>
        </nut-input>
    </div>
    <div class="title">
        食材清单
    </div>
    <div>
        <nut-tag round type="primary" class="nuttag"> 菜单1 </nut-tag>
        <nut-tag round type="primary" class="nuttag"> 菜单2 </nut-tag>
        <nut-tag round type="primary" class="nuttag"> 菜单3 </nut-tag>
    </div>
    <div class="buttons">
        <div>
            <nut-button type="primary" @click="Taro.navigateTo({
                url: '/subPackages/children/caidan/caidan'
            })">菜品清单</nut-button>
        </div>
        <div>
            <nut-button type="info">过敏食材</nut-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'
const val = ref('')
</script>

<style>
.nuttag {
    padding: 0.2rem;
    margin: 0.5rem;
}

.title {
    margin: 0.5rem;
}

.buttons {
    padding-top: 2rem;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
}
</style>