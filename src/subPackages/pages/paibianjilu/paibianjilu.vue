<template>
  <nut-form ref="formRef" :model-value="formData" :rules="{
    riqi: [
      { required: true, message: '请输入日期' },
    ],
  }">
    <nut-form-item label="便便颜色" prop="yanse" required>
      <nut-radio-group v-model="formData.yanse" direction="horizontal">
        <nut-radio label="1">
          黄色
          <template #icon>
            <Jimi40 color="yellow" />
          </template>
          <template #checkedIcon>
            <Jimi40 color="rgb(0, 66, 189)" />
          </template>
        </nut-radio>
        <nut-radio label="2">
          绿色
          <template #icon>
            <Jimi40 color="green" />
          </template>
          <template #checkedIcon>
            <Jimi40 color="rgb(0, 66, 189)" />
          </template>
        </nut-radio>
        <nut-radio label="3">
          褐色
          <template #icon>
            <Jimi40 color="chocolate" />
          </template>
          <template #checkedIcon>
            <Jimi40 color="rgb(0, 66, 189)" />
          </template>
        </nut-radio>
        <nut-radio label="4">
          灰色
          <template #icon>
            <Jimi40 color="gray" />
          </template>
          <template #checkedIcon>
            <Jimi40 color="rgb(0, 66, 189)" />
          </template>
        </nut-radio>
        <nut-radio label="5">
          黑色
          <template #icon>
            <Jimi40 color="black" />
          </template>
          <template #checkedIcon>
            <Jimi40 color="rgb(0, 66, 189)" />
          </template>
        </nut-radio>
        <nut-radio label="6">
          红色
          <template #icon>
            <Jimi40 color="red" />
          </template>
          <template #checkedIcon>
            <Jimi40 color="rgb(0, 66, 189)" />
          </template>
        </nut-radio>
      </nut-radio-group>
    </nut-form-item>
    <nut-form-item label="便便形态" prop="xingtai" required>
      <nut-radio-group v-model="formData.xingtai">
        <nut-radio label="1" shape="button">正常</nut-radio>
        <nut-radio label="2" shape="button">稀便</nut-radio>
        <nut-radio label="3" shape="button">水样</nut-radio>
        <nut-radio label="4" shape="button">粘稠</nut-radio>
        <nut-radio label="5" shape="button">较干</nut-radio>
        <nut-radio label="6" shape="button">干硬</nut-radio>

      </nut-radio-group>
    </nut-form-item>
    <nut-form-item>
      <nut-button type="primary" block @click="handleSubmit">保存</nut-button>
    </nut-form-item>
  </nut-form>
</template>
<script setup>
import { reactive } from 'vue';
import { ref } from 'vue'
import dayjs from 'dayjs'
import { Jimi40 } from '@nutui/icons-vue-taro'

const formData = reactive({
  yanse: '1',
  xingtai: '',
  riqi: dayjs().format('YYYY-MM-DD'),
})

const show = ref(false)
const choose = (param) => {
  formData.riqi = param[3]
}

const formRef = ref(null)
const handleSubmit = () => {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {

    } else {
      console.warn('error:', errors)
    }
  })
}

</script>
<style>

</style>