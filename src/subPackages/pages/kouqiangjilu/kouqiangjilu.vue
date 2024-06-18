<template>
  <nut-form ref="formRef" :model-value="formData" :rules="{
    name: [
      { required: true, message: '请填写名称' },
    ],
    riqi: [
      { required: true, message: '请填写记录时间' },
    ],
  }">
    <nut-form-item label="名称" prop="name">
      <nut-input v-model="formData.name" placeholder="请输入名称" type="text" />
    </nut-form-item>
    <nut-form-item label="记录时间" prop="riqi" required>
      <nut-input v-model="formData.riqi" disabled="true" placeholder="请输入头围" type="text" @click="show = true" />
      <nut-calendar v-model:visible="show" :default-value="formData.riqi" @close="show = false" @choose="choose">
      </nut-calendar>
    </nut-form-item>
    <nut-form-item label="备注" prop="beizhu">
      <nut-input v-model="formData.beizhu" placeholder="请输入备注" type="text" />
    </nut-form-item>
    <nut-space style="margin: 10px">
      <nut-button block type="primary" size="small" @click="submit">保存</nut-button>
    </nut-space>
  </nut-form>
</template>
<script setup>
import { ref } from 'vue'
const formData = ref({
  name: '',
  riqi: dayjs().format('YYYY-MM-DD'),
  beizhu: '',
})

const submit = () => {
  formRef.value?.validate().then(({ valid, errors }) => {
    if (valid) {
      console.log('success:', formData.value)
    } else {
      console.warn('error:', errors)
    }
  })
}

const show = ref(false)
const choose = (param) => {
  formData.riqi = param[3]
}


</script>