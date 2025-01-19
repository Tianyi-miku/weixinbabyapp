<template>
    <div style="display: flex;">
        <img :src="pyzz" style="height:61rem ;width: 100%;" />
    </div>
</template>

<script setup>
// import pyzz from "../../../../assets/img/pyzz.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const pyzz = ref(documentUrl + '/pyzz.png')
</script>