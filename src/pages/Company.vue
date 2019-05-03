<template>
  <q-page padding>
    <breadcrumb v-if="!$q.platform.is.mobile" class="col-12 breadcrumb"/>
    <section class="row"> <!-- pres-background -->
      <h1 class="col-12 text-center title-margin-bottom">Compagnie et stimulation pour les personnes âgées</h1>
      <div id="pres-text" class="col-lg-6 self-center">
        <!-- <h1 class="col-12 text-center title-margin-bottom">{{presentationContent.title}}</h1> -->
        <h2>Thierry et Dorothée</h2>
        <p>Chaque après-midi, Dorothée se rend chez Thierry. Selon l’humeur du jour, ils décident d’aller se promener, de faire un jeu, ou de simplement lire un livre ensemble. C’est souvent dur de se quitter, mais Dorothée s’en va avec un sentiment de fierté car elle sent Thierry plus apaisé qu’à son arrivée.
        Ce sont ces moments humains, de partage, qui aident les personnes touchées par des troubles cognitifs à se sentir mieux. Ils peuvent également ralentir l’évolution de la maladie.
        Spécialement formés en continu, les auxiliaires d’envie sont là pour offrir ces moments d’apaisement à votre proche âgé.</p>
        <q-btn color="primary" big>
          <a class="btn-call" href="tel:+33176284028">Appeler le 01 76 28 40 28</a>
        </q-btn>
        <!-- <p id="online-asking" @click="showModal = true">Demande en ligne</p> -->
        <typeform-modal v-model="showModal" info="https://alenvi.typeform.com/to/Hq6cm5" @closeModal="showModal = false"/>
      </div>
      <div class="col-lg-6 text-center self-center">
        <img class="img-size" src="https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507049556/images/business/compagnie_16_10.jpg" alt="">
      </div>
    </section>
    <section id="features">
      <features :featuresContent="featuresContent" />
    </section>
    <section id="auxiliaries">
      <auxiliaries :videoNumber="videoNumber" :videoLocation="videoLocation" :videoRoles="videoRoles"/>
    </section>
  </q-page>
</template>

<script>
import Breadcrumb from '../components/Breadcrumbs.vue'
import TypeformModal from '../components/TypeformModal'
import Features from '../components/Features.vue'
import Auxiliaries from '../components/AuxiliariesGallery.vue'

export default {
  metaInfo: {
    title: 'Compagnie',
    meta: [
      { name: 'description', content: "Les 'auxiliaires d’envie' passent du temps de qualité avec les personnes âgées à domicile : promenades, jeux, stimulation etc…" },
    ],
    script: [
      { innerHTML: '{ "@context": "http://schema.org", "@type": "Service", "url": "https://www.alenvi.io/compagnie", "name": "Compagnie", "description": "Temps de qualité avec les personnes âgées à domicile: promenades, jeux, stimulation, etc" }', type: 'application/ld+json' }
    ]
  },
  components: {
    Breadcrumb,
    TypeformModal,
    Features,
    Auxiliaries
  },
  data () {
    return {
      showModal: false,
      featuresContent: [
        {
          title: 'Mise en place sous\n 3 jours',
          text: `Nous vous rendons visite gratuitement pour discuter de votre besoin. L'accompagnement peut démarrer tout de suite.`,
          image: 'https://res.cloudinary.com/alenvi/image/upload/v1507194145/images/business/pictos/mise_en_place.png',
          backgroundColor: '#FFFFFF'
        },
        {
          title: 'Accompagnement sur\n mesure',
          text: `Une équipe d'auxiliaires adaptée à vos besoins vous suit et fait évoluer ses prestations si nécessaire.`,
          image: 'https://res.cloudinary.com/alenvi/image/upload/v1507194145/images/business/pictos/sur_mesure.png',
          backgroundColor: '#FAF9F8'
        },
        {
          title: 'Entre 23 et 26€ /\n heure',
          text: `50% remboursé en crédit d'impôt. Prise en charge APA possible.`,
          image: 'https://res.cloudinary.com/alenvi/image/upload/v1507194145/images/business/pictos/tarif_horaire.png',
          link: 'http://blog.alenvi.io/financement-aide-domicile',
          backgroundColor: '#FFFFFF'
        }
      ],
      videoNumber: 6,
      videoLocation: ['accueil'],
      videoRoles: ['Auxiliaire']
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.breadcrumb
  padding-left: 1%
  @media (max-width: 1024px) and (min-width: 320px)
    padding-left: 0%
  @media (min-width: 1199px)
    padding-left: 2.3%

.pres-background
  background: linear-gradient(to right, #FAF9F8, white)

h1
  // padding-left: 5%
  // padding-right: 5%
  @media (max-width: 991px)
    padding-bottom: 5%

#pres-text
  // padding-left: 5%
  // padding-right: 5%
  @media (max-width: 991px)
    padding-bottom: 5%

#online-asking
  padding-top: 1%
  padding-left: 57px
  cursor: pointer
  color: $primary

.title-margin-bottom
  margin-bottom: 3%

.img-size
  width: 78%
  max-width: 780px
  height: auto;
  @media (max-width: 1024px)
    width: 100%
    max-width: 100%
</style>
