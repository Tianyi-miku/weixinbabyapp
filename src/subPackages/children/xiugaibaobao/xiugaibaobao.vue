<template>
  <div class="touxiang">
    <nut-uploader :url="uploadUrl" :headers="Iheaders" @success="successEvent" class="neirong">
      <nut-avatar size="large">
        <img
          :src="formData?.avatarPath ? documentUrl + formData.avatarPath : 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'" />
      </nut-avatar>
    </nut-uploader>
  </div>
  <nut-form ref="formRef" :model-value="formData" :rules="{
      name: [
        { required: true, message: '请填写宝宝名称' },
      ],
      birthday: [
        { required: true, message: '请填写宝宝生日' },
      ],
      sex: [
        { required: true, message: '请选择性别' },
      ],
    }">
    <nut-form-item label="宝宝小名" prop="name" required>
      <nut-input v-model="formData.name" placeholder="请输入宝宝小名" type="text" />
    </nut-form-item>
    <nut-form-item label="宝宝生日" prop="birthday" required>
      <nut-input disabled="true" placeholder="请输入宝宝生日" v-model="formData.birthday" type="text" @click="show = true" />
      <nut-popup v-model:visible="show" position="bottom">
        <nut-calendar-card v-model="riqi"></nut-calendar-card>
        <nut-button block type="primary" @click="riqichange">确认</nut-button>
      </nut-popup>
    </nut-form-item>
    <nut-form-item label="性别" prop="sex" required>
      <nut-radio-group v-model="formData.sex" direction="horizontal">
        <nut-radio label="0">男</nut-radio>
        <nut-radio label="1">女</nut-radio>
      </nut-radio-group>
    </nut-form-item>

    <div style="width: 96%; margin-left: 2%; margin-right: 2%;">
      <nut-button block type="primary" @click="submit">修改</nut-button>
    </div>
  </nut-form>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import dayjs from 'dayjs'
import { uploadUrl, documentUrl } from './../../../util/ip'
import Taro from '@tarojs/taro'
import Axios from '../../../util/axios';
import { useDidShow } from '@tarojs/taro'

const formData = ref({})
const riqi = ref(null)
const show = ref(false)
const formRef = ref(null)
const imgUrl = ref('https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png')


useDidShow(() => {
  const data = Taro.getStorageSync('user')
  data.birthday = dayjs(data.birthday).format('YYYY-MM-DD')
  data.sex = data.sex?.toString()
  formData.value = data
})

const Iheaders = {
  Authorization: 'Bearer ' + Taro.getStorageSync('token')
}

function riqichange() {
  formData.value.birthday = dayjs(riqi.value).format('YYYY-MM-DD')
  show.value = false
}

const submit = () => {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {
      let data = { ...formData.value }
      data.sex = Number(data.sex)
      data.babyId = data.id
      Axios.put('/baby/update', data).then(res => {
        Taro.showToast({
          title: '修改成功',
          icon: 'success',
          duration: 1000
        })
        setTimeout(() => {
          Taro.navigateBack({
            delta: 1
          })
        }, 1000);
      })
    } else {
      console.warn('error:', errors)
    }
  })
}

function successEvent({ data, option, fileItem }) {
  if (data?.data) {
    let ele = JSON.parse(data?.data)
    formData.value.avatarPath = ele.data
    imgUrl.value = documentUrl + ele.data
  }
}

</script>
<style>
.iconfont {
  font-size: large;
}

.touxiang {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
}

.neirong {
  height: 3rem;
  width: 3rem;
}
</style>