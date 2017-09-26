<template>
  <div class="">
    <breadcrumb class="col-12 breadcrumb"/>
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
        title: 'Sortie d’hôpital pour les personnes âgées',
        subtitle: 'Madeleine et Nathalie',
        text1: `Madeleine est rentrée récemment du service de soins de suite et de réadaptation. Elle a du mal à se déplacer et se fatigue très vite, même en restant chez elle. Nathalie vient la voir deux fois par jour. Ensemble elles peuvent ainsi faire la toilette, les repas et s’occuper un peu de la maison. Elles passent un bon moment. Nathalie est fascinée par toutes les histoires que Madeleine lui raconte au sujet de sa vie passée`,
        text2: `Les auxiliaires d’envie mobilisent toute leur expérience et leur envie pour aider leurs bénéficiaires à réussir leur retour à domicile. Leur mission est pleinement réussie quand l’autonomie se rétablit au fur et à mesure et qu’on a de moins en moins besoin d’eux.`,
        image: 'statics/sortie-hopital.jpg'
      },
      featuresContent: [
        {
          title: 'Mise en place sous 3 jours',
          text: `Nous vous rendons visite gratuitement pour discuter de votre besoin. L'accompagnement peut démarrer tout de suite`,
          image: 'statics/picto.png',
          backgroundColor: '#FFFFFF'
        },
        {
          title: 'Un accompagnement sur mesure',
          text: `Une équipe d'auxiliaires adaptée à vos besoins vous suit et fait évoluer ses prestations si nécessaire`,
          image: 'statics/picto.png',
          backgroundColor: '#FAF9F8'
        },
        {
          title: 'Entre 23 et 26€ / heure',
          text: `50% remboursé en crédit d'impôt. Prise en charge APA possible`,
          image: 'statics/picto.png',
          link: '#',
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
      padding-left: 2%
</style>
