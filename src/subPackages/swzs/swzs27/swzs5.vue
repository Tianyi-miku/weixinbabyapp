<template>    
    <div style="display: flex;">
    <img :src="yswa4" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import yswa4 from "../../../assets/img/yswa4.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const yswa4 = ref(documentUrl + '/yswa4.png')
    </script>