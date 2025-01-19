<template>    
    <div style="display: flex;">
    <img :src="czly1" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import czly1 from "../../../assets/img/czly1.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const czly1 = ref(documentUrl + '/czly1.png')
    </script>