<template>    
<div style="display: flex;">
<img :src="shunyin1" style="height:61rem ;width: 100%;" />
</div>
</template>

<script setup>
// import shunyin1 from "../../../../assets/img/shunyin1.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const shunyin1 = ref(documentUrl + '/shunyin1.png')
</script>


