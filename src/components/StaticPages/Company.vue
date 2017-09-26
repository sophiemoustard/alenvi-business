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
        title: 'Compagnie et stimulation pour les personnes âgées',
        subtitle: 'Thierry et Dorothée',
        text1: `Chaque après-midi, Dorothée se rend chez Thierry. Selon l’humeur du jour, ils décident d’aller se promener, de faire un jeu, ou de simplement lire un livre ensemble. C’est souvent dur de se quitter, mais Dorothée s’en va avec un sentiment de fierté car elle sent Thierry plus apaisé qu’à son arrivée.`,
        text2: `Ce sont ces moments humains, de partage, qui aident les personnes touchées par des troubles cognitifs à se sentir mieux. Ils peuvent également freiner l’évolution de la maladie.`,
        text3: `Les auxiliaires d’envie sont là pour offrir ces moments d’apaisement à votre proche âgé.`,
        image: 'statics/compagnie.jpg'
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
      padding-left: 2.3%
</style>
