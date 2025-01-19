<template>    
  <div style="display: flex;">
  <img :src="qzgx11" style="height:61rem ;width: 100%;" />
  </div>
  </template>
  
  <script setup>
  // import qzgx11 from "../../../../assets/img/qzgx11.png"
  import { ref} from 'vue'
    import { documentUrl } from './../../../../util/ip'
    const qzgx11 = ref(documentUrl + '/qzgx11.png')
  </script>
  