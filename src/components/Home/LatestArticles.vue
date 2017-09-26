<template>
  <div class="row md-gutter layout-padding">
    <div class="col-12">
      <div class="row justify-center">
        <h3><strong>Blog:</strong> les derniers articles</h3>
      </div>
    </div>
    <div v-for="article in lastArticles" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
      <q-card class="card" flat>
        <q-card-media>
          <img class="img-articles" src="statics/home_care_1.jpg" alt="photo article">
        </q-card-media>
        <q-card-title>
          {{ article.title | truncate('30') }}
        </q-card-title>
        <q-card-main class="card-content">
          {{ article.content | truncate('100') }}
          <q-card-actions align="end">
            <q-btn color="primary" small flat><q-icon name="add"></q-icon></q-btn>
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
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.img-articles
  width: 100%
  height: auto

</style>
