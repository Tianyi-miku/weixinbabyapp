<template>
    <nut-tabs v-model="value" class="tabsBody" auto-height="true">
        <nut-tab-pane title="饮食知识" pane-key="1">
            <div class="title1">
                <img class=" btn_jinshizhushou" :src="btn_shiwuzhishi"
                    @click="Taro.navigateTo({ url: '/subPackages/children/shiwuzhishi/shiwuzhishi' })" />
            </div>
            <div class="title1">
                膳食周记
            </div>
            <nut-cell @click="show = true"> {{ dayjs(riqix[0]).format('YYYY-MM-DD')
                }} - {{ dayjs(riqix?.[1])?.format('YYYY-MM-DD') }}</nut-cell>


            <div class="content1">
                <div class="topRiqi">
                    <div v-for=" item  in  weeks " :key="item" class="item">
                        {{ dayjs(item).date() }}
                    </div>
                </div>
                <div class="topList">
                    <div class="item"
                        @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[0]}` })">
                        周一
                    </div>
                    <div class="item"
                        @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[1]}` })">
                        周二
                    </div>
                    <div class="item"
                        @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[2]}` })">
                        周三
                    </div>
                    <div class="item"
                        @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[3]}` })">
                        周四
                    </div>
                    <div class="item"
                        @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[4]}` })">
                        周五
                    </div>
                    <div class="item"
                        @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[5]}` })">
                        周六
                    </div>
                    <div class="item"
                        @click="Taro.navigateTo({ url: `/subPackages/children/caidan/caidan?date=${weeks[6]}` })">
                        周日
                    </div>
                </div>
                <div class="bottomlist">
                    <div class="item" v-for="( item, index ) in  weeksList " :key="index">
                        <div v-for="( e, index ) in  item " :key="index" style="font-size: 0.7rem;">
                            <div class="itemType" v-if="index === 0"> {{ swithItype(e.type) }}</div>
                            <div class="itemCaidan" v-for="(element, i) in e" :key="i"> {{ element.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </nut-tab-pane>
        <nut-tab-pane title="饮食环境" pane-key="2" class="tabs" v-if="isShowWz">
            <nut-tabs v-model="value1" class="tabs" auto-height="true">
                <nut-tab-pane title="进餐环境" pane-key="1">
                    <div class="title">1、膳食安排：</div>
                    <div class="content">
                        · 与家人共进3顿主餐，2-3次营养丰富的辅餐(水果、牛奶、面包、饼干或自制小点心等)。
                    </div>
                    <div class="content">
                        · 进餐时间应在20—25 min／次，定时就餐，儿童食量可波动，不强求定量。
                    </div>
                    <div class="title">
                        2、幼儿与家人同食。
                    </div>
                    <div class="content">
                        · 可让儿童坐在儿童餐椅就餐，便于与家人互动交流。
                    </div>
                    <div class="content">
                        · 避免进食时看电视或玩玩具等，更不可追喂进食。
                    </div>
                    <div class="title">
                        3、营造进餐环境。
                    </div>
                    <div class="content">
                        一个有温馨的进餐环境，不一定需要大量投入金钱，但它确实离不开花费大量的心思和干净整洁的元素。
                    </div>
                    <div class="content">】
                        · 家里的幼儿喜欢粉色，可以把餐桌布置成粉色系。浅粉的墙壁，粉色的餐桌，粉色的灯光，甚至连餐具也是粉色图案。
                    </div>
                    <div class="content">
                        · 幼儿不喜欢吃青菜，可以将青菜进行摆盘，利用幼儿喜欢的卡通动画形象吸引幼儿进食。同时，还要保持饮食环境干净整洁，避免干扰幼儿，分散幼儿进食注意力。
                    </div>
                    <div style="width: 92vw;font-size: 0.8rem; padding-top: 1rem; color: #7B7B7B;">
                        <div>[1]卓子欣.父母喂养风格对3-6岁儿童饮食行为影响的实证研究[D].塔里木大学,2021.DOI:10.27708/d.cnki.gtlmd.2021.000126.
                        </div>
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="餐桌礼仪" pane-key="2">
                    <div class="title">
                        1、在用餐礼仪教育中，教师要教给幼儿文明用餐的 礼仪知识。主要包括以下方面：
                    </div>
                    <div class="content">
                        · 在餐桌上就餐，要等大家都到齐后再一起进餐；
                    </div>
                    <div class="content">
                        · 用拇指、食指、中指协调地拿筷子或握勺子；
                    </div>
                    <div class="content">
                        · 饭菜在嘴里嚼动时，尽量闭上嘴，不发出声音往口中送饭菜时要适量，做到细嚼慢咽，不要狼吞虎咽；；
                    </div>
                    <div class="content">
                        · 吃剩的食物留在自己的盘子里或者桌子上，不要再放回去；
                    </div>
                    <div class="content">
                        · 如果手脏了，请用餐巾纸去擦，不要抹在衣服或者桌子上；
                    </div>
                    <div class="content">
                        · 双手端起餐盘送到指定地方；
                    </div>
                    <div class="content">
                        · 去盥洗室漱口、洗手、整理衣物等。
                    </div>
                    <div class="title">
                        2、家长带幼儿参加宴会或聚餐时，要注意以下礼仪：
                    </div>
                    <div class="content">
                        · 在餐桌上点菜时，家长要告诉幼儿应该让年长的先点，然后自己再点；
                    </div>
                    <div class="content">
                        · 有人为自己倒茶水、换餐具时，自己应该说声 “谢谢”；
                    </div>
                    <div class="content">
                        · 自己不要在餐桌上大声吵闹，不要随意离座，不能和他人“抢”食物等。
                    </div>
                    <div style="width: 92vw;font-size: 0.8rem; padding-top: 1rem; color: #7B7B7B;">
                        <div>[1]茅春艳.餐桌上的礼仪教育[J].好家长,2022,(37):49.
                        </div>
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="饮食卫安" pane-key="3">
                    <div class="content">1、每次用餐后，厨房台面应用消毒剂彻底清洁。</div>
                    <div class="content">2、身体不适的人不为别人准备食物。</div>
                    <div class="content">3、用防水敷料包扎伤口。</div>
                    <div class="content">4、洗碗布应每天用沸水清洗。</div>
                    <div class="content">5、在准备食物之前、在处理生的和熟的食物之间、在帮助孩子吃饭之前、在给孩子上厕所、换尿布或擤鼻涕之后，都应用肥皂水洗手。</div>
                    <div class="content">6、宝宝本身应掌握基本的卫生知识，例如，不要吃掉在地上的食物，饭前和如厕后要用肥皂水洗手。</div>
                    <div class="content">7、未吃完的食物应从餐桌上拿掉并处理。奶瓶里一小时后残留的牛奶应该扔掉。</div>
                    <div class="content">8、不要让儿童或婴儿独自吃饭，以免他们窒息。</div>
                    <div class="content">9、儿童坐在高脚椅上时必须有人监督，高脚椅必须有安全带。</div>
                    <div style="width: 92vw;font-size: 0.8rem; padding-top: 1rem; color: #7B7B7B;">
                        <div>[1]Food and Nutrition Guidelines for Pre-School Services[R/OL]. (2004-03-21)[2024-06-30].
                            https://www.gov.ie/en/publication/0252ea-food-and-nutrition-guidelines-for-pre-school-services/.
                        </div>
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="进餐氛围" pane-key="4">
                    <div class="title">1、营造充满爱意的进餐氛围。</div>
                    <div class="content">
                        · 幼儿渴望着一个爱意洋溢、充满欢声笑语的家庭进餐环境。
                    </div>
                    <div class="content">
                        · 当幼儿出现如恐惧、害怕、孤单、紧张和进食的情绪时，及时安抚幼儿的情绪，减轻幼儿的焦虑和不安，平复幼儿的情绪。
                    </div>
                    <div class="content">
                        · 同时，做孩子的保护伞，真正担当起父母的角色，使他们获得安全感，充分体验家庭的温暖。
                    </div>
                    <div class="content">
                        一个充满爱的美好的进餐氛围，会帮助孩子驾驭自己的不良情绪。它可以源自良好的亲子关系，用心准备的食材，宽松轻松的家庭文化等。用爱包围孩子，让他们让在快乐中进餐，在快乐中成长。
                    </div>
                    <div class="title">2、家人围坐就餐</div>
                    <div class="content">是儿童学习自主进食的最佳方式，应为儿童提供轻松、愉悦的良好进餐环境和气氛。</div>
                    <div class="content"> · 避免嘈杂的进餐环境。</div>
                    <div class="content"> · 避免进餐时恐吓、训斥和打骂儿童。</div>
                    <div style="width: 92vw;font-size: 0.8rem; padding-top: 1rem; color: #7B7B7B;">
                        <div>[1]卓子欣.父母喂养风格对3-6岁儿童饮食行为影响的实证研究[D].塔里木大学,2021.DOI:10.27708/d.cnki.gtlmd.2021.000126.
                        </div>
                        <div>[2]儿童喂养与营养指导技术规范[R/OL]. (2014-12-31)[2024-06-30].
                            https://www.chinanutri.cn/fgbz/fgbzfggf/201412/t20141231_109122.html.
                        </div>
                    </div>
                </nut-tab-pane>
                <nut-tab-pane title="进餐情绪" pane-key="5">
                    <div class="content">《幼儿园教育指导纲要》的健康领域重视幼儿在进食时情绪安定愉悦。若忽略进食情绪，餐桌教育盛行，带来儿童对进餐的抵触甚至厌烦。</div>
                    <div class="title">
                        影响:
                    </div>
                    <div class="content">1、进食情绪影响食欲，影响营养素吸收率、利用率，也会影响人体免疫力。</div>
                    <div class="content">2、进餐时借机教育，常常事倍功半。</div>
                    <div style="width: 92vw;font-size: 0.8rem; padding-top: 1rem; color: #7B7B7B;">
                        <div>[1]中华人民共和国教育部. 幼儿园教育指导纲要[EB/OL]. [2024-06-30].
                            https://www.gov.cn/gongbao/content/2002/content_61459.htm.
                        </div>
                        <div>[2]胡军, 张格祥, 肖永良. 学龄前儿童成长与膳食营养[M]. 军事医学科学出版社, 2010.
                        </div>
                    </div>
                </nut-tab-pane>
            </nut-tabs>
        </nut-tab-pane>
    </nut-tabs>
    <nut-popup v-model:visible="show" position="bottom">
        <nut-calendar-card v-model="riqix" type="week" firstDayOfWeek="1" @change="onChange"></nut-calendar-card>
        <nut-button block type="primary" @click="() => { show = false, getList(weeks[0]) }">确认</nut-button>
    </nut-popup>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import dayjs from 'dayjs';
import { useDidShow } from '@tarojs/taro'
import Axios from '../../util/axios';
import btn_shiwuzhishi from '../../assets/img/btn_shiwuzhishi.png'
import { isShowWz } from "../../util/ip"


const value = ref('1')
const value1 = ref('1')
const show = ref(false)

const riqix = ref([])

let weeks = ref([])
let weeksList = ref([])


function swithItype(value) {
    if (!value) {
        return '早餐'
    } else if (value == 1) {
        return '点心'
    } else if (value == 2) {
        return '午餐'
    }
    else if (value == 3) {
        return '点心'
    } else if (value == 4) {
        return '晚餐'
    }
}

const onChange = (val) => {
    riqix.value = val
    weeks.value = getCurrentWeekDates(val[0])
}

useDidShow(() => {
    weeks.value = getCurrentWeekDates()
    riqix.value = [dayjs(weeks.value[0]).toDate(), dayjs(weeks.value[6]).toDate()]
    getList(weeks.value[0])
})

function getList(day) {
    let babyId = Taro.getStorageSync('user')?.id
    Axios.get(`/meal/week?babyId=${babyId}&startDate=${day}`).then(res => {

        const groupedByType = res.reduce((acc, item) => {
            if (!acc[item.type]) {
                acc[item.type] = [];
            }
            acc[item.type].push(item);
            return acc;
        }, {});
        const groupedArrays = Object.values(groupedByType);
        weeksList.value = groupedArrays
    })
}


function getCurrentWeekDates(value) {
    // 获取当前日期 
    let today
    if (value) {
        today = dayjs(value);
    } else {
        today = dayjs();
    }
    // 计算本周的周一的日期（如果今天是周日，则周一是今天加1天；如果今天是周一，则就是今天）  
    const startOfWeek = today.subtract(today.day() ? today.day() - 1 : 6, 'day');
    // 创建一个数组来存储本周的日期（从周一开始）  
    const weekDates = [];
    // 循环生成从周一到周日的日期  
    for (let i = 0; i < 7; i++) {
        // 使用 add 方法获取本周的某一天  
        const date = startOfWeek.add(i, 'day');
        // 将日期添加到数组中  
        weekDates.push(date.format('YYYY-MM-DD'));
    }
    return weekDates;
}
</script>

<style>
.tabsBody {
    height: 100vh;
}

.tabs {
    padding: 0 !important;
}

.title1 {
    margin-bottom: 0.5rem;
}

.content1 {
    min-height: 10rem;
    /* background-color: rgb(163, 163, 163); */
    border-radius: 8px;
}

.topList {
    width: 100%;
    display: flex;
}

.bottomlist {
    width: 100%;
    display: flex;
}

.item {
    width: 14%;
    text-align: center;
}

.topRiqi {
    display: flex;
    flex-wrap: wrap;
}

.btn_jinshizhushou {
    width: 100%;
    height: 9rem;
}

.title {
    margin: 0.5rem 0;
    color: #3E721D;
    font-size: 1rem;
    height: max-content;
}

.content {
    padding-top: 0.5rem;
    color: #7B7B7B;
}

.nut-tabs {
    overflow-y: scroll;
    height: 100%;
}

.itemType {
    background-color: #8CC269;
    border-radius: 8px;
    color: #ffffff;
}

.itemCaidan {
    background-color: #f1f1f1;
}
</style>