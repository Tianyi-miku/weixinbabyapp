<template>    
    <div style="display: flex;">
    <img :src="zzjs4" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import zzjs4 from "../../../assets/img/zzjs4.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const zzjs4 = ref(documentUrl + '/zzjs4.png')
    </script>
    