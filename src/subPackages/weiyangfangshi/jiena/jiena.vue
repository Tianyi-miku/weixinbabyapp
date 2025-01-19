<template>    
    <div style="display: flex;">
    <img :src="jnye" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import jnye from "../../../assets/img/jnye.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const jnye = ref(documentUrl + '/jnye.png')
    </script>
    