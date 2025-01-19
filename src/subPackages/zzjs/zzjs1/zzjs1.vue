<template>    
    <div style="display: flex;">
    <img :src="zzjs1" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import zzjs1 from "../../../assets/img/zzjs1.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const zzjs1 = ref(documentUrl + '/zzjs1.png')
    </script>
    