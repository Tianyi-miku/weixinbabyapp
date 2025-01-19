<template>    
    <div style="display: flex;">
    <img :src="swzb2" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import swzb2 from "../../../assets/img/swzb2.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const swzb2 = ref(documentUrl + '/swzb2.png')
    </script>