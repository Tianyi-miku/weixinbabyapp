<template>    
    <div style="display: flex;">
    <img :src="zzjy" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import zzjy from "../../../assets/img/zzjy.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const zzjy = ref(documentUrl + '/zzjy.png')
    </script>
    