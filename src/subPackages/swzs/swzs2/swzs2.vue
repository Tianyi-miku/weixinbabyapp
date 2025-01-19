<template>    
    <div style="display: flex;">
    <img :src=ssjh2 style="height:65rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import ssjh2 from "../../../assets/img/ssjh2.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const ssjh2 = ref(documentUrl + '/ssjh2.png')
    </script>