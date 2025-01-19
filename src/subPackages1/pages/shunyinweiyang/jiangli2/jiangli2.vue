<template>
    <div style="display: flex;">
        <img :src="jiangli2" style="height:61rem ;width: 100%;" />
    </div>
</template>

<script setup>
// import jiangli2 from "../../../../assets/img/jiangli2.png"
import { ref } from 'vue'
import { documentUrl } from './../../../../util/ip'
const jiangli2 = ref(documentUrl + '/jiangli2.png')
</script>