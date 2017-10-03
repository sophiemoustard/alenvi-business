<template>
  <div class="row md-gutter layout-padding">
    <div class="col-12">
      <div class="row justify-center">
        <h1>Blog : les derniers articles</h1>
      </div>
    </div>
    <div v-for="article in lastArticles" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
      <q-card class="card" flat>
        <q-card-media>
          <img class="img-articles" src="https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507019475/images/business/home_care_1.jpg" alt="photo article">
        </q-card-media>
        <q-card-title>
          {{ article.title | truncate('30') }}
        </q-card-title>
        <q-card-main class="card-content">
          {{ article.content | truncate('100') }}
          <q-card-actions align="center">
            <a class="text-primary" :href="article.link">En savoir plus</a>
          </q-card-actions>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import {
  QCard,
  QCardTitle,
  QCardMain,
  QCardActions,
  QCardMedia,
  QBtn,
  QIcon
} from 'quasar'

import Feedparser from 'feedparser'

export default {
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QCardActions,
    QCardMedia,
    QBtn,
    QIcon
  },
  filters: {
    truncate(string, value) {
      if (string.length > value) {
        return string.substring(0, value) + '...';
      }
      return string;
    }
  },
  data () {
    return {
      lastArticles: [
        {
          img: '',
          title: 'Article 1',
          content: 'Napo mocdo iv eh mit sal izvamip izjijfef taacamoc ku neosomuk agugowol puv sejalam hibtu nuhfegel hi. Tidjig oc lijo sap pefofca je raudze wimosoke adajif poir nadup kef gocji cotozek fo adhooja tivosa. Mocko nollam pefutu donsemze tescu bowdus mojmot emi lil er gofdet lu di. Ek imutzu pieka bozem lob bedfibu migih zaf eme oj icafuic omodagpo evtok jozti. Nugiw gofrim pe ta kofev wephapu lu lajugnu voctu wejago ij pohiilo lenva turci no. Sotvinzuz irama hume otjet altighuc gadogic go fakumu pom opokuzko ima velvu ko besaumi karwi ihiisa. Fuj isvejlo naoz dage rijvur olujesmab leogtal wulize mi zobonmoz ok ekoso tonan ejuritabe itoin ed.'
        },
        {
          img: '',
          title: 'Article 2',
          content: 'Lutaka otmaliv paj vazcif paavi jacefube vawujpem dezasik ecife huroez dukwab bomcimat irpara. Ti sav woji bubonsus lezwis natereg raf fuper mi fes up fepragkuw ra bojivfuf boti wih volmik. Ufcobo oj mug ki mo surwaw vettodbo pa ive nes me ji okpinfo pumed. Licuj udvoj aw be erca butruoh mogvoc gu kopke sorza higuv terteg su famdu tik dop gow dacocdih. Lof sevtek bovu vam jorpuwlat bo co edo keaco arsi ica ejlutdof reru egbip.'
        },
        {
          img: '',
          title: 'Article 3',
          content: 'Haalu huzi mo ka hu zawlad me ez mepi senpaj ji usbepwew lekojwig ticculi do pe seruh evdeb. Miedpi hawkef rucemun suhtipdo su ishe fozre nukjoj nalzeec kigaw fawo emlu fibiku zaw ittih ub. Li pobnehaki cifhinli zedcus lisok ved wovcikih di gur wa fefi onhahic insevek keru.'
        }
      ]
    }
  },
  async created () {
    try {
      var req = await this.$http('https://blog.alenvi.io/rss/');
      var feedparser = new Feedparser();
      var stream = this;
      stream.pipe(feedparser);

      feedparser.on('error', function (error) {
        throw new Error ('Feedparser error')
      });

      feedparser.on('readable', function () {
        var stream = this; // `this` is `feedparser`, which is a stream
        var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
        var item;

        while (item = stream.read()) {
          console.log(item);
        }
      });
    } catch (e) {
      console.error(e);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.img-articles
  width: 100%
  height: auto
  
.q-card-actions a:hover
  color: #ff1693 !important
</style>
