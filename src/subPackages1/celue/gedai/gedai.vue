<template>
    <div class="box" v-if="isShowWz">
        <div class="title">隔代教育与幼儿饮食习惯</div>
        <div class="content">
            隔代喂养分歧较普遍存在，分歧主要来自于饮食和饮食搭配两方面。在孩子饮食方面，分歧依次为喂养知识（24.8%）、喂养方法（23.8%）和喂养态度（12.7%）。在孩子饮食搭配方面，分歧主要存在于食品种类（24.0%）、食量（16.4%）和喂养方式（14.9%）。
        </div>
        <div class="title" style="font-size: 1.1rem;">对策</div>
        <div class="title">1. 从主要看护人改变为辅助看护人。</div>
        <div class="content">
            虽然在家庭成员中，年轻的父母一般都有全日制的工作，比较忙，与孩子的接触相对较少。但家长可以利用下班后的时间，多与孩子玩耍沟通，不要因为工作太累，到家就忽略孩子的存在，做孩子真正的看护人。虽然父母的工作忙，但在孩子的一天三餐中，除了午餐孩子在园解决，其他两餐父母还是可以与孩子一起进餐。父母应该利用好这两餐的时间，培养孩子良好的饮食习惯。
        </div>
        <div class="title">2.听取孩子父母对购买食物和烹调方式的建议。</div>
        <div class="content">
            现在的年轻父母的知识一般都丰富，接触了解的食物的种类和烹调方法较多，在这方面祖辈有所欠缺，父母可以给祖辈提出一些建议，多改变食物的种类和烹调方式，吸引幼儿进餐的欲望。
        </div>
        <div style="width: 92vw;font-size: 0.8rem; padding-top: 1rem; color: #7B7B7B;">
            <div>[1]陆燕芳.隔代教育对幼儿饮食习惯的影响和对策[J].考试周刊,2016,(16):194.
            </div>
        </div>
    </div>
    <div v-else>
        <nut-table :columns="columns" :data="data">
        </nut-table>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { isShowWz } from "../../../util/ip"

const columns = ref([
    {
        title: '菜单',
        key: 'name'
    },
    {
        title: '每周',
        key: 'sex'
    },
    {
        title: '备注',
        key: 'record'
    }
])
const data = ref([
    {
        name: '25个',
        sex: '轮换',
        record: '每天5个'
    },
    {
        name: '20个',
        sex: '轮换',
        record: '每天至少4个'
    },
])
</script>
<style>
.title {
    margin: 0.5rem 0;
    color: #3E721D;
    font-size: 1rem;
    height: max-content;
}

.box {
    padding: 1.5rem;
}

.content {
    padding-top: 0.5rem;
    color: #7B7B7B;
}
</style>