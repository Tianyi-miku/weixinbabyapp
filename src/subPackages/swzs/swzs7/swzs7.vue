<template>    
    <div style="display: flex;">
    <img :src="swxz2" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import swxz2 from "../../../assets/img/swxz2.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const swxz2 = ref(documentUrl + '/swxz2.png')
    </script>