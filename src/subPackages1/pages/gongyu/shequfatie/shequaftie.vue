<template>
    <nut-form v-if="isShowWz" ref="formRef" :model-value="formData" :rules="{
        msg: [
            { required: true, message: '请填写帖子内容' },
        ],

    }">
        <div style="display: flex; justify-content: space-between; padding: 10px;">
            <nut-button type="default" @click=" Taro.switchTab({
                url: '/pages/gongyu/gongyu'
            })">取消</nut-button>
            <nut-button type="primary" @click="submit">发布</nut-button>
        </div>

        <nut-form-item prop="msg" required>
            <nut-textarea rows="60" v-model="formData.msg" placeholder="说点什么吧..." />
        </nut-form-item>

        <nut-uploader :url="uploadUrl" :headers="Iheaders" @success="successEvent" class="neirong">
            <img :src="proiconsPhoto" class="proiconsPhoto" />
            <div v-if="imgUrl"><img :src="imgUrl" class="proiconsimgUrl" /></div>
        </nut-uploader>
    </nut-form>
    <template v-else>信息</template>

</template>


<script setup>
import { ref } from 'vue'
import { Textarea } from '@nutui/nutui-taro'
import { Uploader } from '@nutui/nutui-taro'
import Axios from '../../../../util/axios'
import Taro from '@tarojs/taro'
import { Form, FormItem } from '@nutui/nutui-taro'
import { uploadUrl, documentUrl, isShowWz } from './../../../../util/ip'
import proiconsPhoto from '../../../../assets/img/proiconsPhoto.png'

const formRef = ref(null)
const imgUrl = ref(null)

const Iheaders = {
    Authorization: 'Bearer ' + Taro.getStorageSync('token')
}
const formData = ref({
    msg: '',
    images: ''
})
function successEvent({ data, option, fileItem }) {
    if (data?.data) {
        let ele = JSON.parse(data?.data)
        formData.value.images = ele.data
        console.log(formData.value.images);
        imgUrl.value = documentUrl + ele.data
    }
}
const submit = () => {
    console.log(formData.value);

    formRef.value?.validate().then(({ valid, errors }) => {
        if (valid) {
            let babyId = Taro.getStorageSync('user')?.id
            let data = {
                babyId: babyId,
                images: formData.value.images,
                msg: formData.value.msg,
                // date: dayjs(date).format('YYYY-MM-DD HH:mm:ss'),
            }
            Axios.post('/blog/add', data).then(res => {
                Taro.showToast({
                    title: '新增成功',
                    icon: 'success',
                    duration: 1000
                })
                setTimeout(() => {
                    Taro.switchTab({
                        url: '/pages/gongyu/gongyu'
                    })
                }, 1000);
            })
            console.log(formRef)
        } else {
            console.warn('error:', errors)
        }
    })
}
</script>

<style>
.nut-textarea {
    height: 72vh;
}

.proiconsPhoto {
    height: 2rem;
    width: 2rem;
}

.proiconsimgUrl {
    height: 4rem;
    width: 4rem;
}
</style>