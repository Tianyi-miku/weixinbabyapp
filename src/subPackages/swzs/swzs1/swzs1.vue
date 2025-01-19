<template>    
    <div style="display: flex;">
    <img :src=ssjh1 style="height:66rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import ssjh1 from "../../../assets/img/ssjh1.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const ssjh1 = ref(documentUrl + '/ssjh1.png')
    </script>
    