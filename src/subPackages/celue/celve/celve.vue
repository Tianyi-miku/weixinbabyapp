<template>    
    <div style="display: flex;">
    <img :src="wyjl" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import wyjl from "../../../assets/img/wyjl.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const wyjl = ref(documentUrl + '/wyjl.png')
    </script>
    