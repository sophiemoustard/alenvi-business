<template>
  <q-page padding>
    <breadcrumb v-if="!$q.platform.is.mobile" class="col-12 breadcrumb"/>
    <section class="row">
      <h1 class="col-12 text-center title-margin-bottom">Sortie d’hôpital pour les personnes âgées</h1>
      <div id="pres-text" class="col-lg-6 self-center">
        <!-- <h1 class="col-12 text-center title-margin-bottom">{{presentationContent.title}}</h1> -->
        <h2>Madeleine et Nathalie</h2>
        <p>Madeleine est rentrée récemment du service de soins de suite et de réadaptation. Elle a du mal à se déplacer et se fatigue très vite, même en restant chez elle. Nathalie vient la voir deux fois par jour. Ensemble elles peuvent ainsi faire la toilette, les repas et s’occuper un peu de la maison. Elles passent un bon moment. Nathalie est fascinée par toutes les histoires que Madeleine lui raconte au sujet de sa vie passée. Tous les week-ends, Nathalie est relayée par Sophie.
        Les auxiliaires d’envie mobilisent toute leur expérience et leur envie pour aider leurs bénéficiaires à réussir leur retour à domicile. Leur mission est pleinement réussie quand l’autonomie se rétablit au fur et à mesure et qu’on a de moins en moins besoin d’eux.</p>
        <!-- <q-btn color="red" big>
          <a class="btn-call" @click="$refs.infoModal.openModal('https://alenvi.typeform.com/to/j8Zn47')">Demande en ligne</a>
        </q-btn> -->
        <q-btn color="primary" big>
          <a class="btn-call" href="tel:+33176284028">Appeler le 01 76 28 40 28</a>
        </q-btn>
        <!-- <p id="online-asking" @click="showModal = true">Demande en ligne</p> -->
        <typeform-modal v-model="showModal" info="https://alenvi.typeform.com/to/Hq6cm5" @closeModal="showModal = false"/>
      </div>
      <div class="col-lg-6 text-center self-center">
        <img class="img-size" src="https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507047952/images/business/sortie_hopital_16_10.jpg" alt="">
      </div>
    </section>
    <section id="features">
      <features :featuresContent="featuresContent" />
    </section>
    <section id="auxiliaries">
      <auxiliaries :videoNumber="videoNumber" :videoLocation="videoLocation" :videoRoles="videoRoles"/>
    </section>
    <section id="carousel-media">
      <carousel-media />
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
    title: "Sortie d'hôpital",
    meta: [
      { name: 'description', content: "Les 'auxiliaires d’envie' aident votre proche âgé à réussir son retour à domicile à la suite d’une hospitalisation." }
    ],
    script: [
      { innerHTML: '{ "@context": "http://schema.org", "@type": "Service", "url": "https://www.alenvi.io/sortie-hopital", "name": "Sortie d\'hôpital", "description": "Réussir le retour à domicile de votre proche âgé suite à une hospitalisation" }', type: 'application/ld+json' }
    ]
  },
  components: {
    Breadcrumb,
    TypeformModal,
    Features,
    Auxiliaries,
    // CarouselMedia
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
