<template>
    <div style="display: flex;">
        <img :src="jiangli1" style="height:61rem ;width: 100%;" />
    </div>
</template>

<script setup>
// import jiangli1 from "../../../../assets/img/jiangli1.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const jiangli1 = ref(documentUrl + '/jiangli1.png')
</script>