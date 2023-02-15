<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="300" src="@/assets/WO.png" />

      <h1 class="text-h2 font-weight-bold">Waka公式<br>サイト</h1>
      <div class="text-body-5 font-weight-light mb-n1">Waka Game</div>

      <div class="py-10"/>

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn color="red-darken-1" min-width="228" rel="noopener noreferrer" size="x-large" variant="flat">
            <v-icon icon="mdi:mdi-checkbox-marked" size="large" start/>
            かならずよんでね
            <readme-dialog></readme-dialog>
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
    </v-responsive>
  </v-container>
</template>

<script>
import ReadmeDialog from '../components/DlgReadme.vue'
import { DiscordIcon,TwitterIcon ,YoutubeIcon,GmailIcon } from 'vue3-simple-icons'
export default {
  components: {
    ReadmeDialog,DiscordIcon, TwitterIcon ,YoutubeIcon,GmailIcon,
  }
}
</script>
