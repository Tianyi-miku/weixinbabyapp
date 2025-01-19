<template>    
    <div style="display: flex;">
    <img :src="ssjy4" style="height:74rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import clff from "../../../assets/img/clff.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const ssjy4 = ref(documentUrl + '/ssjy4.png')
    </script>
    