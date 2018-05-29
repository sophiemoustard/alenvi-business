<template>
  <q-page padding>
    <breadcrumb v-if="!$q.platform.is.mobile" class="col-12 breadcrumb"/>
    <section class="row">
      <h1 class="col-12 text-center title-margin-bottom">Aide à domicile pour les personnes âgées</h1>
      <div id="pres-text" class="col-lg-6 self-center">
        <!-- <h1 class="col-12 text-center title-margin-bottom">{{presentationContent.title}}</h1> -->
        <h2>Françoise et Sabine</h2>
        <p>Tous les matins, Sabine retrouve Françoise à son domicile. Après un petit café, Sabine aide Françoise à faire un brin de toilette. La préparation du repas est ensuite l’occasion de passer un bon moment toutes les deux. Sabine est contente de voir que Françoise apprécie le plat cuisiné ensemble. Elle la laisse ensuite prendre un peu de repos en attendant la visite de sa fille dans l’après-midi.
        C’est pour vivre et faire vivre ce type de moments que les auxiliaires d’envie se lèvent tous les matins.
        Nous sommes à la disposition de votre proche âgé pour l’aider dans ses gestes de la vie quotidienne et passer du temps de qualité avec lui.</p>
        <q-btn color="primary" big>
          <a class="btn-call" href="tel:+33179755475">Appeler le 01 79 75 54 75</a>
        </q-btn>
        <!-- <p id="online-asking" @click="showModal = true">Demande en ligne</p> -->
        <typeform-modal v-model="showModal" info="https://alenvi.typeform.com/to/Hq6cm5" @closeModal="showModal = false"/>
      </div>
      <div class="col-lg-6 text-center self-center">
        <img class="img-size" src="https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507049555/images/business/aide_domicile_16_10.jpg" alt="">
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
    title: 'Aide à domicile',
    meta: [
      { name: 'description', content: "Services d’aide à domicile (repas, toilettes, aide au lever…) proposés aux personnes âgées par les 'auxiliaires d’envie' Alenvi." }
    ],
    script: [
      { innerHTML: '{ "@context": "http://schema.org", "@type": "Service", "url": "https://www.alenvi.io/aide-a-domicile", "name": "Aide à domicile", "description": "Services d\'aide pour personnes âgées à domicile (repas, toilettes, aide au lever...)" }', type: 'application/ld+json' }
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
      presentationContent: {
        title: 'Aide à domicile pour les personnes âgées',
        subtitle: 'Françoise et Sabine',
        text1: `Tous les matins, Sabine retrouve Françoise à son domicile. Après un petit café, Sabine aide Françoise à faire un brin de toilette. La préparation du repas est ensuite l’occasion de passer un bon moment toutes les deux. Sabine est contente de voir que Françoise apprécie le plat cuisiné ensemble. Elle la laisse ensuite prendre un peu de repos en attendant la visite de sa fille dans l’après-midi.`,
        text2: `C’est pour vivre et faire vivre ce type de moments que les auxiliaires d’envie se lèvent tous les matins.`,
        text3: `Nous sommes à la disposition de votre proche âgé pour l’aider dans ses gestes de la vie quotidienne et passer du temps de qualité avec lui.`,
        image: 'https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507049555/images/business/aide_domicile_16_10.jpg'
      },
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
  @import "~variables"

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
