<template>    
    <div style="display: flex;">
    <img :src="yswa5" style="height:56rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import yswa5 from "../../../assets/img/yswa5.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const yswa5 = ref(documentUrl + '/yswa5.png')
    </script>