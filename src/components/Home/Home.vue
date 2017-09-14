<template lang="html">
  <main class="">
    <!-- main presentation -->
    <section id="main-presentation" class="row section-margin">
      <div id="main-text-and-call" class="col-md-5">
        <h1 class="main-section-title">Accompagner le quotidien, stimuler les envies.</h1>
        <h2 class="main-section-subtitle">Nous sommes des professionnels passionnés par notre métier. Nous créons des liens sur le long terme avec les personnes âgées.</h2>
        <q-btn color="primary" big>
          <a class="btn-call" href="tel:+33179755475">Appeler le 01 79 75 54 75</a>
        </q-btn>
      </div>
      <div class="col-md-7 img-overlay"> <!-- test-holder -->
        <!-- <img src="statics/home_care_1.jpg" alt=""> -->
        <q-gallery-carousel class="gallery-cropper" infinite autoplay :src="gallery"></q-gallery-carousel>
        <svg viewBox="25 0 592 398">
          <path d="M27,71.5a71.43,71.43,0,0,0,2.48,18.73L105,399H-71V0H98.5A71.5,71.5,0,0,0,27,71.5Z" fill="#FFFFFF"/>
        </svg>
      </div>
    </section>
    <!-- features -->
    <section id="features" class="row layout-padding section-margin">
      <div v-for="feature in features" class="col-sm-4 feature-padding" :style="{ backgroundColor: feature.backgroundColor }">
        <div class="text-center">
          <img class="main-picto" :src="feature.image" alt="">
          <h5>{{feature.title}}</h5>
        </div>
        <p class="feature-text">{{feature.text}}</p>
        <div class="text-center">
          <a href="#">En savoir plus</a>
        </div>
      </div>
    </section>
    <!-- auxiliaries -->
    <section id="auxiliaries" class="row section-margin">
      <div v-for="auxiliary in auxiliaries" class="col-sm-3 auxiliaries-container">
        <img src="statics/Maud.jpg" alt="splash" width="100%" height="100%"/>
        <div class="auxiliaries-filter" :style="{ backgroundColor: auxiliary.backgroundColor }"></div>
      </div>
    </section>
    <!-- <q-video src="https://www.youtube.com/embed/jvC2ywimFY0?wmode=opaque" style="width: 100%; height: 315px" /> -->

    <!-- Carousel Media -->
    <section id="media">
      <carousel-media></carousel-media>
    </section>

  </main>
</template>

<script>
import {
  QGalleryCarousel,
  QBtn,
  QIcon,
  QVideo,
  QCarousel,
  QCard,
  QCardTitle,
  QCardMain
} from 'quasar'

import CarouselMedia from '../CarouselMedia/CarouselMedia.vue'

export default {
  components: {
    QGalleryCarousel,
    QBtn,
    QIcon,
    QVideo,
    QCarousel,
    QCard,
    QCardTitle,
    QCardMain,
    CarouselMedia
  },
  data() {
    return {
      gallery: [
        'statics/home_care_1.jpg',
        'statics/home_care_2.jpg',
        'statics/home_care_3.jpg',
        'statics/home_care_4.jpg'
      ],
      features: [
        {
          title: 'Aide à domicile',
          text: 'Nous assistons votre proche pour les tâches de la vie quotidienne et passons de bons moments ensemble',
          link: '#',
          image: 'statics/picto.png',
          backgroundColor: '#FFFFFF'
        },
        {
          title: 'Compagnie & stimulation',
          text: 'Formés en continu sur les troubles cognitifs, nous sommes là pour aider votre proche à garder des activités : promenades, jeux...',
          link: '#',
          image: 'statics/picto.png',
          backgroundColor: '#FAF9F8'
        },
        {
          title: `Sortie d'hospitalisation`,
          text: 'Nous aidons votre proche à retrouver son autonomie lorsqu’il regagne son domicile après un passage à l’hôpital',
          link: '#',
          image: 'statics/picto.png',
          backgroundColor: '#FFFFFF'
        }
      ],
      auxiliaries: [
        {
          firstname: 'Guillaume',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#F070AA'
        },
        {
          firstname: 'Guillaume',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#B61A6D'
        },
        {
          firstname: 'Guillaume',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#F070AA'
        },
        {
          firstname: 'Guillaume',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#B61A6D'
        },
        {
          firstname: 'Guillaume',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#B61A6D'
        },
        {
          firstname: 'Guillaume',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#F070AA'
        },
        {
          firstname: 'Guillaume',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#B61A6D'
        },
        {
          firstname: 'Guillaume',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#F070AA'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

  #main-presentation
    // background-color: #FAF9F8
    // max-height: 500px


  #main-text-and-call
    background: linear-gradient(to right, #FAF9F8, white)
    padding-left: 5%
    padding-right: 5%

  .gallery-cropper
    width: 100%
    height: auto
    max-height: 500px

  .img-overlay
    position: relative

  .img-overlay svg
    position: absolute
    top: 0
    left: 0
    height: 100%

  .img-overlay q-gallery-carousel
    width: 100%
    display: block
    height: auto

  // .test-holder
  //   border-top-left-radius: 70px
  //   transform-origin: left top
  //   transform: skewX(12deg)
  //   overflow: hidden
  //
  // .test-holder q-gallery-carousel
  //   transform-origin: left top
  //   transform: skewX(-12deg)
  //   display: block
  //   height: auto
  //   width: 100%

  .auxiliaries-container
    position: relative
    // height: 100%

  .auxiliaries-container:hover:before
    content: ''
    position: absolute
    top: 42%
    left:48%
    display: inline-block
    width: 0
    height: 0
    border-top: 35px solid transparent
    border-left: 40px solid rgba(255, 255, 255, .5)
    border-bottom: 35px solid transparent

  .auxiliaries-filter
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    opacity: 0.7
    // background-color: pink

  .auxiliaries-filter:hover
    opacity: 0


  .main-section-title
    font-size: 2.8em

  .main-section-subtitle
    font-size: 1.5em

  .section-margin
    margin-bottom: 3%

  .main-picto
    width: 100px
    height: 100px

  .feature-text
    text-align: justify
    padding-left: 10%
    padding-right: 10%

  .feature-background
    background-color: #FFFFFF
    // background-color: #FAF9F8

  .feature-padding
    padding-top: 2%
    padding-bottom: 2%

  .q-btn
    font-weight: bold

</style>
