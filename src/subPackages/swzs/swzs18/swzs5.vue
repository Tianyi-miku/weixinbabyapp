<template>    
    <div style="display: flex;">
    <img :src="jcfw1" style="height:46rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import jcfw1 from "../../../assets/img/jcfw1.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const jcfw1 = ref(documentUrl + '/jcfw1.png')
    </script>