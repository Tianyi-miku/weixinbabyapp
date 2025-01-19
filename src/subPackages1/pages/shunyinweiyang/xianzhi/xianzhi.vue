<template>
    <div style="display: flex;">
        <img :src="xianzhi" style="height:61rem ;width: 100%;" />
    </div>
</template>

<script setup>
// import xianzhi from "../../../../assets/img/xianzhi.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const xianzhi = ref(documentUrl + '/xianzhi.png')
</script>