<template>    
    <div style="display: flex;">
    <img :src=ssjh4 style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import ssjh4 from "../../../assets/img/ssjh4.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const ssjh4 = ref(documentUrl + '/ssjh4.png')
    </script>