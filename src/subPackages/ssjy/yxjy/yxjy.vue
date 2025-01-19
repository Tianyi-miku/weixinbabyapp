<template>    
    <div style="display: flex;">
    <img :src="ssjy6" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import ssjy6 from "../../../assets/img/ssjy6.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const ssjy6 = ref(documentUrl + '/ssjy6.png')
    </script>
    