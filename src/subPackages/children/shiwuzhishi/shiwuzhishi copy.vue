<template>
<div class="demo-list">
    <nut-list :list-data="data" :container-height="470" @scroll-bottom="onScrollBottom">
      <template #default="{ index }">
        <div class="list-item">
          {{ index }}
        </div>
      </template>
    </nut-list>
  </div>

            <nut-tabs v-model="value1" class="tabs" auto-height="true">
                <nut-tab-pane title="进餐环境" pane-key="1">
                    
                </nut-tab-pane>
                <nut-tab-pane title="餐桌礼仪" pane-key="2">

                </nut-tab-pane>
                <nut-tab-pane title="饮食卫安" pane-key="3">

                </nut-tab-pane>
                <nut-tab-pane title="进餐氛围" pane-key="4">
 
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



    <nut-tabs class="tabs" v-model="value" title-scroll="true" title-gutter="10" ellipsis="false" size="small"
        auto-height="true" v-if="isShowWz">
        <nut-tab-pane title="营养知识" pane-key="1">

        </nut-tab-pane>
        <nut-tab-pane title="食物制备" pane-key="2">
   
        </nut-tab-pane>
        <nut-tab-pane title="食物选择" pane-key="3">

        </nut-tab-pane>
    </nut-tabs>
    <div v-else>
        <nut-table :columns="columns" :data="data">
        </nut-table>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { isShowWz } from "../../../util/ip"
import { List } from '@nutui/nutui-taro'



const value = ref('1')
const columns = ref([
  {
    title: '时间',
    key: 'name'
  },
  {
    title: '状态',
    key: 'sex'
  },
  {
    title: '备注',
    key: 'record'
  }
])
const data = ref([
  {
    name: '早餐',
    sex: '吃好',
    record: '无'
  },
  {
    name: '午餐',
    sex: '吃饱',
    record: '无'
  },
  {
    name: '晚餐',
    sex: '八分',
    record: '无'
  }
])
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