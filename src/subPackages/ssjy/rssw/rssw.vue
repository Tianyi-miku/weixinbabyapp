<template>    
    <div style="display: flex;">
    <img :src="ssjy5" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import ssjy5 from "../../../assets/img/ssjy5.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const ssjy5 = ref(documentUrl + '/ssjy5.png')
    </script>
    