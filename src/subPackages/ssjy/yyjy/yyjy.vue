<template>    
    <div style="display: flex;">
    <img :src="ssjy2" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import ssjy2 from "../../../assets/img/ssjy2.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const ssjy2 = ref(documentUrl + '/ssjy2.png')
    </script>
    