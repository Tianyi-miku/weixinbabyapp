<template>
  <div style="display: flex;">
    <img :src="qzyd" style="height:77rem ;width: 100%;" />
  </div>
</template>

<script setup>
// import qzyd from "../../../../assets/img/qzyd.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const qzyd = ref(documentUrl + '/qzyd.png')
</script>