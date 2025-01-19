<template>    
    <div style="display: flex;">
    <img :src="wyfs" style="height:68rem ;width: 100%;" />
    </div>
    </template>
        
    <script setup>
    // import wyfs from "../../../assets/img/wyfs.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const wyfs = ref(documentUrl + '/wyfs.png')
    </script>
    