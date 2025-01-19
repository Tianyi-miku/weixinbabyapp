<template>    
  <div style="display: flex;">
  <img :src="pygx" style="height:61rem ;width: 100%;" />
  </div>
  </template>
  
  <script setup>
  // import pygx from "../../../../assets/img/pygx.png"
  import { ref} from 'vue'
    import { documentUrl } from './../../../../util/ip'
    const pygx = ref(documentUrl + '/pygx.png')
  </script>
  