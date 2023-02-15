<template>
    <v-dialog v-model="dialog" activator="parent" width="auto">
        <v-card title="かならずよんでね" subtitle="おねがい">
            <v-card-text>
            Waka公式サイトを御覧いただき有難うございます。<br>本サイト又はサービスを管理しております「Waka」です。<br>本サイトで紹介されているものは「Waka」が趣味で行っているものです。<br>利用される方は自己責任でお願い致します。<br>何か有りましたらメール、又はディスコード(マイクラ)でお問い合わせください。
            </v-card-text>
            <v-card-actions>
            <v-btn color="blue-lighten-1" variant="flat" block @click="dialog = false">とじる</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
