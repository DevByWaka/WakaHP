<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Waka公式サイト</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list
    >
      <v-list-item
        exact
        v-for="(item, i) in items"
        :key=i
        :to=item.to
      >
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
    </v-navigation-drawer>

    <v-main class="bg-blue-darken-1">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-minecraft',
          title: 'Minecraft',
          to: '/Minecraft',
        },
        {
          icon: 'mdi-youtube',
          title: 'SNS',
          to: '/SNS',
        },
        {
          icon: 'mdi-gmail',
          title: 'お問い合わせ',
          to: '/Contact',
        },
      ],
    }),
  }
</script>