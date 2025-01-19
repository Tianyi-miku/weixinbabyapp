<template>    
    <div style="display: flex;">
    <img :src="jchj4" style="height:52rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import jchj4 from "../../../assets/img/jchj4.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const jchj4 = ref(documentUrl + '/jchj4.png')
    </script>