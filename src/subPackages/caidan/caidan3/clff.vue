<template>    
    <div style="display: flex;">
    <img :src="caidan3" style="height:86rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import caidan3 from "../../../assets/img/caidan3.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const caidan3 = ref(documentUrl + '/caidan3.png')
    </script>