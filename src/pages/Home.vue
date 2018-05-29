<template>
  <q-page>
    <section id="presentation-picture" class="q-mb-xl">
      <!-- <img src="https://res.cloudinary.com/alenvi/image/upload/v1507193477/images/business/Home_4_2000.jpg" style="width: 100vw; height: 97vh"> -->
      <!-- <div> -->
        <!-- <q-parallax src="https://res.cloudinary.com/alenvi/image/upload/v1507193477/images/business/Home_4_2000.jpg" :height="875">
          <h5>J'accompagne Paulette, 87 ans</h5>
          <h1>Je suis Professionnelle de l'empathie !</h1>
        </q-parallax> -->
      <!-- </div> -->
      <transition-group enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" appear>
        <div v-if="show" key="fade1" class="gt-md main-bg" :style="{ backgroundImage: `url(${selectedQuote.backgroundLandscape})`}"></div>
        <div v-if="show" key="fade2" class="lt-lg main-bg" :style="{ backgroundImage: `url(${selectedQuote.backgroundPortrait})`}"></div>
        <div v-if="show" key="fade3" class="main-text-fix"><h1>{{selectedQuote.startQuote}}</h1></div>
        <div v-if="show" key="fade4" class="main-text"><h1>{{selectedQuote.middleQuote}}</h1></div>
        <div v-if="show" key="fade5" class="main-subtext">{{selectedQuote.author}}</div>
      </transition-group>
      <!-- <q-btn v-if="this.$route.meta.name != 'recrutement'" color="primary" big><a class="btn-call text-white" href="tel:+33179755475">Appeler le 01 79 75 54 75</a></q-btn> -->
      <q-btn v-if="$q.platform.is.desktop" class="main-button-call-to-action gt-md" icon="call" color="primary" size="lg"><a href="tel:+33179755475">Appeler au 01 79 75 54 75</a></q-btn>
      <!-- <q-btn v-if="$q.platform.is.mobile || $q.platform.is.ipad" round color="primary" size="lg" class="fixed z-top" icon="call" style="right: 18px; bottom: 18px" /> -->
    </section>
    <section v-if="!$q.platform.is.mobile" id="call-button" class="lt-lg a-pa-xl q-mb-xl row justify-center items-center">
      <q-btn icon="call" color="primary" size="lg"><a href="tel:+33179755475">Appeler au 01 79 75 54 75</a></q-btn>
    </section>
    <section v-if="$q.platform.is.mobile" id="call-button" class="a-pa-xl q-mb-xl row justify-center items-center">
      <q-btn icon="call" color="primary" size="lg"><a href="tel:+33179755475">Appeler au 01 79 75 54 75</a></q-btn>
    </section>
    <section id="presentation-writing" class="a-pa-xl q-mb-xl row justify-center items-center"> <!-- v-scroll="fadeInPresWriting" -->
      <!-- <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"> -->
        <div><!-- v-if="hasScrolledPresWriting" -->
          <h1 class="text-center">Nous réinventons l'accompagnement à domicile des personnes âgées</h1>
          <big class="text-justify">Alenvi part du constat que <strong>la valorisation du métier d'auxiliaire de vie a un impact positif sur la qualité de l'accompagnement</strong> apporté aux personnes âgées.
          En créant un cadre de travail innovant, Alenvi permet à ses auxiliaires d'«envie» d'exercer pleinement leur empathie pour faire <strong>beaucoup plus que du «maintien à domicile»</strong>.</big>
        </div>
      <!-- </transition> -->
    </section>
    <section id="presentation-banner" class="a-pa-xl q-mb-xl row justify-center items-center"><!-- v-scroll="fadeInPresBanner" -->
      <!-- <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"> -->
        <h1 class="no-margin">Les communautés d'auxiliaires mettent en place <strong>des solutions sur-mesure à un tarif social adapté</strong> à tous.</h1><!-- v-if="hasScrolledPresBanner" -->
      <!-- </transition> -->
    </section>
    <!-- <section id="mid-banner" :class="[{ 'q-mb-lg': $q.platform.is.mobile }]">
      <q-parallax
        v-if="$q.platform.is.desktop" class="q-mb-xl"
        src="https://res.cloudinary.com/alenvi/image/upload/c_fill,q_auto/v1507193477/images/business/Home_1_2000.jpg"
        :height="200" :speed="0.6" style="height:60vh">
         <img src="https://res.cloudinary.com/alenvi/image/upload/c_fill,q_auto/v1507193477/images/business/Home_1_2000.jpg" alt=""/>
      </q-parallax>
      <img class="responsive" v-if="$q.platform.is.mobile" src="https://res.cloudinary.com/alenvi/image/upload/c_fill,q_auto/v1507193477/images/business/Home_1_2000.jpg" alt="">
    </section> -->
    <section id="features" class="a-pa-xl q-mb-xl row items-center">
      <home-features />
    </section>
    <section id="auxiliaries-gallery" class="q-mb-xl">
      <!-- <h1 class="text-center title-margin-bottom">Les auxiliaires d'envie</h1> -->
      <auxiliaries-gallery :videoNumber="videoNumber" :videoLocation="videoLocation" :videoRoles="videoRoles"/>
    </section>
    <!-- <section id="formulaire-contact" class="q-mb-xl"> <\!-- class="row justify-center items-center q-mb-xl" -\-> -->
    <!--   <div class="row"> -->
    <!--     <div class="row col-lg-6 justify-center items-center"> -->
    <!--       <h1 class="text-center"> -->
    <!--         Décrivez-nous votre besoin -->
    <!--         <q-icon class="on-right" name="send"/> -->
    <!--       </h1> -->
    <!--     </div> -->
    <!--     <contact-form class="col-lg-4 contact-form" /> -->
    <!--   </div> -->
    <!-- </section> -->
    <section id="media" class="q-mb-xl">
      <carousel-media />
    </section>
    <!-- <section id="latest-articles" class="a-pa-xl q-mb-xl"> -->
    <!--    <\!-- <h1 class="text-center title-margin-bottom">Blog : les derniers articles</h1> -\-> -->
    <!--   <latest-articles /> -->
    <!-- </section> -->
  </q-page>
</template>

<script>
import Parallax from 'vue-parallaxy'
import HomeFeatures from '../components/HomeFeatures.vue'
import AuxiliariesGallery from '../components/AuxiliariesGallery.vue'
import LatestArticles from '../components/LatestArticles.vue'
import CarouselMedia from '../components/CarouselMedia.vue'
import ContactForm from '../components/ContactForm.vue'
import { debounce } from 'quasar'

export default {
  metaInfo: {
    title: 'Accueil',
    meta: [
      { name: 'description', content: "Les 'auxiliaires d’envie' Alenvi accompagnent à domicile les personnes âgées. Formés en continu sur les troubles cognitifs, ils les aident pour les gestes de la vie quotidienne et leur apportent une compagnie stimulante et humaine." }
    ]
  },
  components: {
    HomeFeatures,
    AuxiliariesGallery,
    LatestArticles,
    CarouselMedia,
    Parallax,
    ContactForm
  },
  data () {
    return {
      show: true,
      interval: null,
      selectedQuote: {},
      quotes: [
        {
          startQuote: 'Bien accompagner une personne âgée,',
          middleQuote: `C’est avant tout la valoriser.`,
          author: `Barbara, Professionnelle de l'empathie`,
          backgroundPortrait: 'https://res.cloudinary.com/alenvi/image/upload/c_scale,q_auto:low,w_1032/v1522747308/images/business/Barbara_portrait_S2.jpg',
          backgroundLandscape: 'https://res.cloudinary.com/alenvi/image/upload/c_scale,h_1381,q_auto:low/v1522747309/images/business/Barbara_paysage_S2.jpg'
        },
        {
          startQuote: 'Bien accompagner une personne âgée,',
          middleQuote: `C’est avant tout la laisser libre de ses choix.`,
          author: `Valérie, Professionnelle de l'empathie`,
          backgroundPortrait: 'https://res.cloudinary.com/alenvi/image/upload/c_scale,h_1050,q_auto:low/v1522747309/images/business/Valérie_portrait_S.jpg',
          backgroundLandscape: 'https://res.cloudinary.com/alenvi/image/upload/c_scale,h_1381,q_auto:low/v1522747309/images/business/Valérie_paysage_S.jpg'
        },
        {
          startQuote: 'Bien accompagner une personne âgée,',
          middleQuote: `C’est avant tout comprendre ce qu'elle ressent.`,
          author: `Isabelle, Professionnelle de l'empathie`,
          backgroundPortrait: 'https://res.cloudinary.com/alenvi/image/upload/c_scale,h_1050,q_auto:low/v1522747309/images/business/Isabelle_portrait_S.jpg',
          backgroundLandscape: 'https://res.cloudinary.com/alenvi/image/upload/c_scale,h_1381,q_auto:low/v1522747309/images/business/Isabelle_paysage_S.jpg'
        }
      ],
      hasScrolledPresWriting: false,
      hasScrolledPresBanner: false,
      // videoNumber: this.$q.platform.is.mobile ? 8 : 6,
      videoNumber: 6,
      videoLocation: ['accueil'],
      videoRoles: ['Auxiliaire']
    }
  },
  created () {
    this.carousel();
    console.log(this.getQuote);
  },
  computed: {
    getQuote () {
      return this.quotes[Math.floor(Math.random() * this.quotes.length)];
    }
  },
  methods: {
    fadeInPresWriting: debounce(position => {
      this.hasScrolledPresWriting = true;
      console.log(this.hasScrolledPresWriting);
    }, 50),
    fadeInPresBanner () {
      this.hasScrolledPresBanner = true;
    },
    carousel () {
      let i = 0;
      this.selectedQuote = this.quotes[i];
      this.interval = setInterval(() => {
        setTimeout(() => {
          this.show = false;
        }, 7500);
        this.show = true;
        this.selectedQuote = this.quotes[i++];
        if (i === 3) {
          i = 0;
        }
      }, 8000);
      // this.selectedQuote = this.getQuote;
    }
  },
  beforeDestroy () {
    clearInterval(this.interval);
  }
}
</script>

<style lang="stylus" scoped>
@import "~variables"

h1
  color: $primary
  margin-bottom: 3%

q-parallax h1, h5
  color: $primary

.main-bg
  // background-image: url("../assets/Barbara_landscape.jpg")
  height: 100vh
  background-position: center
  background-repeat: no-repeat
  background-size: cover

#presentation-writing
  @media (min-width: 1025px)
    height: 60vh

#presentation-banner
  background: $primary
  text-align: center
  //padding-left: 5vw
  //padding-right: 5vw
  @media (min-width: 1025px)
    height: 40vh

#presentation-banner h1
  color: white

.pres-writing
  font-weight: bold
  font-size: 1.2em

//#features
 // height: 50vh

//#auxiliaries-gallery
//  height: 70vh

//#media
  //height: 30vh

#about-us
  margin-top: 0
  padding-top: 6%

.section-margin
  margin-bottom: 3%

.title-margin-bottom
  margin-bottom: 3%

.section-margin-big
  margin-bottom: 6%

.main-text-fix
  position: absolute
  top: 20vh
  left: 3vw
  font-size: 2vh
  color: $primary
  font-family: alenviTitleFont
  text-align: center
  @media (max-width: 1700px)
    top: 20vh
    left: 3vw
    text-align: left
    font-size: 0.85em
  @media (max-width: 1200px)
    top: 5vh
    left: 5%
    right: 1vw
    font-size: 0.75em
    text-align: left
  @media (max-width: 575px)
    font-size: 8px
  @media (max-width: 320px)
    top: 2vh

.main-text-fix h1
  font-weight: bold

.main-text
  position: absolute
  top: 27vh
  left: 3vw
  font-size: 2vh
  color: $primary
  font-family: alenviTitleFont
  text-align: center
  @media (max-width: 1700px)
    top: 27vh
    left: 3vw
    font-size: 0.85em
    text-align: left
  @media (max-width: 1200px)
    top: 11vh
    left: 5%
    right: 1vw
    font-size: 0.75em
    text-align: left
  @media (max-width: 575px)
    font-size: 8px
  @media (max-width: 320px)
    top: 10vh

.main-text h1
  font-weight: bold

.main-subtext
  position: absolute
  top: 35vh
  left: 3vw
  font-size: 4vh
  text-align: center
  @media (max-width: 1700px)
    top: 35vh
    left: 3vw
    font-size: 1.6em
    text-align: left
  @media (max-width: 1200px)
    top: 23vh
    left: 5%
    right: 1vw
    font-size: 1.25em
    text-align: left
  @media (max-width: 575px)
    font-size: 1em

.main-button-call-to-action
  position: absolute
  top: 45vh
  left: 3vw

.a-pa-xl
  padding: 48px 48px
  @media (max-width: 1024px)
    padding: 24px 24px

#formulaire-contact
  margin-top: 5%
  @media (min-width: 1200px)
    background-color: #FAF9F8

.contact-form
  padding-left: 2%
  padding-right: 2%
  background-color: #FFFFFF
</style>
