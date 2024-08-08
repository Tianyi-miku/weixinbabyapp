<template>
    <nut-tabs class="tabs" v-model="value" title-scroll="true" title-gutter="10" ellipsis="false" size="small"
        auto-height="true"  v-if="isShowWz">
        <nut-tab-pane title="营养知识" pane-key="1">
            <img class="yinyangzhishi" :src="yinyangzhishi" />
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
        </nut-tab-pane>
        <nut-tab-pane title="食物制备" pane-key="2">
            <div class="title">
                食物的制备与保存过程
            </div>
            <div class="content">
                需保证食物、食具、水的清洁和卫生。在准备食物和喂食前儿童和看护人均应洗手，给儿童提供新鲜的食物，避免食物被污染。禽畜肉类、水产品等动物性食物应保证煮熟，以杀灭有害细菌。剩余食物再食时宜加热避免污染，加热固体食物应彻底、液体食物应煮沸。
            </div>
            <div class="title">
                烹饪方法
            </div>
            <div class="titleHt">
                · 理论：合理烹调，少调料少油炸。
            </div>
            <div class="content">
                1、从小培养儿童淡口味有助于形成终身的健康饮食行为，烹调儿童膳食时应控制盐和糖的用量，不加味精、鸡精及辛辣料等调味品，保持食物的原汁原味，让儿童品尝和接纳食物的自然味道。
            </div>
            <div class="content">
                2、建议多采用蒸、煮、炖，少用煎、炒的方式加工烹调食物，有利于儿童食物消化吸收、控制能量摄入过多以及淡口味的培养。
            </div>
            <div class="titleHt">
                · 实践指导：培养宝宝淡口味
            </div>
            <div class="content">
                1、建议烹调学龄前儿童膳食时，以淡口味为宜，尽量少放盐和糖，少用含盐量较高的酱油、豆豉、耗油、咸味汤汁及酱料等。不应过咸、油腻和辛辣，尽可能少用或不用味精、鸡精、色素、糖精等调味品。
            </div>
            <div class="content">
                2、可选择天然、新鲜香料（如 葱、蒜、洋葱、香草等）和新鲜蔬果汁（如番茄汁、柠檬、南瓜汁、菠菜汁等）调味。建议每日食盐摄入量：2~3岁＜2g, 4~5岁＜3g。学龄前儿童膳食多采用蒸、煮、炖、煨
                等烹调方式，少用油炸、烧烤、煎等方式。
            </div>
            <div style="width: 92vw;font-size: 0.8rem;color: #7B7B7B;">
                [1]中国营养学会. 学龄前儿童膳食指南[Z/OL]. (2022)[2024-06-30]. http://dg.cnsoc.org/upload/affix/20220712162211079.pdf.
            </div>
        </nut-tab-pane>
        <nut-tab-pane title="食物选择" pane-key="3">
            <div class="title">
                1.食物质地选择
            </div>
            <div class="content">
                在儿童食品加工制作过程中要注意剔除不适合幼儿的食物和口感(如辣)、质地(如较硬，不易咀吞咽)的作物和制作不当易发生食物中毒(如豆角、豆浆)的食物原料
            </div>
            <div class="title">
                2.食物种类选择
            </div>
            <div class="content">
                · 结合家庭经济收入情况，保障儿童营养需要。但并非越贵的食品就越有营养。同等营养价值的情况下，可选择互换不同经济价格的食材。如豆类与肉类互换，土豆、红薯山药等块根类间互换，叶菜与茎菜交换。
            </div>
            <div class="content">
                · 有针对性地选取高营养素密度的各类食物，尤其注意遴选富含优质蛋白质、铁、钙、锌、碘，富含维生素A、维生素B族、维生素C的食物原料。
            </div>
            <div class="content">
                ·
                考虑季节和市场供应情况主要是熟悉市场可供选择的原料，并了解其营养特点。兼顾经济条件是既要使食谱符合营养要求，又要使进餐者在经济上有承受能力，才会使食谱有实际意义。在可能的情况下，即使膳食多样化，又要照顾就餐者的膳食习惯。
            </div>
            <div style="width: 92vw;font-size: 0.8rem;color: #7B7B7B;">
                [1]胡军, 张格祥, 肖永良. 学龄前儿童成长与膳食营养[M]. 军事医学科学出版社, 2010.
            </div>
        </nut-tab-pane>
    </nut-tabs>
    <div v-else>当前内容后续开发中！敬请期待！</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import yinyangzhishi from '../Aimgs/yinyangzhishi.jpg'
import { isShowWz } from "../../../util/ip"

const value = ref('1')
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
</style>