<template>    
    <div style="display: flex;">
    <img :src="wytd" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import wytd from "../../../assets/img/wytd.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const wytd = ref(documentUrl + '/wytd.png')
    </script>