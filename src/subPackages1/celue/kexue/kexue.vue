<template>
    <div class="box">
        <div class="content">
            · 2~5岁仍处于快速生长发育阶段，营养需求较大，所摄入的食物种类和膳食模式已接近成人，但消化功能尚未完全成熟，其膳食制备与成人有一定的差异。
        </div>
        <div class="content">
            · 此时儿童的自主性、好奇心、学习模仿能力增强，学龄前期是形成良好饮食行为和健康生活方式的关键时期。。
        </div>
        <div class="content">
            基于儿童的生理和营养特点及饮食习惯培养规律，结合我国学龄前儿童膳食营养现状和饮食行为问题，其膳食指南应在一般人群膳食指南基础上增加5条核心推荐。
        </div>
        <img style="height: 40vh; margin: auto;display: flex;  padding-top: 0.5rem;" :src="neirong" />
        <div style="width: 92vw;font-size: 0.8rem; padding-top: 1rem; color: #7B7B7B;">
            <div>[1]中国营养学会. 学龄前儿童膳食指南[Z/OL]. (2022)[2024-06-30]. http://dg.cnsoc.org/upload/affix/20220712162211079.pdf.
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import neirong from '../Aimge/neirong.jpg'

</script>
<style>
.box {
    padding: 1.5rem;
}

.content {
    padding-top: 0.5rem;
    color: #7B7B7B;
}
</style>