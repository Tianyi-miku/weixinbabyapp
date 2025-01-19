<template>    
    <div style="display: flex;">
    <img :src="ssjy1" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import ssjy1 from "../../../assets/img/ssjy1.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const ssjy1 = ref(documentUrl + '/ssjy1.png')
    </script>
    