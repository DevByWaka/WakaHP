<template>
    <v-container class="fill-height">
      <v-responsive class="d-flex align-center text-center fill-height">
        <v-img contain height="300" src="@/assets/WO.png" />
  
        <h1 class="text-h2 font-weight-bold">SNS</h1>
        <div class="text-body-5 font-weight-light mb-n1">Waka Game</div>
  
        <div class="py-10" />
        <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn color="red-darken-1" min-width="228" rel="noopener noreferrer" size="x-large" variant="flat" to="/SNS" >
            <youtube-icon style="fill:white; margin-right: 15px;" class="custom-class"></youtube-icon>
            ユーチューブ
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="blue-darken-1" min-width="228" rel="noopener noreferrer" size="x-large" variant="flat" to="/SNS" >
            <twitter-icon style="fill:white; margin-right: 15px;" class="custom-class"></twitter-icon>
            ツイッター
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="deep-purple-darken-1" min-width="228" rel="noopener noreferrer" size="x-large" variant="flat" to="/SNS" >
            <discord-icon style="fill:white; margin-right: 15px;" class="custom-class"></discord-icon>
            ディスコード
          </v-btn>
        </v-col>
      </v-row>
      <div class="py-10" />
      </v-responsive>
    </v-container>
  </template>
  
  <script>
  import DlgContactMail from '../components/DlgContactMail.vue'
  import { DiscordIcon,TwitterIcon ,YoutubeIcon } from 'vue3-simple-icons'

  export default {
    components: {
      DlgContactMail,DiscordIcon, TwitterIcon ,YoutubeIcon,
    }
  }
  </script>
  