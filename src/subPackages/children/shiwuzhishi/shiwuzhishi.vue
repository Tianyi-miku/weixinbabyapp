<template>
  <div style="padding-left: 1rem;" v-if="isShowWz">
    <div class="title1">饮食知识</div>

    <div class="title ">膳食计划 </div>
    <div class="content" >
      <div class="titleHt" v-for="(item, itemIndex) in yszs[0].list" :key="itemIndex" 
      @click="Taro.navigateTo({
      url: item.url
    })">{{ item.mz }}</div>
    </div>

    <div class="title ">食物选择 </div>
    <div class="content" >
      <div class="titleHt" v-for="(item, itemIndex) in yszs[1].list" :key="itemIndex"
      @click="Taro.navigateTo({
      url: item.url
    })">{{ item.mz }}</div>
    </div>

    <div class="title ">食物制备</div>
    <div class="content" >
      <div class="titleHt" v-for="(item, itemIndex) in yszs[2].list" :key="itemIndex"
      @click="Taro.navigateTo({
      url: item.url
    })">{{ item.mz }}</div>
    </div>

    <div class="title1">饮食环境 </div>

    <div class="title2 ">进餐环境 </div>
    <div class="content" >
      <div class="titleHt" v-for="(item, itemIndex) in yshj[0].list" :key="itemIndex"
      @click="Taro.navigateTo({
      url: item.url
    })">{{ item.mz }}</div>
    </div>

    <div class="title2 ">进餐氛围</div>
    <div class="content" >
      <div class="titleHt" v-for="(item, itemIndex) in yshj[1].list" :key="itemIndex"
      @click="Taro.navigateTo({
      url: item.url
    })">{{ item.mz }}</div>
    </div>

    <div class="title2 ">餐桌礼仪</div>
    <div class="content" >
      <div class="titleHt" v-for="(item, itemIndex) in yshj[2].list" :key="itemIndex"
      @click="Taro.navigateTo({
      url: item.url
    })">{{ item.mz }}</div>
    </div>

    <div class="title2 ">饮食卫安 </div>
    <div class="content" >
      <div class="titleHt" v-for="(item, itemIndex) in yshj[3].list" :key="itemIndex"
      @click="Taro.navigateTo({
      url: item.url
    })"
      >{{ item.mz }}</div>
    </div>

    <div class="title2 ">进食情绪 </div>
    <div class="content" >
      <div class="titleHt" v-for="(item, itemIndex) in yshj[4].list" :key="itemIndex"
      @click="Taro.navigateTo({
      url: item.url
    })">{{ item.mz }}</div>
    </div>
  </div>
  <div v-else>
    知识
  </div>

</template>
<script setup>
import { ref } from 'vue'
import { isShowWz } from "../../../util/ip"
import Taro from '@tarojs/taro'
import { useDidShow } from '@tarojs/taro'
import { documentUrl } from '../../../util/ip'
import Axios from '../../../util/axios'

const yszs = ref([
  {
    name: '饮食知识',
    list: [
      {mz:"食谱编制",url:"/subPackages/swzs/swzs1/swzs1"},
      {mz:"食物轮替",url:"/subPackages/swzs/swzs2/swzs2"},
      {mz:"膳食搭配",url:"/subPackages/swzs/swzs3/swzs3"},
      {mz:"幼儿营养",url:"/subPackages/swzs/swzs4/swzs4"},
      {mz:"饮食结构",url:"/subPackages/swzs/swzs5/swzs5"},
    ]
  },

  {
    name: "食物选择",
    list: [
      {mz:"食品采购",url:"/subPackages/swzs/swzs6/swzs6"},
      {mz:"零食选择",url:"/subPackages/swzs/swzs7/swzs7"},
      {mz:"食品标签",url:"/subPackages/swzs/swzs8/swzs8"},
      {mz:"食品安全",url:"/subPackages/swzs/swzs9/swzs9"},
    ]
  },
  {
    name: '饮食制备',
    list: [
      {mz:"食物感知",url:"/subPackages/swzs/swzs10/swzs5"},
      {mz:"食材处理",url:"/subPackages/swzs/swzs11/swzs5"},
      {mz:"烹饪方法",url:"/subPackages/swzs/swzs12/swzs5"},
      {mz:"食物安全温度",url:"/subPackages/swzs/swzs13/swzs5"},
    ]
  },
])

const yshj = ref([
  {
    name: '进餐环境',
    list: [
      {mz:"膳食制度",url:"/subPackages/swzs/swzs14/swzs5"},
      {mz:"固定就餐位置",url:"/subPackages/swzs/swzs15/swzs5"},
      {mz:"进餐节奏",url:"/subPackages/swzs/swzs16/swzs5"},
      {mz:"无电子设备",url:"/subPackages/swzs/swzs17/swzs5"},
    ]
  },
  {
    name: "进餐氛围",
    list: [
      {mz:"避免分心",url:"/subPackages/swzs/swzs18/swzs5"},
      {mz:"共餐氛围",url:"/subPackages/swzs/swzs19/swzs5"},
    ]
  },
  {
    name: "餐桌礼仪",
    list: [
      {mz:"用餐礼仪",url:"/subPackages/swzs/swzs20/swzs5"},
      {mz:"中餐礼仪",url:"/subPackages/swzs/swzs21/swzs5"},
      {mz:"节约意识",url:"/subPackages/swzs/swzs22/swzs5"},
      {mz:"感恩教育",url:"/subPackages/swzs/swzs23/swzs5"},
    ]
  },
  {
    name: "饮食卫安",
    list: [
      {mz:"进食安全",url:"/subPackages/swzs/swzs24/swzs5"},
      {mz:"食物安全",url:"/subPackages/swzs/swzs25/swzs5"},
      {mz:"过敏预防",url:"/subPackages/swzs/swzs26/swzs5"},
      {mz:"卫生意识",url:"/subPackages/swzs/swzs27/swzs5"},
      {mz:"环境卫生",url:"/subPackages/swzs/swzs28/swzs5"},
    ]
  },
  {
    name: "进食情绪",
    list: [
      {mz:"正念饮食",url:"/subPackages/swzs/swzs29/swzs5"},
      {mz:"餐前过渡",url:"/subPackages/swzs/swzs30/swzs5"},
    ]
  },
])


</script>

<style>
.title1 {
  font-weight: bold;
  font-size: 1.2rem;
}

.title {
  margin-top: 0.6rem;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1rem
}

.title::before {
  content: '';
  display: inline-block;
  background-color: rgba(23, 148, 7, 0.57);
  width: 0.3rem;
  height: 1rem;
  margin-right: 0.2rem;
  vertical-align: middle;
}

.title2::before {
  content: '';
  display: inline-block;
  background-color: rgba(233, 135, 7, 0.72);
  width: 0.3rem;
  height: 1rem;
  margin-right: 0.2rem;
  vertical-align: middle;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 95%;

}

.titleHt {
  font-size: 1rem;
  color: rgb(0, 0, 0);
  background-color: rgba(231, 228, 228, 0.9);
  width: 10.5rem;
  height: 1.8rem;
  line-height: 1.8rem;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 5px;
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