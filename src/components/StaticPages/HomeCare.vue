<template>
  <div class="">
    <breadcrumb v-if="!$q.platform.is.mobile" class="col-12 breadcrumb"/>
    <section id="presentation">
      <presentation :presentationContent="presentationContent" />
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
  </div>
</template>

<script>
import Breadcrumb from '../Breadcrumbs.vue'
import Presentation from './Presentation.vue'
import Features from '../Features.vue'
import Auxiliaries from '../AuxiliariesGallery.vue'
import CarouselMedia from '../CarouselMedia.vue'

export default {
  metaInfo: {
    title: 'Aide à domicile',
    meta: [
      { name: 'description', content: "Services d’aide à domicile (repas, toilettes, aide au lever…) proposés aux personnes âgées par les 'auxiliaires d’envie' Alenvi." }
    ]
  },
  components: {
    Breadcrumb,
    Presentation,
    Features,
    Auxiliaries,
    CarouselMedia
  },
  data() {
    return {
      presentationContent: {
        title: 'Aide à domicile pour les personnes âgées',
        subtitle: 'Françoise et Sabine',
        text1: `Tous les matins, Sabine retrouve Françoise à son domicile. Après un petit café, Sabine aide Françoise à faire un brin de toilette. La préparation du repas est ensuite l’occasion de passer un bon moment ensemble. Sabine est contente de voir que Françoise apprécie le plat cuisiné ensemble. Elle la laisse ensuite prendre un peu de repos en attendant la visite de sa fille dans l’après-midi.`,
        text2: `C’est pour vivre et faire vivre ce type de moments que les auxiliaires d’envie se lèvent tous les matins.`,
        text3: `Nous sommes à la disposition de votre proche âgé pour l’aider dans ses gestes de la vie quotidienne et passer du temps de qualité avec lui.`,
        image: 'https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507049555/images/business/aide_domicile_16_10.jpg'
      },
      featuresContent: [
        {
          title: 'Mise en place sous 3 jours',
          text: `Nous vous rendons visite gratuitement pour discuter de votre besoin. L'accompagnement peut démarrer tout de suite.`,
          image: 'https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507021332/images/business/pictos/mise_en_place.png',
          backgroundColor: '#FFFFFF'
        },
        {
          title: 'Un accompagnement sur mesure',
          text: `Une équipe d'auxiliaires adaptée à vos besoins vous suit et fait évoluer ses prestations si nécessaire.`,
          image: 'https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507021333/images/business/pictos/sur_mesure.png',
          backgroundColor: '#FAF9F8'
        },
        {
          title: 'Entre 23 et 26€ / heure',
          text: `50% remboursé en crédit d'impôt. Prise en charge APA possible.`,
          image: 'https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507021333/images/business/pictos/tarif_horaire.png',
          link: 'https://blog.alenvi.io',
          backgroundColor: '#FFFFFF'
        }
      ],
      videoNumber: 4,
      videoLocation: ['accueil'],
      videoRoles: ['auxiliary']
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
</style>
