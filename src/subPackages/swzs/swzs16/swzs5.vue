<template>    
    <div style="display: flex;">
    <img :src="jchj3" style="height:57rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import jchj3 from "../../../assets/img/jchj3.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const jchj3 = ref(documentUrl + '/jchj3.png')
    </script>