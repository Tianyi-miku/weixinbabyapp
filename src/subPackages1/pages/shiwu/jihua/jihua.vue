<template>
    <!-- <img class="yinyangzhishi" :src="yinyangzhishi" /> -->
    <div class="title">
        膳食宝塔被分为五层
    </div>
    <div class="content">
        · 从下到上所推荐的食物依次为谷薯类， 蔬菜和水果类，鱼、肉、蛋类，奶、奶制品以及大豆坚果类，油和盐。宝塔旁对每个食物组的每日摄入有量的推荐。
    </div>
    <div class="content">
        · 此外，该塔还强调饮水 (600~800ml)和户外运动。
    </div>
    <div style="width: 92vw;font-size: 0.8rem;color: #7B7B7B;">
        [1]中国营养学会. 学龄前儿童膳食指南[Z/OL]. (2022)[2024-06-30]. http://dg.cnsoc.org/upload/affix/20220712162211079.pdf.
    </div>
</template>
<script setup>

</script>
<style>
.title {
    margin: 0.5rem 0;
    color: #3E721D;
    font-size: 1rem;
    height: max-content;
}

.titleHt {
    font-size: 1rem;
    color: #181818;
    margin: 0.5rem 0;
}

.content {
    padding-top: 0.5rem;
    color: #7B7B7B;
}

.yinyangzhishi {
    height: 17rem;
    width: 100%;
}

.nut-tabs {
    overflow-y: scroll;
    height: 100%;
}

.demo-list .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
    height: 150px;
    background-color: #f4a8b6;
    border-radius: 10px;
}
</style>