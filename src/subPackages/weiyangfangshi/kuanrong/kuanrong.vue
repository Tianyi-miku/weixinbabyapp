<template>    
    <div style="display: flex;">
    <img :src="krjy" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import krjy from "../../../assets/img/krjy.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const krjy = ref(documentUrl + '/krjy.png')
    </script>
    