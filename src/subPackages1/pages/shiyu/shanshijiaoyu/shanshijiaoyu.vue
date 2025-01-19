<template>
    <div style="display: flex;">
        <img :src="ssjy" style="height:61rem ;width: 100%;" />
    </div>
</template>

<script setup>
// import ssjy from "../../../../assets/img/ssjy.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const ssjy = ref(documentUrl + '/ssjy.png')
</script>