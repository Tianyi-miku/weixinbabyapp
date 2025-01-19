<template>
    <div style="display: flex;">
        <img :src="bangyang" style="height:61rem ;width: 100%;" />
    </div>
</template>

<script setup>
// import bangyang from "../../../../assets/img/bangyang.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const bangyang = ref(documentUrl + '/bangyang.png')
</script>