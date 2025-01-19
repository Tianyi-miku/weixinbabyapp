<template>
  <nut-tabs v-model="value" auto-height="true" v-if="isShowWz">
    <nut-tab-pane title="膳食教育" pane-key="1">
      <div>
        <div class="biaoti">基础知识</div>
        <div>
          <img :src="shanshijichu" style="height: 7rem;width: 100%;"
            @click=" Taro.navigateTo({ url: '/subPackages1/pages/shiyu/shanshijiaoyu/shanshijiaoyu', })" />

        </div>
        <div class="biaoti">相关推荐</div>
        <div style=" display: flex; flex-wrap: wrap; justify-content:space-between">
          <div class="divImg" @click=" Taro.navigateTo({ url: '/subPackages/ssjy/jkys/jkys', })"><img :src=jkys
              class="img1"></div>
          <div class="divImg" @click=" Taro.navigateTo({ url: '/subPackages/ssjy/yyjy/yyjy', })"><img :src=yyjy
              class="img1"></div>
          <div class="divImg" @click=" Taro.navigateTo({ url: '/subPackages/ssjy/syhd/syhd', })"><img :src=sshd
              class="img1"></div>
          <div class="divImg" @click=" Taro.navigateTo({ url: '/subPackages/ssjy/hbgs/hbgs', })"><img :src=hbgs
              class="img1"></div>
          <div class="divImg" @click=" Taro.navigateTo({ url: '/subPackages/ssjy/rssw/rssw', })"><img :src=rssw
              class="img1"></div>
          <div class="divImg" @click=" Taro.navigateTo({ url: '/subPackages/ssjy/yxjy/yxjy', })"><img :src=yxjy
              class="img1"></div>
        </div>
      </div>
    </nut-tab-pane>


    <nut-tab-pane title="自主进食" pane-key="2">
      <div>
        <div class="biaoti">基础知识</div>

        <div style="display: flex; justify-content: space-around; ;border-bottom: 1px solid darkgray;"
          @click=" Taro.navigateTo({ url: '/subPackages1/pages/shiyu/zizhujinshi/zizhujinshi', })">
          <div>
            <span class="fubiaoti">如何培养孩子自主进食</span>
            <span style=" font-size: 0.7rem;color: darkgray;">科学育儿都说应该培养自主进食，</span>
            <span style=" font-size: 0.7rem;color: darkgray;">但真要实践起来，宝宝不配合，家</span>
            <span style=" font-size: 0.7rem;color: darkgray;">里一团糟，吃得还不如喂得快。 </span>
            <span style=" font-size: 0.7rem;color: white;"> ...</span>
            <span style=" font-size: 0.7rem;color: darkgray;">这个时候，还要坚持下去吗？</span>
          </div>
          <div><img :src="wa" style="height: 6rem;width: 10rem;" /></div>

        </div>


        <div class="biaoti">相关推荐</div>
        <div style=" display: flex; flex-wrap: wrap;justify-content: space-between; ">
          <div class="divImg" @click=" Taro.navigateTo({ url: '/subPackages/zzjs/zzjs1/zzjs1' })"><img :src=zzjs5
              class="img2">
            <span style="margin-left: 0.5rem;">餐具选择与使用</span>
          </div>
          <div class="divImg" @click=" Taro.navigateTo({ url: '/subPackages/zzjs/zzjs2/zzjs2' })"><img :src=zzjs6
              class="img2">
            <span style="margin-left: 0.5rem;">自我喂食？辅助喂食？</span>
          </div>
          <div class="divImg" @click=" Taro.navigateTo({ url: '/subPackages/zzjs/zzjs3/zzjs3' })"><img :src=zzjs7
              class="img2">
            <span style="margin-left: 0.5rem;">精细动作锻炼？</span>
          </div>
          <div class="divImg" @click=" Taro.navigateTo({ url: '/subPackages/zzjs/zzjs4/zzjs4' })"><img :src=zzjs8
              class="img2">
            <span style="margin-left: 0.4rem;">幼儿园常用进餐规划</span>
          </div>
        </div>
      </div>
    </nut-tab-pane>
  </nut-tabs>
  <div v-else> <nut-table :columns="columns" :data="data">
    </nut-table></div>
</template>
<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import wa from '../../assets/img/wa.jpg'
import { isShowWz } from "../../util/ip"
import { documentUrl } from '../../util/ip'
const shanshijichu = ref(documentUrl + '/shanshijichu.png')

const jkys = ref(documentUrl + '/jkys.png')
const yyjy = ref(documentUrl + '/yyjy.png')
const sshd = ref(documentUrl + '/sshd.png')
const hbgs = ref(documentUrl + '/hbgs.png')
const rssw = ref(documentUrl + '/rssw.png')
const yxjy = ref(documentUrl + '/yxjy.png')

const zzjs5 = ref(documentUrl + '/zzjs5.png')
const zzjs6 = ref(documentUrl + '/zzjs6.png')
const zzjs7 = ref(documentUrl + '/zzjs7.png')
const zzjs8 = ref(documentUrl + '/zzjs8.png')


const value = ref('1')
const columns = ref([
  {
    title: '个人',
    key: 'name'
  },
  {
    title: '共同',
    key: 'sex'
  },
  {
    title: '备注',
    key: 'record'
  }
])
const data = ref([
  {
    name: '食欲',
    sex: '小美',
    record: '早上'
  },
  {
    name: '食物',
    sex: '小爱',
    record: '三次'
  },
])

</script>
<style>
.divImg {
  width: 50%;
}

.biaoti {
  font-weight: bold;
  margin-top: 20px;
  color: #0c0c0c;
  margin-bottom: 10px;
}

.fubiaoti {
  font-weight: bold;
  size: 1rem;
}

.img1 {
  width: 95%;
  padding: 2.5%;
  height: 8rem;
}

.img2 {
  width: 95%;
  padding: 2.5%;
  height: 8rem;
}

.img3 {
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  width: 10rem;
  height: 10rem;
  border-radius: 5px;
}
</style>