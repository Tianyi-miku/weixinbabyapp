<template>
  <div style="display: flex;">
    <img :src="zzyd" style="height:61rem ;width: 100%;" />
  </div>
</template>

<script setup>
// import zzyd from "../../../../assets/img/zzyd.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const zzyd = ref(documentUrl + '/zzyd.png')
</script>