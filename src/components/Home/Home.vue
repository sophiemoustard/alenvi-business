<template lang="html">
  <div class="">
    <section id="main-presentation">
      <main-presentation />
    </section>
    <!-- class="section-margin" -->
    <section id="features">
      <features :featuresContent="featuresContent"/>
    </section>
    <section id="auxiliaries-gallery">
      <h1 class="text-center title-margin-bottom">Les auxiliaires d'envie</h1>
      <auxiliaries-gallery :videoNumber="videoNumber" :videoLocation="videoLocation" :videoRoles="videoRoles"/>
    </section>
    <section id="carousel-media">
      <h1 id="about-us" class="text-center">Ils parlent de nous</h1>
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
      { name: 'description', content: "Les 'auxiliaires d’envie' Alenvi accompagnent à domicile les personnes âgées. Formés en continu sur les troubles cognitifs, ils les aident pour les gestes de la vie quotidienne et leur apportent une compagnie stimulante et humaine." }
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
          text: 'Nous assistons votre proche pour les tâches de la vie quotidienne et passons de bons moments avec lui.',
          link: '/aide-a-domicile',
          image: 'https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507021342/images/business/pictos/aide_domicile.png',
          backgroundColor: '#FFFFFF'
        },
        {
          title: 'Compagnie & stimulation',
          text: 'Formés en continu sur les troubles cognitifs, nous sommes là pour aider votre proche à conserver des activités : promenades, jeux...',
          link: '/compagnie',
          image: 'https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507021332/images/business/pictos/compagnie_stimulation.png',
          backgroundColor: '#FAF9F8'
        },
        {
          title: `Sortie d'hôpital`,
          text: 'Nous aidons votre proche à retrouver son autonomie lorsqu’il regagne son domicile après un passage à l’hôpital.',
          link: '/sortie-hopital',
          image: 'https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507021339/images/business/pictos/sortie_hopital.png',
          backgroundColor: '#FFFFFF'
        }
      ]
    }
  }
  // created() {
    // document.title = 'Accueil | Alenvi';
    // let meta = document.createElement('meta');
    // meta.setAttribute('name', 'description');
    // meta.setAttribute('content', 'Accueil description');
    // document.getElementsByTagName('head')[0].appendChild(meta);
    // let meta = document.createElement('meta');
    // meta.setAttribute('name', 'description');
    // meta.setAttribute('content', 'Accueil description');
  // }
}
</script>

<style lang="stylus" scoped>

#carousel-media
  background: #FAF9F8

#about-us
  margin-top: 0
  padding-top: 6%

.section-margin
  margin-bottom: 3%

.title-margin-bottom
  margin-bottom: 3%

.section-margin-big
  margin-bottom: 6%
</style>
