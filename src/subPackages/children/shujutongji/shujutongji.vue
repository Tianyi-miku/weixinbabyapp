<template>
    <div class="demo-list">
        <nut-list :list-data="data" :height="100">
            <template #default="{ index }">
                <div class="cotnent">
                    <div class="item">
                        <Date></Date> 日期
                    </div>
                    <div class="item">
                        睡眠 1次
                        8小时
                    </div>
                    <div class="item">
                        {{ index }}
                        宝宝4岁1月27天
                    </div>
                </div>

            </template>
        </nut-list>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Date } from '@nutui/icons-vue-taro'

const data = ref(new Array(10).fill(0))

onMounted(() => {
    data.value = data.value.map((_: number, index: number) => index + 1)
})

</script>
  
<style>
.demo-list .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    border-radius: 10px;
}

.cotnent {
    background-color: #aaaaaa;
    margin-bottom: 10px;
    padding: 1rem;
}

.item {
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
}
</style>