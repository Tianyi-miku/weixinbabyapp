<template>
    <view class="top">
        <scroll-view v-for="(item, index) in  list " :key="index" scroll-y="true" class="topItem"
            :scroll-into-view="toView" id="scrollView">
            <view :id="'element' + index">
                <div :class="item.class">
                    <div class="toux">
                        <nut-avatar style="background-color: none;" v-show="(index % 2) === 0">
                            <img :src="ico_lizi" />
                        </nut-avatar>
                        <nut-avatar style="background-color: none;" v-show="(index % 2) !== 0">
                            <img :src="ico_huluobo" />
                        </nut-avatar>
                    </div>
                    <div class="content" v-html="item.content">
                    </div>
                </div>
            </view>
        </scroll-view>
    </view>
    <div class="bot">
        <div @click="addList('挑食偏食')" class="botItem">
            <nut-avatar size="large" style="background-color: none;">
                <img :src="ico_tiaoshipianshi_nor" />
            </nut-avatar>
            <div class="title">挑食偏食</div>
        </div>
        <div @click="addList('被动进餐')" class="botItem">
            <nut-avatar size="large" style="background-color: none;">
                <img :src="ico_beidongjincan_nor" />
            </nut-avatar>
            <div class="title">被动进餐</div>
        </div>
        <div @click="addList('含饭')" class="botItem">
            <nut-avatar size="large" style="background-color: none;">
                <img :src="ico_hanfan_nor" />
            </nut-avatar>
            <div class="title">含饭</div>
        </div>
        <div @click="addList('食欲缺乏')" class="botItem">
            <nut-avatar size="large" style="background-color: none;">
                <img :src="ico_shiyuquefa_nor" />
            </nut-avatar>
            <div class="title">食欲缺乏</div>
        </div>
        <div @click="addList('进餐拖延')" class="botItem">
            <nut-avatar size="large" style="background-color: none;">
                <img :src="ico_jincantuoyan_nor" />
            </nut-avatar>
            <div class="title">进餐拖延</div>
        </div>
    </div>

</template>
<script setup>
import { reactive, ref } from 'vue';
import ico_huluobo from '../../../assets/img/ico_huluobo.png'
import ico_lizi from '../../../assets/img/ico_lizi.png'
import ico_tiaoshipianshi_nor from '../Aimgs/ico_tiaoshipianshi_nor.png'
import ico_beidongjincan_nor from '../Aimgs/ico_beidongjincan_nor.png'
import ico_hanfan_nor from '../Aimgs/ico_hanfan_nor.png'
import ico_shiyuquefa_nor from '../Aimgs/ico_shiyuquefa_nor.png'
import ico_jincantuoyan_nor from '../Aimgs/ico_jincantuoyan_nor.png'
import Taro from '@tarojs/taro'
import { useDidShow } from '@tarojs/taro'
import { documentUrl } from './../../../util/ip'
import { View, scrollView } from '@tarojs/components';

let list = reactive([])
let baby = ref(null)
let toView = ref(`demo2`)
let scrollTop = ref(null)

useDidShow(() => {
    baby.value = Taro.getStorageSync('user')
})

function addList(name) {
    list.push({
        class: 'right',
        content: name
    })
    setTimeout(() => {
        if (name === '挑食偏食') {
            list.push({
                class: 'left',
                content: `<div>  关于宝宝挑食偏食行为，我们为您提供以下解决方案～</div>
               <div> ①　家长应与孩子一起进餐，以身作则、言传身教，培养儿童健康的饮食行为。</div>
               <div> ②　对于儿童不喜欢吃的食物，可通过鼓励儿童反复尝试并及时表扬、变换烹调方式、改变食物形式或质地、食物份量以及更新盛放容器等方法加以改善。（如将蔬菜切碎，将瘦肉剁碎，将多种食物制作成包子或饺子等）</div>
               <div> ③　家庭和托幼机构为儿童制定相对固定的进餐计划，营造整洁温馨的进餐环境。</div>
                `
            })
        } else if (name === '被动进餐') {
            list.push({
                class: 'left',
                content: `<div>  由于学龄前儿童注意力不易集中，易受环境影响，如进食时玩玩具、看电视、做游戏等都会降低其对食物的关注度，影响进食和营养摄入。</div>
               <div> ①　尽可能给儿童提供固定的就餐座位，定时定量进餐； </div>
               <div> ②　避免追着喂、边吃边玩、边吃边看电视等行为；</div>
               <div> ③　让孩子自己使用筷、匙进食，养成自主进餐的习惯，既可增加儿童进食兴趣，又可培养其自信心和独立能力。</div>
                `
            })
        } else if (name === '含饭') {
            list.push({
                class: 'left',
                content: `<div> ①　提供与孩子月龄相符的食物；</div>
               <div> ②　如果孩子觉得含着白米饭很甜，在做饭时可以加入全谷物（比如藜麦、荞麦、燕麦、糙米等）。这样不仅营养更丰富，也能减慢淀粉在口腔里被消化的速度，口感没有那么甜。一般4-5份精白米搭配1份全谷物是比较合适的比例；</div>
               <div> ③　培养孩子自主进食的意识，不要用玩具逗引孩子吃饭；</div>
               <div> ④　尊重孩子的意愿，他觉得自己吃饱了就是吃饱了，不要再强迫他多吃一点。</div>
                `
            })
        } else if (name === '食欲缺乏') {
            list.push({
                class: 'left',
                content: `<div>①　发热患儿体内各种营养素的代谢增加，但因发热又影响到消化功能，在膳食安排时总热量以不低于身体所需热能的70%为佳，可根据食欲提供易消化的面食、粥等，如鸡汤挂面、馄饨、发面小花卷、肉松粥等。</div>
               <div> ②　腹泻患儿因小肠病变，影响患儿营养物质的吸收，身体发生一系列功能紊乱，此时患儿通常食欲较差，要鼓励儿童多吃几次，每次可少吃一点，可吃粥、面条和软饭，里面加些肉末、鱼末、鸡蛋、豆腐和蔬菜末，这些食物要切碎、煮透。液体可给菜汤、新鲜果汁、糖盐水。</div>
                `
            })
        } else {
            list.push({
                class: 'left',
                content: `<div> ①　控制宝宝每餐的进食时间，吃饭细嚼慢咽但不拖延，最好在30分钟内吃完；可以事先与宝宝约定好饭后20分钟才可以玩玩具、看书或看电视；</div>
               <div> ②　正确估计宝宝的食量，提供适量的食物；</div>
               <div> ③　每次吃饭前都要和宝宝说“我们要准备开始吃饭了噢”，这个交流关键是给他一个餐前准备过程，而不是一到饭点就直接把他抱上餐椅，他可能会因为在玩得高兴被你一打断就不高兴了。</div>
                `
            })

        }
    }, 1000);
    toView.value = 'demo2'
    scrollTop.value = 1000

}
function upper(e) {
    console.log('upper:', e)
}

function lower(e) {
    console.log('lower:', e)
}

function scroll(e) {
    console.log('scroll:', e)
}

</script>

<style>
.top {
    height: 70vh;
    overflow: scroll;
    background-color: #F9F9F9;
}

.bot {
    height: 30vh;
    display: flex;
    flex-wrap: wrap;
}

.title {
    text-align: center;
}

.botItem {
    width: 25%;
    text-align: center;
    height: 10vh;

}


.content {
    /* height: auto; */
    /* width: max-content; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;
    background-color: #FFFFFF;
    border-radius: 9px;
    -webkit-align-items: end;
}

.toux {
    height: auto;
    width: max-content;
    padding: 0.5rem;
}

.topItem {
    display: flex;
}

.left {
    display: flex;
    flex-direction: row;
    float: left;
    width: 85%;
    margin-top: 1rem;
    /* padding: 0.5rem; */
}

.right {
    display: flex;
    flex-direction: row-reverse;
    float: right;
    width: 100%;
    margin-top: 1rem;
    /* padding: 0.5rem; */
}
</style>