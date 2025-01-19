<template>
    <div v-if="isShowWz" class="dongtaipage">
        <div class="content">
            <div class="head">
                <nut-avatar>
                    <img :src="data?.babyUrl" />
                </nut-avatar>
                <div class="imgname">{{ data.babyName }}</div>
            </div>
            <div style="margin-left: 2%;width: 96%;">
                <div class="tiezineirong">
                    <div>{{ data.msg }}</div>
                    <!-- <div class="contentImage">{{ data.images }}</div> -->
                    <img v-if="data.images" :src="documentUrl + data.images" />
                </div>

                <div class="msgcount">
                    <span>评论</span>
                    <span class="count">{{ data.comments?.length }}</span>
                </div>
                <div v-for="item in data.comments" :key="item.id">
                    <div class="head1">
                        <nut-avatar>
                            <img :src="item.babyUrl" />
                        </nut-avatar>
                        <div class="imgname">{{ item.babyName }}</div>
                    </div>
                    <div class="msgChildern">
                        <div>{{ item.content }}</div>
                    </div>
                    <div class="riqi">
                        <div class="riqiname">{{ dayjs(item.createTime).format('YYYY-MM-DD') }}</div>
                        <div class="huifu" @click="backtoMsg(item.id)">回复</div>
                    </div>
                    <div class="pinlunchild" v-if="item.replyCommentVos && item.replyCommentVos?.length > 0">
                        <template v-for="e in item.replyCommentVos" :key="e.id">
                            <div class="head1">
                                <nut-avatar>
                                    <img :src="e.babyUrl" />
                                </nut-avatar>
                                <div class="imgname">{{ e.babyName }}</div>
                            </div>
                            <div class="msgChildern">
                                <div>{{ e.content }}</div>
                            </div>
                            <div class="riqi">
                                <div class="riqiname">{{
                                    dayjs(e.createTime).format('YYYY-MM-DD')
                                }}</div>
                                <div class="huifu" @click="backtoMsg(item.id)">回复</div>
                            </div>
                        </template>
                    </div>
                </div>

            </div>
        </div>
        <div class="bottomAn">
            <div class="inputBt">
                <nut-cell :title="val1 ? val1 : '说点什么...'" is-link @click="openMsg"></nut-cell>
            </div>
            <div class="rightIcon">
                <div class="Comment">
                    <Comment></Comment>
                    <span>{{ data.commentCount }}</span>
                </div>
                <div class="SFollow" @click="likeIt(data.like)">
                    <template v-if="data.like">
                        <HeartFill color="red"></HeartFill>
                    </template>
                    <template v-else>
                        <SFollow></SFollow>
                    </template>
                    <span>{{ data.likeCount }}</span>
                </div>
            </div>
        </div>
        <nut-popup position="bottom" round v-model:visible="show" :style="{ height: '50%' }">
            <nut-textarea v-model="val1" placeholder="说点什么..." :style="{ height: '45%' }" />
            <nut-button block type="primary" class="bottombutton" @click="submit">确定</nut-button>
        </nut-popup>
    </div>
    <template v-else>
        个人动态
    </template>
</template>
<script setup>
import { getCurrentInstance } from '@tarojs/taro'
import { useDidShow } from '@tarojs/taro'
import Axios from '../../../util/axios';
import { Comment, SFollow, HeartFill } from '@nutui/icons-vue-taro'
import { ref } from 'vue'
import Taro from '@tarojs/taro'
import dayjs from 'dayjs';
import { isShowWz, documentUrl } from "../../../util/ip"

const imgUrl = ref('https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png')
const id = getCurrentInstance().router.params.id

const data = ref({})
const show = ref(false)
const val1 = ref(null)
const backId = ref(null)
function likeIt(islike) {
    let babyId = Taro.getStorageSync('user')?.id
    if (islike) {
        Axios.post('/blog/like/remove', { blogId: id, babyId: babyId }).then(res => {
            Taro.showToast({
                title: '取消成功',
                icon: 'success',
                duration: 1000
            })
            data.likeCount = data.likeCount - 1
            data.like = false
        })
    } else {
        Axios.post('/blog/like/add', { blogId: id, babyId: babyId }).then(res => {
            if (res) {
                Taro.showToast({
                    title: '点赞成功',
                    icon: 'success',
                    duration: 1000
                })
                data.likeCount = data.likeCount + 1
                data.like = true
            }
        })
    }
}
useDidShow(() => {
    getList()
})

function getList() {
    Axios.get(`/blog/${id}`).then(res => {
        data.value = res
    })
}


function backtoMsg(id) {
    backId.value = id
    show.value = true
}

function openMsg() {
    backId.value = null
    show.value = true
}
function submit() {
    if (val1.value) {
        let babyId = Taro.getStorageSync('user')?.id
        const data = {
            blogId: Number(id),
            babyId: babyId,
            content: val1.value,
            pCommentId: backId.value
        }
        Axios.post(`/blog/comment/add`, data).then(res => {
            if (res) {
                show.value = false
                Taro.showToast({
                    title: '评论成功',
                    icon: 'success',
                    duration: 1000
                })
                getList()
            }
        })
    } else {
        Taro.showToast({
            title: '请输入内容',
            icon: 'error',
            duration: 1000
        })
    }

}


</script>
<style>
.dongtaipage {
    height: 100%;
    overflow: hidden;
}

.nut-textarea {
    height: 90%;
}

.bottombutton {
    height: 10%;
    width: 90%;
    margin: auto;
}

.riqi {
    display: flex;
    font-size: 0.8rem;
}

.riqiname {
    width: 6rem;
}

.count {
    padding-left: 1rem;
}

.msgcount {
    display: flex;
    flex-wrap: wrap;
}

.contentImage {
    height: 164px;
}

.imgname {
    margin-left: 1rem;
}

.content {
    height: 92%;
    overflow: scroll;
}

.bottomAn {
    height: 8%;
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    align-items: center;
}

.inputBt {
    width: 80%;
    padding: 0;
}

.rightIcon {
    width: 20%;
    display: flex;
    justify-items: center;
}

.Comment {
    width: 50%;
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

.SFollow {
    width: 50%;
    display: flex;
    justify-items: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
}

.head {
    height: 7%;
    background-color: rgb(247, 247, 247);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
}

.head1 {
    height: 7%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.2rem;
}

.tiezineirong {
    padding: 1rem;
    height: 20%;
    border-bottom: 1px solid #eee;
}

.msgChildern {
    padding: 0.2rem;
    padding-bottom: 0.5rem;
}

.pinlun {
    display: flex;
    flex-direction: column;
}

.pinlunchild {
    padding-left: 100px;
    display: flex;
    flex-direction: column;
}
</style>