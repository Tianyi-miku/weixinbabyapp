<template>    
    <div style="display: flex;">
    <img :src="czly4" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import czly4 from "../../../assets/img/czly4.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const czly4 = ref(documentUrl + '/czly4.png')
    </script>