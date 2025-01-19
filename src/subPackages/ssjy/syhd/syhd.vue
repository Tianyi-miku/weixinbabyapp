<template>    
    <div style="display: flex;">
    <img :src="ssjy3" style="height:61rem ;width: 100%;" />
    </div>
    </template>
    
    <script setup>
    // import ssjy3 from "../../../assets/img/ssjy3.png"
    import { ref} from 'vue'
    import { documentUrl } from './../../../util/ip'
    const ssjy3 = ref(documentUrl + '/ssjy3.png')
    </script>
    