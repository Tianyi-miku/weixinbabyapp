<template>    
    <div style="display: flex;">
    <img :src="czly3" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import czly3 from "../../../assets/img/czly3.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const czly3 = ref(documentUrl + '/czly3.png')
    </script>