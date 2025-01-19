<template>    
    <div style="display: flex;">
    <img :src="jchj1" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import jchj1 from "../../../assets/img/jchj1.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const jchj1 = ref(documentUrl + '/jchj1.png')
    </script>