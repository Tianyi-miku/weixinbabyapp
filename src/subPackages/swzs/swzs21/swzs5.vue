<template>    
    <div style="display: flex;">
    <img :src="czly2" style="height:62rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import czly2 from "../../../assets/img/czly2.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const czly2 = ref(documentUrl + '/czly2.png')
    </script>