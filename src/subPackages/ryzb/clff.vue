<template>    
    <div style="display: flex;">
    <img :src="ryzb1" style="height:105rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import ryzb1 from "../../assets/img/ryzb1.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../util/ip'
    const ryzb1 = ref(documentUrl + '/ryzb1.png')
    </script>
    