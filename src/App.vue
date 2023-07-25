<script setup>

  import {RouterView} from "vue-router"
  //we don't import main.js, b/c main.js is already accessing App.vue?
  //when App.vue is brought into main.js and finds the router, RouterView will apply the rules from it? presumably RouterView won't do anything until App.vue and router meet in main.js and App.js gets access to the router object.
  import Nav from "./components/Nav.vue"


</script>

<template>
  
  <Nav />
  <RouterView />
  <!-- RouterView access the router object via main.js. the homeview and aboutview are only imported in the index.js (router) -->

</template>