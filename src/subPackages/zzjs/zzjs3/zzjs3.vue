<template>    
    <div style="display: flex;">
    <img :src="zzjs3" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import zzjs3 from "../../../assets/img/zzjs3.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const zzjs3 = ref(documentUrl + '/zzjs3.png')
    </script>
    