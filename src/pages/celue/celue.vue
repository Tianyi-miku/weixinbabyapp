<template>
    <nut-tabs v-model="value">
        <nut-tab-pane title="进食助手" pane-key="1">
            <div class="topjinshi">
                <img class="yumaoqiu" :src="yumaoqiu" />
                <div class="jszsba">适当的户外活动能增强食育</div>
            </div>

            <div class="title1">
                进食助手
            </div>
            <img class="btn_jinshizhushou" :src="btn_jinshizhushou" @click="gojianshizhushou" />
        </nut-tab-pane>
        <nut-tab-pane title="喂养方式" pane-key="2" class="tabs ">
            <nut-tabs v-model="value2" class="tabs" title-scroll="true" title-gutter="10" ellipsis="false" size="small">
                <nut-tab-pane title="顺应喂养" pane-key="1">
                    <div class="title">
                        顺应喂养(Responsive feeding)是指幼儿与其照顾者之间的互惠关系，其特点是孩子通过语言或非语言信号传达饥饿感和饱腹感，随后照顾者给予即时响应，让孩子逐步学会独立进食。
                    </div>
                    <div class="content">
                        <div>
                            1、研究表明父母采用顺应型喂养时，给予幼儿充分自由的食物选择权，幼儿进食较多。
                        </div>
                        <div>
                            2、作为家长，顺应幼儿的饮食天性和发展规律，温暖回应宝宝的进餐选择、进餐速度和进餐时间，高度回应幼儿，同时又没有独裁型和权威型那样高度管控、训斥、追喂。
                        </div>
                    </div>
                    <div class="bottom">
                        <div>
                            [1]Harbron J, Booley S. Responsive feeding: establishing healthy eating behaviour early on in
                            life[J]. South African Journal of Clinical Nutrition, 2013, 26: S141-S149.
                        </div>
                        <div>
                            [2]Hubbs—Tait L，Dickin K L，Sigman—Grant M，et al．RETRACTED：Relation of parenting styles，feeding
                            styles andfeeding practicesto child overweight and obesity．Direct and moderated
                            effects[J]．2013，71（12）：126—136
                        </div>
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="榜样示范" pane-key="2">
                    <img style="height: 8rem;width: 75%; margin: auto;display: flex;" :src="weiyangfangshi" />
                    <div class="content">
                        <div style=" margin: 0.5rem 0;color: #3E721D;font-size: 1rem;">· 父母榜样：</div>
                        <div>儿童对食物的接受往往模仿父母和家中的其他成年人。和只是分给孩子吃的食物相比，他们更愿意接受他们所看见成年人吃的食物。当父母亲在吃某种食物时，孩子也经常在吃这种食物。</div>
                        <div style=" margin: 0.5rem 0;color: #3E721D;font-size: 1rem;">· 同伴榜样：</div>
                        <div>儿童对食物的喜好、选择和消费的行为受同伴的影响很大。儿童的年龄越小，其饮食行为受同伴的影响越大。</div>
                    </div>
                    <div style="position: absolute; width: 92vw;font-size: 0.8rem;color: #7B7B7B;">
                        [1]马冠生.儿童少年的饮食行为及影响因素[J].中国健康教育,2005,(05):337-340.
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="控制喂养" pane-key="3">
                    <div class="title">
                        <div>控制型喂养的家长认为幼儿缺乏独立进食的能力，习惯于控制幼儿的进食活动，如催促幼儿赶快吃饭、频频给幼儿喂饭等，影响了幼儿进餐的积极性和独立性，也使幼儿养成了吃饭拖拉的习惯。</div>
                    </div>
                    <div class="content">
                        <div>已有研究表明，控制型喂养行为会对幼儿的饮食行为产生不利影响,家长对幼儿的过分呵护以及对他们饮食活动的过多控制，对幼儿的进食反应表现出过多的关注和焦虑，</div>
                        <div style="padding-top: 1rem;">
                            <div> · 导致宝宝与生俱来的饥饿性驱动进食能力;</div>
                            <div> · 影响幼儿大肌肉运动和小肌肉精细动作的发展;</div>
                            <div> · 影响幼儿进食技能的发展。</div>
                        </div>
                    </div>
                    <div style="position: absolute; width: 92vw;font-size: 0.8rem;color: #7B7B7B;">
                        [1]刘淑美,刘馨,崔淑婧.北京市城区2～3岁幼儿饮食行为与家长喂养行为的调查研究[J].幼儿教育,2012,(33):37-41.
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="限制" pane-key="4">
                    <div class="title">
                        限制性做法主要包括不买某些食物或不去快餐店等策略，过度限制孩子会影响进食及进食技能的发展。家长越是限制幼儿吃某些食物，反而越会增强幼儿对这些物的选择和注意；
                    </div>
                    <img style="height: 8rem;width: 75%; margin: auto;display: flex;" :src="weiyangfangshihb" />
                    <div class="title">
                        适度的限制
                    </div>
                    <div class="content">
                        在导致肥胖的环境中，可能需要一些父母适当的限制来调节儿童摄入美味的高热量食物。
                        <div style="padding-top: 1rem;">
                            <div> · 限制某些食物进入家庭环境的频率;</div>
                            <div> · 避免出售不健康食品的商店和餐馆;</div>
                            <div> · 并提供小但足够的份量，为儿童提供自我调节饮食行为的机会。</div>
                        </div>
                    </div>
                    <div style="position: absolute; width: 92vw;font-size: 0.8rem;color: #7B7B7B;">
                        <div> [1]刘淑美,刘馨,崔淑婧.北京市城区2～3岁幼儿饮食行为与家长喂养行为的调查研究[J].幼儿教育,2012,(33):37-41.</div>
                        <div> [2]Silvia S ,Valentina C D ,Valentina C , et al.Factors Influencing Children's Eating
                            Behaviours.[J].Nutrients,2018,10(6):706-706.</div>
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="压力" pane-key="5">
                    <div class="title">
                        向孩子施压会有什么后果呢？
                    </div>
                    <div class="content">
                        <div style="padding-top: 1rem;">
                            1、有研究调查了140名大学生，他们在童年期都曾经被父母或者老师等强迫吃过不愿意吃的食物，他们回顾说当时他们感到无助和被控制，72%的人说自己现在是不愿意吃这个被强迫吃的食物的。</div>
                        <div style="padding-top: 1rem;">2、总结了66项研究的综述发现，父母给孩子进食时施加的压力水平越高，孩子的摄入量和体重也越低，孩子挑食的程度也越高。</div>
                        <div style="padding-top: 1rem;  padding-bottom: 1rem;">
                            3、如果家长通过恐吓、体罚等方式强迫幼儿进食某些食物，就会使幼儿从心理上排斥这些食物，从而可能导致更严重的挑食行为。虽然当时孩子服从了父母的命令或建议，却有可能会让他们对那些健康食物更加厌恶，以后吃得更少，而对那些被限制的不健康食物兴趣更大了。
                        </div>
                    </div>
                    <div style="position: absolute; width: 92vw;font-size: 0.8rem;color: #7B7B7B;">
                        <div>[1]Batsell R W ,Brown S A ,Ansfield E M , et al.“You Will Eat All of That!”: A retrospective
                            analysis of forced consumption episodes[J].Appetite,2002,38(3):211-219.</div>
                        <div>[2]刘淑美,刘馨,崔淑婧.北京市城区2～3岁幼儿饮食行为与家长喂养行为的调查研究[J].幼儿教育,2012,(33):37-41.</div>
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="反复尝试" pane-key="6">
                    <div class="title">
                        食物恐新症的患病率在2~6岁时达到高峰：
                    </div>
                    <div class="content">
                        <div style="padding-top: 1rem;">
                            1、研究表明，12个月大的婴儿对未知口味的接受程度最高，随后下降，所以至少早在12~24个月前增加儿童对蔬菜和水果的接触频率，将有效提高儿童对蔬菜和水果的接受程度，这对后期健康饮食行为的形成至关重要。
                        </div>
                        <div style="padding-top: 1rem;">
                            2、来自几项实验研究的综合证据表明，儿童至少需要接触食物的味道8-10次，甚至有时需要15次以上才能增加对食物的接受度。这就需要家长们在这一阶段保持十足的耐心，不要因为孩子一次两次的拒绝就放弃新鲜口味的引入。
                        </div>
                    </div>
                    <img style="height: 8rem;width: 75%; margin: auto;display: flex;" :src="weiyangfangshihulb" />
                    <div style="position: absolute; width: 92vw;font-size: 0.8rem; padding-top: 1rem;color: #7B7B7B;">
                        <div>[1]Yue X ,Yan L ,Qiping Y , et al.Food Neophobia and its Association with Vegetable, Fruit and
                            Snack Intake Among 12- to 36-month Toddlers in China: A Cross-Sectional Study[J].Food Quality
                            and Preference,2021,(prepublish):104513-.</div>
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title=" 奖励策略" pane-key="7">
                    <div class="title">
                        代币奖励法
                    </div>
                    <div>
                        如果孩子是没有进餐规则意识，那么可以通过共同制定进餐规则以激发幼儿的进餐主动性。父母可通过代币奖励法正强化幼儿遵守进餐规则的好行为，通过累积到一定数量的小图标、小贴纸和分数等，可兑换相应的奖品，此种方法可以避免孩子对奖励物厌倦，并能持续刺激孩子。
                    </div>
                    <div class="title">
                        避免用食物奖惩
                    </div>
                    <div>
                        避免用食物奖惩孩子，以提供某类零食、糖、“垃圾类食品”等作为鼓励孩子按时、尽可能多食正餐的礼物、奖品。当儿童将这种食物作为得到另外一种食物或成全某件事情的前提条件时，作为前提条件的食物在儿童心中的兴趣已大大降低了，认为自己没有那么喜欢这个食物。
                    </div>
                    <div style="position: absolute; width: 92vw;font-size: 0.8rem; padding-top: 1rem;color: #7B7B7B;">
                        <div>[1]卓子欣.父母喂养风格对3-6岁儿童饮食行为影响的实证研究[D].塔里木大学,2021.DOI:10.27708/d.cnki.gtlmd.2021.000126.</div>
                        <div>[2]胡军, 张格祥, 肖永良. 学龄前儿童成长与膳食营养[M]. 军事医学科学出版社, 2010.</div>
                    </div>
                </nut-tab-pane>
            </nut-tabs>
        </nut-tab-pane>
        <nut-tab-pane title=" 喂养理念" pane-key="3">
            <div class="content1 paddi" @click="Taro.navigateTo({
                url: '/subPackages1/celue/kexue/kexue'
            })">
                <div>
                    <img style="height: 4.5625rem;width: 7.5625rem;" :src="chaye" />
                </div>
                <div class="contentJg">
                    <div style="font-size: 1.2rem;">健康饮食理念</div>
                    <div style="color: #3E721D;">#科学饮食#</div>
                </div>
            </div>
            <div class="content1 paddi" @click="Taro.navigateTo({
                url: '/subPackages1/celue/gedai/gedai'
            })">
                <div>
                    <img style="height: 4.5625rem;width: 7.5625rem;" :src="shou" />
                </div>
                <div class="contentJg">
                    <div style="font-size: 1.2rem;">隔代教育与幼儿饮食习惯</div>
                    <div style="color: #3E721D;">#隔代喂养#</div>
                </div>
            </div>
            <div class="content1 paddi" @click="Taro.navigateTo({
                url: '/subPackages1/celue/taidu/taidu'
            })">
                <div>
                    <img style="height: 4.5625rem;width: 7.5625rem;" :src="ren" />
                </div>
                <div class="contentJg">
                    <div style="font-size: 1.2rem;">保持喂养观念一致性</div>
                    <div style="color: #3E721D;">#喂养态度#</div>
                </div>
            </div>
            <div class="content1 paddi" @click="Taro.navigateTo({
                url: '/subPackages1/celue/celve/celve'
            })">
                <div>
                    <img style="height: 4.5625rem;width: 7.5625rem;" :src="fan" />
                </div>
                <div class="contentJg">
                    <div style="font-size: 1.2rem;">不要把孩子进餐变成一场拳击赛</div>
                    <div style="color: #3E721D;">#喂养焦虑#</div>
                </div>
            </div>
        </nut-tab-pane>
        <nut-tab-pane title="养育方式" pane-key="4" class="tabs">
            <nut-tabs v-model="value1" class="tabs">
                <nut-tab-pane title="宽容教育" pane-key="1">
                    <div class="title">
                        “耐心点，他还是个孩子”
                    </div>
                    <div class="titleHt">
                        父母教育态度与孩子性格的形成
                    </div>
                    <div class="content">
                        1、民主型:孩子性格特点常表现为大胆、独立、善于交往、协作、有分析思考能力:
                    </div>
                    <div class="content">
                        2、严厉型:孩子性格特点常表现为顽固、倔犟、缺乏自信心与自尊心。
                        对幼儿要付出爱心、耐心、真心、细心、责任心和同情心，让孩子感受到父母对自己的关爱和照顾，这能帮助幼儿克服如哭闹、胆怯、孤单等不良情绪
                    </div>
                    <div style="position: absolute; width: 92vw;font-size: 0.8rem; padding-top: 1rem;color: #7B7B7B;">
                        <div>[1]胡军, 张格祥, 肖永良. 学龄前儿童成长与膳食营养[M]. 军事医学科学出版社, 2010.</div>
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="喂养反思" pane-key="2">
                    <div class="title">
                        父母应让自己说的话更具反思性、更能体现出考虑到孩子的实际情况。
                    </div>
                    <div class="content">
                        这样将有效降低养育疲惫感，提高耐心，也会让孩子感觉到被关注，被考虑。
                    </div>
                    <div class="content">
                        · 反思其实是一很多时候并不需要和孩子分享所有东西，虽然你可能只是想表达你的关怀或关注。因为那种不一定切合实际的关怀或关注容易带来一些不必要的麻烦。
                    </div>
                    <div class="content">
                        · 亲子关系会把孩子的大脑连接起来当父母以一种反思的方式与他们连接时，孩子就可以将反思的大脑回路进行内化。
                    </div>
                    <div class="content">
                        · 反思性的方法可以让父母看到误解孩子的可能性，同时引导父母很好地处理矛盾冲突。
                    </div>
                    <div class="titleHt">
                        养育不是一项工作，而是一种关系。
                    </div>
                    <div style="position: absolute; width: 92vw;font-size: 0.8rem; padding-top: 1rem;color: #7B7B7B;">
                        <div>[1]雷吉娜·帕利. 反思的爱[M]. 戴艾芳, 译. 中国轻工业出版社, 2019.</div>
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="接纳幼儿" pane-key="3">
                    <div class="content">
                        所有的孩子都是独一无二的，所以父母调整自己的养育方式来适应孩子的具体需要。
                    </div>
                    <div class="content">
                        · 世界上没有两个完全一样的大脑，同样也没有两个完全相同的人。
                    </div>
                    <div class="content">
                        科学强调人类生活中的多样性和变异性，因此，一种养育策略不可能适用于所有的孩子。请根据孩子具体的情况来提供最适合的养育方式。父母们当然会对孩子抱有各种期望，但需要养育的是所拥有的这个孩子，而不是所期待的那个。
                    </div>
                    <div class="content">
                        反思性养育的核心理念是让父母在基本的教养原则上可以变得更灵活，可以理解接纳孩子，同时理解接纳自己作为父母的这一身份，所以无论自己是什么类型的父母，有个什么样的孩子，亦或处于何种家庭环境当中，这个方法都适用。
                    </div>
                    <div style="position: absolute; width: 92vw;font-size: 0.8rem; padding-top: 1rem;color: #7B7B7B;">
                        <div>[1]雷吉娜·帕利. 反思的爱[M]. 戴艾芳, 译. 中国轻工业出版社, 2019.</div>
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="尊重教育" pane-key="4">
                    <div class="title">
                        成人与幼儿因思维方式不同、生活经验有别、社会地位有异，而致使双方常难以相互交流和理解。要尊重幼儿的兴趣、爱好、需求。
                    </div>
                    <div class="content">
                        只有当幼儿进餐的主体性被尊重时，才能真正体会到进餐的愉悦感，才能从本质上提高进餐的积极性。重视幼儿主动发出的需求，以保护幼儿的主动性。
                    </div>
                    <div class="content">
                        当幼儿提出问题和要求时，说明他们爱动脑筋、进食个性开始萌发，我们应该给予足够的耐心和及时回应，鼓励他们多多表达自己对饮食的想法。
                    </div>
                    <div class="content">
                        并通过启发式提问，激发幼儿积极思考食物本身，并且从食物本身引申到人际交往、感恩道德教育、珍惜粮食等各个方面。
                    </div>
                    <div style="position: absolute; width: 92vw;font-size: 0.8rem; padding-top: 1rem;color: #7B7B7B;">
                        <div>[1]陈旭微.幼儿家庭进餐行为主体性影响因素分析[J].陕西学前师范学院学报,2017,33(07):75-82.</div>
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="个人压力" pane-key="5">
                    <div class="titleHt">
                        尊重幼儿在发展水平、能力、经验、学习方式等方面的个体差异，因人施教，努力使每一个幼儿都能获得满足和成功。
                    </div>
                    <div class="title">
                        困难抚育型宝宝:
                    </div>
                    <div class="content">
                        1.该型儿童在生物活动方面无规律消极情绪较多，害怕陌生人和陌生环境，情感反应强烈,适应新环境的能力很差。抚养人在对这类儿童进行营养教育时，如果用敌视的态度会强化他们原来就有的易激动的特征，有时还会挫伤他们适应环境的能力。
                    </div>
                    <div class="content">
                        · 如果父母能善待他们,就会显得活泼、敏捷。因此，首先应不急不躁，安排一个安静、舒适的环境，避免不良刺激，可通过其他方式来疏泄旺盛的精力，逐渐达到教育的目的。
                    </div>
                    <div class="title">
                        易抚育型宝宝:
                    </div>
                    <div class="content">
                        该型儿童在生物活动方面很有规律，父母很容易掌握他们的生活规律，温顺、积极情绪多、情感反应中等，对营养教育内容、方法反应积极。
                    </div>
                    <div class="title">
                        情绪反应缓慢型宝宝:
                    </div>
                    <div class="content">
                        该型儿童在生物活动方面也很有规律，相对来说不够活泼，对外界刺激反应消极或迟钝，适应新环境的速度较慢。营养教育应多注意借助于色彩、音乐来引发兴趣，用微笑、说话、逗乐、使孩子活泼起来。
                    </div>
                    <div style="position: absolute; width: 92vw;font-size: 0.8rem; padding-top: 1rem;color: #7B7B7B;">
                        <div>[1]胡军, 张格祥, 肖永良. 学龄前儿童成长与膳食营养[M]. 军事医学科学出版社, 2010.</div>
                    </div>
                </nut-tab-pane>
            </nut-tabs>
        </nut-tab-pane>
    </nut-tabs>
</template>
<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import yumaoqiu from '../../assets/img/yumaoqiu.png'
import btn_jinshizhushou from '../../assets/img/btn_jinshizhushou.png'
import weiyangfangshi from '../../assets/img/weiyangfangshi.jpg'
import weiyangfangshihb from '../../assets/img/weiyangfangshihb.jpeg'
import weiyangfangshihulb from '../../assets/img/weiyangfangshihulb.jpg'
import chaye from '../../assets/img/chaye.png'
import shou from '../../assets/img/shou.png'
import ren from '../../assets/img/ren.png'
import fan from '../../assets/img/fan.png'

const value = ref('1')
const value1 = ref('1')
const value2 = ref('1')
const content = ref(
    'NutUI3.0上线后我们研发团队也在不断的优化'
)

function gojianshizhushou() {
    Taro.navigateTo({
        url: '/subPackages/children/jinshizhushou/jinshizhushou'
    })
}

function gojiankangyinshi(params) {

}

</script>
<style>
.nut-tabs__content {
    height: 100%;
}

.nut-tabs {
    height: 100%;
    overflow-y: scroll;
}


.tabs {
    padding: 0 !important;
}

.jszs {
    padding: 1rem;
    background: #F3F3F3;
    border-radius: .5rem;
}

.jszsba {
    padding: 0.5rem;
    background: #F3F3F3;
    border-radius: .5rem;
    font-size: smaller;
}

title1 {
    font-size: 1rem;
    margin: 0.5rem 0;
}

.title {
    margin: 0.5rem 0;
    color: #3E721D;
    font-size: 1rem;
    height: max-content;
}

.titleHt {
    font-size: 1.1rem;
    color: #181818;
    margin: 0.5rem 0;
}

.bottom {
    margin: 0.5rem 0;
    font-size: 0.8rem;
    height: 14vh;
}

.content {
    margin: 1rem 0;
    /* min-height: 24vh; */
    font-size: 0.8rem;
    padding-bottom: 0.5rem;
    /* border-bottom: 1px solid #DDDDDD; */
}

.content1 {
    margin: 0.5rem 0;
    border-bottom: 1px solid #DDDDDD;
    display: flex;
    background-color: #F9F9F9;
    padding: 1rem;
    border-radius: 8px 8px 0px 0px;
}

.contentJg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    padding-left: 2rem;
}

.paddi {
    margin-top: 1rem;
}

.yumaoqiu {
    height: 8rem;
    width: 100%;
}

.btn_jinshizhushou {
    width: 100%;
    height: 11rem;
}

.topjinshi {
    width: 100%;
    height: 10.125rem;
    background: #F3F3F3;
    border-radius: .5rem .5rem .5rem .5rem;
}
</style>