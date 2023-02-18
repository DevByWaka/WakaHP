<template>

    <v-container class="fill-height">
      <v-responsive class="d-flex align-center text-center fill-height">
        <!--<v-img contain height="300" src="@/assets/WO.png" />-->
        <v-parallax height="100%" src='@/assets/Minecraft/features/center.png'>
          <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);">
            <!--<h1 class="text-h5 font-weight-bold">マイクラ<br>Wakaサーバー</h1>
            <div class="text-body-5 font-weight-light mb-n1">Waka Game</div>-->
            <h1 class="font-weight-bold">マイクラ<br>Wakaサーバー</h1>
            <div class="text-body-5 font-weight-light mb-n1">Waka Game</div>
          </div>
        </v-parallax>
        <div class="py-5" />
        <!--参加方法-->
        <div style="background-color: #43A047" class="px-5">
          <v-row class="d-flex align-center justify-center">
            <v-col cols="auto">
              <h1>参加方法</h1>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center justify-center">
            <v-col cols="auto"><!--統合版-->
              <p>統合版は以下のボタンを押して追加</p>
              <v-btn color="light-blue-darken-1" min-width="228" rel="noopener noreferrer" size="x-large"  href="minecraft:///?addExternalServer=+Waka%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC|waka1210mc.ddns.net:25565">
                サーバーを追加する<br>(統合版)
              </v-btn>
              <p>
                <h2>◆追加されないときは以下のようにしてください◆</h2><br>
                <span>
                  サーバー名「好きな名前」
                  <br>
                  サーバーアドレス「waka1210mc.ddns.net」
                  <br>
                  ポート「25565」
                </span>
              </p>
              <v-img width="700px" src="@/assets/Minecraft/BEAddrPort.png" size="x-large"/>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center justify-center">
              <v-col cols="auto"><!--Java版-->
                <p>
                <h2>◆Java版は以下のようにしてください◆</h2><br>
                <span>
                  サーバー名「好きな名前」
                  <br>
                  サーバーアドレス「waka1210mc.ddns.net」
                  <br>
                  ポート「25565」
                </span>
              </p>
              <v-img width="700px" src="@/assets/Minecraft/JAVAAddrPort.png" size="x-large"/>
              </v-col>
          </v-row>
        </div>
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