<template>
    <v-dialog v-model="dialog" activator="parent" width="auto">
        <v-card title="かならずよんでね" subtitle="おねがい">
            <v-card-text>
            
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
