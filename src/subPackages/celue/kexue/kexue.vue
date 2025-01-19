<template>    
    <div style="display: flex;">
    <img :src="jkys1" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import jkys1 from "../../../assets/img/jkys1.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const jkys1 = ref(documentUrl + '/jkys1.png')
    </script>
    