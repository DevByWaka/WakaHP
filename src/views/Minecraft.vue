<template>

    <v-container class="fill-height">
      <v-responsive class="d-flex align-center text-center fill-height">
        <!--<v-img contain height="300" src="@/assets/WO.png" />-->
        <v-parallax height="100%" src='@/assets/Minecraft/features/center.png'>
          <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);">
            <h1 class="text-h4 font-weight-bold">マインクラフト<br>Wakaサーバー</h1>
            <div class="text-body-5 font-weight-light mb-n1">Waka Game</div>
          </div>
        </v-parallax>
        <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn color="red-darken-1" min-width="228" rel="noopener noreferrer" size="x-large" variant="flat" href="minecraft://?addExternalServer=Waka%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC|waka1210mc.ddns.net:25565">
            <v-icon icon="mdi:mdi-checkbox-marked" size="large" start/>
            サーバーを追加する
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn color="green-darken-1" min-width="228" rel="noopener noreferrer" size="x-large" variant="flat" to="/Minecraft" >
            <v-icon icon="mdi:mdi-minecraft" size="large" start/>
            マインクラフト
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn color="deep-purple-darken-1" min-width="228" rel="noopener noreferrer" size="x-large" variant="flat" to="/SNS" >
            <youtube-icon style="fill:white; margin-right: 15px;" class="custom-class"></youtube-icon>
            <twitter-icon style="fill:white; margin-right: 15px;" class="custom-class"></twitter-icon>
            <discord-icon style="fill:white; margin-right: 15px;" class="custom-class"></discord-icon>
            SNS
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn color="#1E88E5" min-width="228" rel="noopener noreferrer" size="x-large" variant="flat" to="/Contact" >
            <v-icon icon="mdi:mdi-gmail" size="large" start />
            お問い合わせ
          </v-btn>
        </v-col>
      </v-row>
        <div class="py-5" />
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
  
  <style>


</style>