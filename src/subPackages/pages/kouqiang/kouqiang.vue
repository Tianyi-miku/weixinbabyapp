<template>
  <nut-calendar-card v-model="value" @change="onChange">
    <template #bottom="{ day }">
      {{ list.includes(day.date) ? '☺' : '' }}
    </template>
  </nut-calendar-card>

  <div class="card">
    <div class="title">涂氟</div>
  </div>
  <div class="buttons">
    <div>
      <nut-button type="primary">刷牙打卡</nut-button>
    </div>
    <div>
      <nut-button type="info" @click="Taro.navigateTo({
    url: '/subPackages/pages/kouqiangjilu/kouqiangjilu'
  })">口腔记录</nut-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const value = ref(null)
const list = [1, 2, 3, 4]
const onChange = (val) => {
  console.log(val)
}
</script>
<style>
.title {
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