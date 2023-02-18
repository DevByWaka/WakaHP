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
            {img:'/src/assets/features/waka.png',title:'基本メニュ',subtitle:'waka',text:"[/waka]でメニューを出せるぞ"},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'瞬時にテレポート',subtitle:'UltraSetHome',text:'[/sethome 場所の名前]で今いるところを登録して[/homes]から選べる'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'座れるぞ',subtitle:'GSit',text:"[/sit]座る(階段に触れても座れる)\n[/crawl]泳ぐ\n[/spin]回る"},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'死んでも安心？',subtitle:'actp,acfetch',text:'死んだ場所にエンジェルチェストができてインベントリのアイテム入ります。[/actp]でエンジェルチェストにテレポートできます。[/acfetch]で自分のところにエンジェルチェストを呼ぶことができます。[/waka]にもあります。'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'お金',subtitle:'money',text:'[/money]で自分のお金表示。[/money pay プレーヤー名 金額]お金を渡す。お金はターミナルで使用できます。'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'大事な物はガギをかけよう！チェスト.ドア.ホッパーなど',subtitle:'lwcx',text:'[/lock]して右クリックで自分だけ開ける。[/cpassword パスワード]して右クリックでパスワードを知ってる人が開けれる。[/unlock]して右クリックでロック解除'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'オオカミが強化',subtitle:'MyDog',text:'オオカミはモブを倒すとレベルアップして攻撃力が上がります。'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'チェストをアイテムごと持つ！',subtitle:'PortableChest',text:'チェストを壊しても、アイテムはそのまま持ち歩けます。'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'アイテムや新要素は資材ワールドで！',subtitle:'ResourceWorld',text:'[/waka]から行けるワールド。アイテム取り放題。新要素なども！。毎日リセットされるので建築しても消えます。'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'敵や動物をタマゴにしよう！',subtitle:'MobsToEggs',text:'[ダイヤモンド10こ]を持ってる状態で、タマゴを敵や動物に当てると[ダイヤモンド10こ]を消費してモブをタマゴにできる。モブのタマゴをスポナーに使うと、そのモブのスポナーになる！'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'スポナーを回収しよう',subtitle:'SilkSpawners',text:'シルクタッチのツルハシでスポナーを回収できます！'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'夜は嫌？',subtitle:'Harbor',text:'みんなが寝なくても自分が寝たら朝になるぞ！'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'音楽の時間',subtitle:'GMusic',text:'wakaサーバーは変なレコードあるかも。'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'エレベーターを作ろう',subtitle:'IronElevator',text:'上の階と下の階の直線上に[鉄ブロック]を置くとジャンプとスニークで行き来できる！'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'看板を直したい',subtitle:'SmartSignEditor',text:'[羽]で看板を書き直せる。'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'古いバージョンの人～ﾉｼ',subtitle:'ViaBackwards',text:'wakaサーバーは古いクライアント参加できます。'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'買い物しよう',subtitle:'VillagerMarket',text:'ターミナルの村人はお店をやっています。'},
            {img:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',title:'木は一発で破壊',subtitle:'SmoothTimber',text:'スニーク状態で原木にオノを使うと一発で壊せます。'},
          ]
        }
      }
    }
  </script>