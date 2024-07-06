<template>
    <nut-tabs v-model="value">
        <nut-tab-pane title="膳食教育" pane-key="1">
            <div class="title" style="font-size: 1.3rem;">如何进行膳食教育？</div>
            <div class="title">1、系统营养教育结合儿童语言发展。</div>
            <div class="content">
                特别是口语学说食物的正确名称(如:西兰花、土豆);餐具的名称(如:碗、勺、盘);掌握一些量词(如:一碗、一片、一块、一粒);了解常用膳食烹调术语(如:炒、拌、蒸);辅以关于食物的故事。在朗朗上口，潜移默化中达到目的。
            </div>
            <div class="title">参与食物选择与制作，增进对食物的认知和喜爱。</div>
            <div class="content">
                · 学龄前期是培养健康饮食行为和建立基本营养健康意识的重要阶段。家庭和托幼机构应定期开展食育活动，为儿童提供更多接触、观察和认识食物的机会。
            </div>
            <div class="content">
                · 在保证安全前提下鼓励儿童参与食物选择和烹调加工过程，增进对食物的认知和喜爱，培养尊重和爱惜食物的意识。
            </div>
            <div class="titleHt">
                实践指导：培养认知食物与喜爱食物。
            </div>
            <div class="content">
                应尽可能为儿童创造更多认识和感受食物的机会，建议组织儿童参加各种参观体验活动，如去农田认识农作物，观察家里和幼儿园内种植的蔬菜、水果的生长过程，聆听关于蔬菜和水果的营养故事等。
            </div>
            <div style="position: absolute; width: 92vw;font-size: 0.8rem; padding-top: 1rem; color: #7B7B7B;">
                <div>[1]胡军, 张格祥, 肖永良. 学龄前儿童成长与膳食营养[M]. 军事医学科学出版社, 2010.
                </div>
                <div>[2]中国营养学会. 学龄前儿童膳食指南[Z/OL]. (2022)[2024-06-30]. http://dg.cnsoc.org/upload/affix/20220712162211079.pdf.
                </div>
            </div>
        </nut-tab-pane>
        <nut-tab-pane title="自主进食" pane-key="2">
            <div class="title" style="font-size: 1.3rem;">如何培养孩子自主进食培养？</div>
            <div class="titleHt">
                12月龄的幼儿应该开始练习自己用餐具进食，培养幼儿的独立能力和正确反应能力。1～2岁幼儿应分餐进食，鼓励自己进食，2岁后的儿童应独立进食。
            </div>
            <div class="content">1、食物质地：不同质地的食物可进一步训练幼儿吞咽、咀嚼能力。</div>
            <div class="content">2、学习自我进食：幼儿应学习抓、用勺子，参与进餐过程，逐步学习自己进食。刚开始不必要求正确使用餐具，允许主动抓握食物自我喂食，有助于更快掌握独立进食技能，培养自信。</div>
            <div class="content">3、允许幼儿进食过程狼藉，可事先在地上铺好相应的地垫以便于清洁。在进食过程中熟练掌握进食技巧。</div>
            <div class="content">4、培养幼儿规律的进食习惯， 家长尽可能为儿童提供各种食物满足生长需要，不强迫进食。识别幼儿饱腹的信号，允许吃饱后离开餐桌。</div>
            <div class="content">5、对较年长一些的幼儿，可适当参与食物的制作过程或者餐前准备餐具，提高其对进食过程的兴趣。</div>
            <img style="height: 6.5625rem;width: 9.5625rem;margin: auto;display: flex;padding: 1rem;" :src="wa" />
            <div style="position: absolute; width: 92vw;font-size: 0.8rem; padding-top: 1rem; color: #7B7B7B;">
                <div>[1]江帆, 毛萌. 0～3岁婴幼儿喂养建议(基层医师版)[J]. 中华儿科杂志, 2016, 54(12): 883-890.
                </div>
            </div>
        </nut-tab-pane>
    </nut-tabs>
</template>
<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import wa from '../../assets/img/wa.jpg'

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

.nut-tabs {
    overflow-y: scroll;
    height: 100%;
}
</style>