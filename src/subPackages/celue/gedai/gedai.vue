<template>    
    <div style="display: flex;">
    <img :src="gdwy" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import gdwy from "../../../assets/img/gdwy.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const gdwy = ref(documentUrl + '/gdwy.png')
    </script>
    