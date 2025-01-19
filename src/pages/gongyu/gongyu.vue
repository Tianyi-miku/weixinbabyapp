<template>
  <div class="gongyu">
    <nut-tabs v-model="value" auto-height="true" v-if="isShowWz">
      <nut-tab-pane title="家园共育" pane-key="1">

        <div style="display: flex; justify-content:flex-end; height: 3.5rem">
          <div style="display: flex; flex-direction:column; justify-content:center;margin: .5rem;"
            @click="Taro.navigateTo({ url: '/subPackages1/pages/gongyu/shequfatie/shequaftie' })">
            <img style="width: 1.4rem;height: 1.4rem;align-self: center; " :src="Slice9" />
            <div style="font-size: .7rem;">发帖</div>
          </div>
          <div style="display: flex; flex-direction:column; justify-content:center;margin: .5rem;">
            <img style="width: 1.4rem;height: 1.4rem;align-self: center; " :src="xinfeng" />
            <div style="font-size: .7rem;">消息</div>
          </div>
        </div>
        <img :src="ryzb" style="height: 7rem;width: 96%;margin-left: 2%;"
          @click=" Taro.navigateTo({ url: '/subPackages/ryzb/clff' })" />
        <div class="neirong1">
          <div class="demo-list">
            <div v-for="(item, index) in data1" :key="index">
              <div class="list-item">
                <div class="list-item-msg"
                  @click="Taro.navigateTo({ url: `/subPackages1/pages/dongtai/dongtai?id=${item.id}` })"> {{ item.msg }}
                </div>
                <img class="list-item-img" v-if="item.images" :src="documentUrl + item.images"
                  @click="Taro.navigateTo({ url: `/subPackages1/pages/dongtai/dongtai?id=${item.id}` })" />
                <div class="bottomList">
                  <div class="leftIcon">
                    <div class="touxiang"> <nut-avatar size="small">
                        <img :src="item.babyUrl" />
                        <!-- <img :src="documentUrl + item.babyUrl" /> -->
                      </nut-avatar></div>
                    <div class="name">{{ item.babyName }}</div>
                    <div class="riqi">{{ dayjs(item.updateTime)?.format('YYYY-MM-DD') }}</div>
                  </div>
                  <div class="rightIcon">
                    <div class="Comment"
                      @click="Taro.navigateTo({ url: `/subPackages1/pages/dongtai/dongtai?id=${item.id}` })">
                      <Comment></Comment>
                      {{ item.commentCount }}
                    </div>
                    <div class="SFollow" @click="likeIt(item.id, item.like)">
                      <template v-if="item.like">
                        <HeartFill color="red"></HeartFill>
                      </template>
                      <template v-else>
                        <SFollow></SFollow>
                      </template>
                      {{ item.likeCount }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="index === data1.length">
                <img :src="Slice7" style="height: 4rem;width: 4rem;margin-left: 80%;"
                  @click=" Taro.navigateTo({ url: '/subPackages1/pages/gongyu/shequfatie/shequaftie' })" />
              </div>
            </div>
          </div>
        </div>
      </nut-tab-pane>

      <nut-tab-pane title="喂养关系" pane-key="2" style="padding:0;">
        <div class="content" @click=" Taro.navigateTo({ url: '/subPackages1/pages/gongyu/qinziguanxi/qinziguanxi', })">
          <div>
            <span class="biaoti">为什么亲子关系对宝宝的</span>
            <span class="biaoti">饮食很重要</span>
            <span class="jiaobiao1">相关喂养</span>
          </div>
          <div><img :src="qzgx" style="height: 6rem;width: 10rem;" /></div>
        </div>

        <div class="content"
          @click=" Taro.navigateTo({ url: '/subPackages1/pages/gongyu/jiayuangongyu/jiayuangongyu', })">
          <div>
            <span class="biaoti">如何培养良好的亲子关系</span>
            <span class="jiaobiao">相关喂养</span>
          </div>
          <div><img :src="qzgx1" style="height: 6rem;width: 10rem;" /></div>
        </div>

        <div class="content" @click=" Taro.navigateTo({ url: '/subPackages1/pages/gongyu/qzyd/qzyd', })">
          <div>
            <span class="biaoti">2-3岁宝宝亲子阅读技巧</span>
            <span class="jiaobiao">相关喂养</span>
          </div>
          <div><img :src="qzgx2" style="height: 6rem;width: 10rem;" /></div>
        </div>

        <div class="content" @click=" Taro.navigateTo({ url: '/subPackages1/pages/gongyu/zzyd/zzyd', })">
          <div>
            <span class="biaoti">亲子共读到自主阅读</span>
            <span class="jiaobiao">相关喂养</span>
          </div>
          <div><img :src="qzgx3" style="height: 6rem;width: 10rem;" /></div>
        </div>

      </nut-tab-pane>

    </nut-tabs>
    <div v-else>
      <nut-table :columns="columns" :data="data">
      </nut-table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Taro from '@tarojs/taro'
import { isShowWz } from "../../util/ip"
import { useDidShow } from '@tarojs/taro'
import { documentUrl } from '../../util/ip'
import Axios from '../../util/axios'
import Slice9 from '../../assets/img/Slice9.png'
import xinfeng from '../../assets/img/xinfeng.png'
import Slice7 from '../../assets/img/Slice7.png'
import { List } from '@nutui/nutui-taro'
import dayjs from 'dayjs'
import { Comment, SFollow, HeartFill } from '@nutui/icons-vue-taro'

const data1 = ref([])
const pageNum = ref(0)
const total = ref(0)
const pageSize = 10




useDidShow(() => {
  getList()
})

function getList() {
  let babyId = Taro.getStorageSync('user')?.id
  Axios.get(`/blog/list/${babyId}`).then(res => {
    data1.value = res
  })
}

function likeIt(id, islike) {
  let babyId = Taro.getStorageSync('user')?.id
  if (islike) {
    Axios.post('/blog/like/remove', { blogId: id, babyId: babyId }).then(res => {
      Taro.showToast({
        title: '取消成功',
        icon: 'success',
        duration: 1000
      })
      const ele = data1.value.find(item => item.id === id)
      ele.likeCount = ele.likeCount - 1
      ele.like = false
    })
  } else {
    Axios.post('/blog/like/add', { blogId: id, babyId: babyId }).then(res => {
      if (res) {
        Taro.showToast({
          title: '点赞成功',
          icon: 'success',
          duration: 1000
        })
        const ele = data1.value.find(item => item.id === id)
        ele.likeCount = ele.likeCount + 1
        ele.like = true
      }
    })
  }
}


const qzgx = ref(documentUrl + '/qzgx.png')
const qzgx1 = ref(documentUrl + '/qzgx1.png')
const qzgx2 = ref(documentUrl + '/qzgx2.png')
const qzgx3 = ref(documentUrl + '/qzgx3.png')
const ryzb = ref(documentUrl + '/ryzb.png')

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
    name: '个人养育',
    sex: '小美',
    record: '单人'
  },
  {
    name: '家庭养育',
    sex: '小爱',
    record: '多人'
  },
  {
    name: '他人养育',
    sex: '小红',
    record: '无'
  }
])
</script>
<style>
.nut-tabs {
  height: 100%;
}

.gongyu {
  height: 100%;
  overflow: hidden;
}

.demo-list {
  height: 100%;
  /* height: 28rem; */
  overflow: scroll;
}

.list-item {
  /* display: flex; */
  width: 96%;
  margin-left: 2%;
  /* margin-bottom: 20px; */
  /* text-align: center; */
  min-height: 350px;
  /* background-color: #f4a8b6; */
  border-radius: 5%;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.11);
  margin-top: 40px;
  position: relative;
}

.bottomList {
  position: absolute;
  bottom: 10px;
  display: flex;
  width: 100%;
}

.leftIcon {
  width: 70%;
  display: flex;
  font-size: 0.6rem;
  align-items: center;
}

.name {
  padding-left: 20px;
  font-size: .9rem;
  text-align: center;
}

.touxiang {
  width: 2rem;
  height: 2rem;
  padding-left: 1rem;
}

.riqi {
  padding-left: 1rem;
  font-size: .8rem;
}

.rightIcon {
  width: 30%;
  display: flex;
  justify-items: center;
}

.Comment {
  width: 50%;
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
}

.SFollow {
  width: 50%;
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
}

.neirong1 {
  width: 100%;
}

.tubiao {
  display: flex;
}


.content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 8rem;
  border-bottom: 1px solid rgb(206, 200, 200);
  margin-top: 1rem;
}

.biaoti {
  font-weight: bold;
  font-size: o.9rem;
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
}

.nut-tab-pane {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  padding: 0;
  flex-shrink: 0;
  display: block;
  background-color: #F9F9F9;
  /* padding: 48rpx 40rpx; */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: auto;
  height: 100%;
  word-break: break-all;
  /* width: 96%; */
  /* margin-left: 2%; */
}

.shequneirong {
  width: 100%;
  /* height: 10rem; */
  align-self: flex-start;
  background-color: rgb(255, 255, 255);
}

/* .nut-tabs {} */

.jiaobiao {
  font-size: 0.76rem;
  margin-top: 3.2rem;
}

.jiaobiao1 {
  font-size: 0.76rem;
  margin-top: 2rem;
}

.beijin {
  height: 100%;
}

.list-item-img {
  height: 5rem;
  width: 5rem;
}

.list-item-msg {
  padding: 10px;
}

.nut-tabs__content {
  height: 100%;
}

.nut-icon {
  padding: 10px;
}
</style>
