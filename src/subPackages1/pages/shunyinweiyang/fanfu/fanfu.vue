<template>
    <div style="display: flex;">
        <img :src="fanfu" style="height:61rem ;width: 100%;" />
    </div>
</template>

<script setup>
// import fanfu from "../../../../assets/img/fanfu.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const fanfu = ref(documentUrl + '/fanfu.png')
</script>