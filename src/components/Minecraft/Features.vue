<template>
    <div class="red darken-1 fill-height" >
      <!--<plugin-card v-bind:features_list="list"></plugin-card>-->
      <v-row class="mb-6" no-gutters >
        <v-col v-for="p in list" v-bind:key="p" class="d-flex justify-center">
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
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
    import PluginCard from './Card.vue'
    import wakapng from '@/assets/Minecraft/features/waka.png'
  
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
            {img:wakapng,title:'基本メニュ',subtitle:'waka',text:"[/waka]でメニューを出せるぞ"},
            {img:wakapng,title:'瞬時にテレポート',subtitle:'UltraSetHome',text:'[/sethome 場所の名前]で今いるところを登録して[/homes]から選べる'},
            {img:wakapng,title:'座れるぞ',subtitle:'GSit',text:"[/sit]座る(階段に触れても座れる)\n[/crawl]泳ぐ\n[/spin]回る"},
            {img:wakapng,title:'死んでも安心？',subtitle:'AngelChest',text:'死んだ場所にエンジェルチェストができてインベントリのアイテム入ります。[/actp]でエンジェルチェストにテレポートできます。[/acfetch]で自分のところにエンジェルチェストを呼ぶことができます。[/waka]にもあります。'},
            {img:wakapng,title:'お金',subtitle:'money',text:'[/money]で自分のお金表示。\n[/money pay プレーヤー名 金額]お金を渡す。お金はターミナルで買い物に使います。'},
            {img:wakapng,title:'ボーナス！',subtitle:'CityRP: Paycheck',text:'長時間プレイしてボーナスをゲットしよう！'},
            {img:wakapng,title:'大事な物はガギをかけよう',subtitle:'lwcx',text:'[/lock]してチェスト.ドア.ホッパーなど右クリックで自分だけ開ける。[/cpassword パスワード]して右クリックでパスワードを知ってる人が開けれる。[/unlock]して右クリックでロック解除'},
            {img:wakapng,title:'オオカミが強化',subtitle:'MyDog',text:'オオカミはモブを倒すとレベルアップして攻撃力が上がります。'},
            {img:wakapng,title:'チェストをアイテムごと持つ',subtitle:'PortableChest',text:'チェストを壊しても、アイテムはそのまま持ち歩けます。'},
            {img:wakapng,title:'資材ワールド',subtitle:'ResourceWorld',text:'[/waka]から行けるワールド。アイテム取り放題。新要素なども！。毎日リセットされるので建築しても消えます。'},
            {img:wakapng,title:'敵や動物をタマゴにしよう！',subtitle:'MobsToEggs',text:'[ダイヤモンド10こ]を持ってる状態で、タマゴを敵や動物に当てると[ダイヤモンド10こ]を消費してモブをタマゴにできる。モブのタマゴをスポナーに使うと、そのモブのスポナーになる！'},
            {img:wakapng,title:'スポナーを回収しよう',subtitle:'SilkSpawners',text:'シルクタッチのツルハシでスポナーを回収できます！'},
            {img:wakapng,title:'夜は嫌？',subtitle:'Harbor',text:'みんなが寝なくても自分が寝たら朝になるぞ！'},
            {img:wakapng,title:'音楽の時間',subtitle:'GMusic',text:'wakaサーバーは変なレコードあるかも。'},
            {img:wakapng,title:'エレベーターを作ろう',subtitle:'IronElevator',text:'上の階と下の階の直線上に[鉄ブロック]を置くとジャンプとスニークで行き来できる！'},
            {img:wakapng,title:'看板を直したい',subtitle:'SmartSignEditor',text:'[羽]で看板を書き直せる。'},
            {img:wakapng,title:'古いバージョンの人でもOK！',subtitle:'ViaBackwards',text:'wakaサーバーは古いクライアント参加できます。'},
            {img:wakapng,title:'買い物しよう',subtitle:'VillagerMarket',text:'ターミナルの村人はお店をやっています。'},
            {img:wakapng,title:'木は一発で破壊',subtitle:'SmoothTimber',text:'スニーク状態で原木にオノを使うと一発で壊せます。'},
            {img:wakapng,title:'流れ星に願いを',subtitle:'Celeste',text:'流れ星が落ちてくる！レアアイテムかも？'},
            {img:wakapng,title:'爆破跡地',subtitle:'CreeperHeal(改造済み)',text:'クリーパーなど爆発してもその場にいれば勝手に治る！'},
            {img:wakapng,title:'エリートなモブ',subtitle:'EliteMobs',text:'強いモブがたまに出てくる！レアアイテムゲット！エリートコインでサーバー主が異世界へ案内します！'},
          ]
        }
      }
    }
  </script>