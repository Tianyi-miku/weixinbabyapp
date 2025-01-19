<template>
    <div style="display: flex;">
        <img :src="jkys2" style="height:61rem ;width: 100%;" />
    </div>
</template>

<script setup>
// import jkys2 from "../../../assets/img/jkys2.png"
import { ref } from 'vue'
import { documentUrl } from './../../../util/ip'
const jkys2 = ref(documentUrl + '/jkys2.png')
</script>