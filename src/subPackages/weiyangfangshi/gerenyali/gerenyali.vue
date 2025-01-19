<template>    
    <div style="display: flex;">
    <img :src="gtcy" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import gtcy from "../../../assets/img/gtcy.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const gtcy = ref(documentUrl + '/gtcy.png')
    </script>
    