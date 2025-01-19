<template>    
    <div style="display: flex;">
    <img :src="yswa3" style="height:56rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import yswa3 from "../../../assets/img/yswa3.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const yswa3 = ref(documentUrl + '/yswa3.png')
    </script>