<template>    
    <div style="display: flex;">
    <img :src="yswa1" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import yswa1 from "../../../assets/img/yswa1.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const yswa1 = ref(documentUrl + '/yswa1.png')
    </script>