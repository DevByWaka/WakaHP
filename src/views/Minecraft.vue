<template>
    <v-container class="fill-height">
      <v-responsive class="d-flex align-center text-center fill-height">
        <v-img contain height="300" src="@/assets/WO.png" />
  
        <h1 class="text-h4 font-weight-bold">マインクラフト<br>Wakaサーバー</h1>
        <div class="text-body-5 font-weight-light mb-n1">Waka Game</div>
  
        <div class="py-10" />

        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title disable-icon-rotate>
              Wakaサーバーで使える機能
            <template v-slot:actions>
            <v-icon color="teal" icon="mdi-check">
            </v-icon>
            </template>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
            <features></features>
          </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        

        <div class="py-10" />
      </v-responsive>
    </v-container>
  </template>
  
  <script>
  import Features from '../components/Minecraft/Features.vue'
  export default {
  components: {
    Features,
  }
}
  </script>
  