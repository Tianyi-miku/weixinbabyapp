<template>    
    <div style="display: flex;">
    <img :src="jsqx1" style="height:65rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import jsqx1 from "../../../assets/img/jsqx1.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const jsqx1 = ref(documentUrl + '/jsqx1.png')
    </script>