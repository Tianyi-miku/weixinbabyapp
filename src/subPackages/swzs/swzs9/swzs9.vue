<template>    
    <div style="display: flex;">
    <img :src="swxz4" style="height:64rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import swxz4 from "../../../assets/img/swxz4.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const swxz4 = ref(documentUrl + '/swxz4.png')
    </script>