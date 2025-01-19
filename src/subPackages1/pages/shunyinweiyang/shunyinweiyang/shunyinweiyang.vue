<template>    
<div style="display: flex;">
<img :src="shunyin" style="height:60rem ;width: 100%;" />
</div>
</template>

<script setup>
// import shunyin from "../../../../assets/img/shunyin.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const shunyin = ref(documentUrl + '/shunyin.png')
</script>


