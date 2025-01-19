<template>    
    <div style="display: flex;">
    <img :src=ssjh3 style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import ssjh3 from "../../../assets/img/ssjh3.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const ssjh3 = ref(documentUrl + '/ssjh3.png')
    </script>