<template>
    <nut-tabs v-model="value">
        <nut-tab-pane title="喂养关系" pane-key="1">
            <div class="title" style="font-size: 1.3rem;">加强亲子亲密性有利于幼儿健康饮食行为</div>
            <div class="titleHt">
                父母与幼儿建立一种快乐的、满足的亲密关系。该关系有利于双方沟通交流，并使双方真正地相互理解和达成共识，因此这类教育行为下的幼儿能真正地形成可持续的健康进餐行为。
            </div>
            <div class="content">
                亲子冲突是父母与子女之间的对立和不一致，是亲子关系的对抗部分。长期不当的教养方式，会带来消极的亲子互动，激化矛盾的发生。幼儿被置于充满敌意的环境中，对家庭共餐产生恐惧和逃避心理，
                难以养成健康的饮食行为习惯。父母更应该关注亲子冲突善用策略，理性育儿，减少矛盾的发生。
            </div>
            <div class="content">
                · 共同制定家庭饮食公约有助于减少矛盾的发生。父母可以多鼓励幼儿提出进餐时“应该做” 和 “不应该做”的内容，并思考其合理性，让幼儿在认知和情感上认同规则。同时，亲子双方有平等的权利互相监督，直至规则内化为习惯。
            </div>
            <div class="content">
                · 父母可以和孩子一起选购食物，并让孩子参与力所能及的食物加工活动（如择菜等），增加其对食物的接受度，增进亲子关系。
            </div>
            <div style="position: absolute; width: 92vw;font-size: 0.8rem; padding-top: 1rem; color: #7B7B7B;">
                <div>[1]陈旭微.幼儿家庭进餐行为主体性影响因素分析[J].陕西学前师范学院学报,2017,33(07):75-82.
                </div>
                <div>[2]黄思雨,甘剑梅.幼儿饮食行为与亲子关系、父母教养方式的关系[J].教育导刊(下半月),2019,(11):79-85.
                </div>
            </div>
        </nut-tab-pane>
        <nut-tab-pane title="家园共育" pane-key="2">
            <div class="title" style="font-size: 1.3rem;">幼儿的社会性培养需要家、园教育保持一致</div>
            <div class="titleHt">
                给孩子们“怎样吃?吃什么?吃多少?”等问题已成了幼儿家长、幼教工作者和营养师们关注的热点。怎样才能保证幼儿每天摄入到营养平衡的膳食，这受两方面的影响:一是幼儿自己，二是幼儿家长及儿童教养工作者。要使这两方面的关系和谐统一，需要有一套完善的、科学的膳食营养照料管理体系。
            </div>
            <div class="title">1. 幼儿园方面。</div>
            <div class="content">
                · 通过幼儿园的网站、广播、信息栏、班级家庭之窗等向家长宣传幼儿的饮食营养，并定期向家长推荐一些营养合理搭配的食谱。
            </div>
            <div class="content"> · 通过家长会、家长学校，给家长一个直接交流彼此在幼儿饮食方面的经验的平台，帮助家长针对幼儿饮食习惯中存在的问题，树立正确的教育观念和教育方法，纠正家长在幼儿早餐认识上的误区；
            </div>
            <div class="content"> · 通过开放日，让家长自己来幼儿园参观一下，幼儿在园是怎么吃饭、吃点心的，与教师交流经验，进行直观的学习。</div>
            <div class="title">2.家庭方面。</div>
            <div class="content"> · 家长要将幼儿在家表现出的不良饮食行为及时地反映给老师，听取教师的意见。</div>
            <div class="content"> · 通过家长委员会，将自身在幼儿饮食习惯方面的经验或是疑惑反应给幼儿园。家长还应主动地获取相关的幼儿教育知识，树立正确的幼儿教育观。</div>
            <div style="position: absolute; width: 92vw;font-size: 0.8rem; padding-top: 1rem; color: #7B7B7B;">
                <div>[1]陆燕芳.隔代教育对幼儿饮食习惯的影响和对策[J].考试周刊,2016,(16):194.
                </div>
            </div>
        </nut-tab-pane>
    </nut-tabs>
</template>
<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'

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