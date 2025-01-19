<template>    
    <div style="display: flex;">
    <img :src="jcfw2" style="height:53rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import jcfw2 from "../../../assets/img/jcfw2.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const jcfw2 = ref(documentUrl + '/jcfw2.png')
    </script>