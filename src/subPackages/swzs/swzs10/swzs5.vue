<template>    
    <div style="display: flex;">
    <img :src="swzb1" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import swzb1 from "../../../assets/img/swzb1.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const swzb1 = ref(documentUrl + '/swzb1.png')
    </script>