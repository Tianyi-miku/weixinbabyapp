<template>
    <div style="display: flex;">
        <img :src="caidan1" style="height:63rem ;width: 100%;" />
    </div>
</template>

<script setup>
// import caidan1 from "../../../assets/img/caidan1.png"
import { ref } from 'vue'
import { documentUrl } from './../../../util/ip'
const caidan1 = ref(documentUrl + '/caidan1.png')
</script>