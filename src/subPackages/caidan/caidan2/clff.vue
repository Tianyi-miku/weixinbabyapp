<template>    
    <div style="display: flex;">
    <img :src="caidan2" style="height:70rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import caidan2 from "../../../assets/img/caidan2.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const caidan2 = ref(documentUrl + '/caidan2.png')
    </script>