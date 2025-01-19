<template>    
    <div style="display: flex;">
    <img :src="jsqx2" style="height:47rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import jsqx2 from "../../../assets/img/jsqx2.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const jsqx2 = ref(documentUrl + '/jsqx2.png')
    </script>