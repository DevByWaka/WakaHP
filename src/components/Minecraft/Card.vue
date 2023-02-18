<template>
  <div v-for="p in features_list" v-bind:key="p" class="d-flex justify-center">
    <v-card class="mx-auto; my-5" width="300" variant="outlined">
      <v-img :src=p.img height="100px" cover>
      <!--<v-img :src="`/src/assets/features/images/${p.subtitle}.png`" height="100px" cover>-->
      </v-img>

      <v-card-title>
        {{ p.title }}
      </v-card-title>

      <v-card-subtitle>
        {{ p.subtitle }}
      </v-card-subtitle>

      <v-card-text>
        {{ p.text }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
      props: [
        'features_list'
      ],
  }
</script>