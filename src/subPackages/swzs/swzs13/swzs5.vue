<template>    
    <div style="display: flex;">
    <img :src="swzb4" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import swzb4 from "../../../assets/img/swzb4.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const swzb4 = ref(documentUrl + '/swzb4.png')
    </script>