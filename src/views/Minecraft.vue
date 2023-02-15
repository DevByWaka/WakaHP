<template>
    <v-container class="fill-height">
      <v-responsive class="d-flex align-center text-center fill-height">
        <v-img contain height="300" src="@/assets/WO.png" />
  
        <h1 class="text-h2 font-weight-bold">Minecraft</h1>
        <div class="text-body-5 font-weight-light mb-n1">Waka Game</div>
  
        <div class="py-10" />
  
        <plugins></plugins>

        <div class="py-10" />
      </v-responsive>
    </v-container>
  </template>
  
  <script>
  import Plugins from '../components/Minecraft/Plugins.vue'
  export default {
  components: {
    Plugins,
  }
}
  </script>
  