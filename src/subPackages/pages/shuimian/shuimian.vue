<template>
  <div>
    <nut-cell :title="title" @click="show = true"></nut-cell>
    <nut-popup v-model:visible="show" position="bottom">
      <nut-date-picker v-model="val" type="year-month" :three-dimensional="false" @confirm="confirm"></nut-date-picker>
    </nut-popup>
  </div>
  <nut-button size="large" type="primary">手动记录</nut-button>
</template>
<script setup>
import { ref, onMounted } from "vue";
import Taro from "@tarojs/taro";
import dayjs from "dayjs";

let val = ref(new Date())
const show = ref(false)
let title = ref(dayjs(val).format('YYYY年-MM月'))

function getDaysInMonth(year, month) {
  const startOfMonth = dayjs(`${year}-${month - 1}-01`);
  const endOfMonth = startOfMonth.endOf('month');
  return endOfMonth.date();
}




</script>
<style>
.bar-chart {
  height: 90vh;
  width: 100%;
}

.XCotent {
  display: flex;
}
</style>