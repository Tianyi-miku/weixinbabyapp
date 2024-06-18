<template>
  <nut-calendar-card v-model="value" @change="onChange">
    <template #bottom="{ day }">
      {{ list.includes(day.date) ? '☺' : '' }}
    </template>
  </nut-calendar-card>
  <div class="card">
    <div class="title">{{ Idate }}</div>
    <div class="content">
      <div> 便便 次</div>
      <div> 颜色</div>
      <div> 次数</div>
    </div>
  </div>
  <div class="buttons">
    <div>
      <nut-button type="primary">便便打卡</nut-button>
    </div>
    <div>
      <nut-button type="info" @click="Taro.navigateTo({
    url: '/subPackages/pages/paibianjilu/paibianjilu'
  })">便便记录</nut-button>
    </div>
  </div>
</template>
<script setup>
import dayjs from 'dayjs';
import { ref } from 'vue'

const value = ref(null)
const list = [1, 2, 3, 4]
const Idate = ref(null)
const onChange = (val) => {
  Idate = dayjs(val).format('YYYY年-MM月-DD日')
  console.log(val)
}
</script>

<style>
.title {
  width: 100%;
  text-align: center;
}

.content {
  padding: 0.5rem;
}

.card {
  margin: 1rem;
  height: 20vh;
  border-radius: 16px;
  background-color: aliceblue;
}

.buttons {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
}
</style>