<template lang="html">
  <div class="">
    <section id="main-presentation">
      <main-presentation />
    </section>
    <!-- class="section-margin" -->
    <section id="features">
      <features :featuresContent="featuresContent"/>
    </section>
    <section id="auxiliaries-gallery" class="section-margin">
      <auxiliaries-gallery :videoNumber="videoNumber" :videoLocation="videoLocation" :videoRoles="videoRoles"/>
    </section>
    <section id="carousel-media">
      <carousel-media />
    </section>
    <section id="latest-articles">
      <latest-articles />
    </section>
  </div>
</template>

<script>

import MainPresentation from './MainPresentation.vue'
import Features from '../Features.vue'
import AuxiliariesGallery from '../AuxiliariesGallery.vue'
import CarouselMedia from '../CarouselMedia.vue'
import LatestArticles from './LatestArticles.vue'

export default {

  metaInfo: {
    title: 'Accueil',
    meta: [
      { name: 'description', content: 'Home description' }
    ]
  },
  components: {
    MainPresentation,
    CarouselMedia,
    AuxiliariesGallery,
    Features,
    LatestArticles,
  },
  data() {
    return {
      videoNumber: 8,
      videoLocation: ['accueil'],
      videoRoles: ['auxiliary'],
      featuresContent: [
        {
          title: 'Aide à domicile',
          text: 'Nous assistons votre proche pour les tâches de la vie quotidienne et passons de bons moments ensemble',
          link: '/aide-a-domicile',
          image: 'statics/picto.png',
          backgroundColor: '#FFFFFF'
        },
        {
          title: 'Compagnie & stimulation',
          text: 'Formés en continu sur les troubles cognitifs, nous sommes là pour aider votre proche à garder des activités : promenades, jeux...',
          link: '/compagnie',
          image: 'statics/picto.png',
          backgroundColor: '#FAF9F8'
        },
        {
          title: `Sortie d'hôpital`,
          text: 'Nous aidons votre proche à retrouver son autonomie lorsqu’il regagne son domicile après un passage à l’hôpital',
          link: '/sortie-hopital',
          image: 'statics/picto.png',
          backgroundColor: '#FFFFFF'
        }
      ]
    }
  }
  // created() {
  //   document.title = 'Accueil | Alenvi';
  //   let meta = document.createElement('meta');
  //   meta.setAttribute('name', 'description');
  //   meta.setAttribute('content', 'Accueil description');
  //   document.getElementsByTagName('head')[0].appendChild(meta);
    // let meta = document.createElement('meta');
    // meta.setAttribute('name', 'description');
    // meta.setAttribute('content', 'Accueil description');
  // }
}
</script>

<style lang="stylus" scoped>

.section-margin
  margin-bottom: 3%

</style>
