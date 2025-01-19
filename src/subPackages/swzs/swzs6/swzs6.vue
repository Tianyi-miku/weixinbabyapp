<template>    
    <div style="display: flex;">
    <img :src="swxz1" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import swxz1 from "../../../assets/img/swxz1.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const swxz1 = ref(documentUrl + '/swxz1.png')
    </script>