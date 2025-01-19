<template>    
    <div style="display: flex;">
    <img :src="yswa2" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import yswa2 from "../../../assets/img/yswa2.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const yswa2 = ref(documentUrl + '/yswa2.png')
    </script>