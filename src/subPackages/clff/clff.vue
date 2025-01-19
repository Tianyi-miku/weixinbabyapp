<template>    
    <div style="display: flex;">
    <img :src="clff" style="height:105rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import clff from "../../assets/img/clff.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../util/ip'
    const clff = ref(documentUrl + '/clff.png')
    </script>
    