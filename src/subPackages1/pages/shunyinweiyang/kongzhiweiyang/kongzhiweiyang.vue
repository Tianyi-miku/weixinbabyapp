<template>
    <div style="display: flex;">
        <img :src="kongzhi" style="height:61rem ;width: 100%;" />
    </div>
</template>

<script setup>
// import kongzhi from "../../../../assets/img/kongzhi.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const kongzhi = ref(documentUrl + '/kongzhi.png')
</script>