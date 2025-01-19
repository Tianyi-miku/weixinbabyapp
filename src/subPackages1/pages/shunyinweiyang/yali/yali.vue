<template>
    <div style="display: flex;">
        <img :src="yali" style="height:61rem ;width: 100%;" />
    </div>
</template>

<script setup>
// import yali from "../../../../assets/img/yali.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const yali = ref(documentUrl + '/yali.png')
</script>