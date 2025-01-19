<template>    
    <div style="display: flex;">
    <img :src="zzjs2" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import zzjs2 from "../../../assets/img/zzjs2.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const zzjs2 = ref(documentUrl + '/zzjs2.png')
    </script>
    