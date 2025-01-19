<template>    
    <div style="display: flex;">
    <img :src="ssjh5" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import ssjh5 from "../../../assets/img/ssjh5.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const ssjh5 = ref(documentUrl + '/ssjh5.png')
    </script>