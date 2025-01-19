<template>    
    <div style="display: flex;">
    <img :src="jchj2" style="height:58rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import jchj2 from "../../../assets/img/jchj2.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const jchj2 = ref(documentUrl + '/jchj2.png')
    </script>