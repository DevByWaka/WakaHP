<template>
  <div class="fill-height">
    <plugin-card v-bind:plugin_list="list"></plugin-card>
  </div>
</template>

<script>
  import PluginCard from './PluginCard.vue'


  export default {
    components: {
      PluginCard,
    },
    methods:{
      async getName(){
      }
    },
    data: function() {
      return {
        list: [
          {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'座れるぞ',subtitle:'gsit',text:"[/sit]座る(階段に触れても座れる)\n[/crawl]泳ぐ\n[/spin]回る"},
          {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'Title2',subtitle:'SubTitle2',text:'Text2sssssssssss'}
        ]
      }
    }
  }
</script>