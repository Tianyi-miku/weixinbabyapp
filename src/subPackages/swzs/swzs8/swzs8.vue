<template>    
    <div style="display: flex;">
    <img :src="swxz3" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import swxz3 from "../../../assets/img/swxz3.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const swxz3 = ref(documentUrl + '/swxz3.png')
    </script>