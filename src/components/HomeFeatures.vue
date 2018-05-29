<template>
  <!-- <div :class="['row', { 'q-px-xl': !getMd } ]">
    <q-window-resize-observable @resize="onResize" />
    <div v-if="!getMd" v-for="(feature, index) in featuresContent" :key="index" class="col-xs-12 col-md-4 square" @click="goTo(feature.link)">
      <div class="row justify-center items-center q-py-md">
        <div class="q-pb-md">
          <img class="main-picto" :src="feature.image" :alt="`picto-${feature.title.split(' ').join('').toLowerCase()}`">
        </div>
        <div>
          <h2 class="text-center">{{feature.title}}</h2>
          <p :class="['text-justify', { 'q-px-lg': !getMd } ]">{{feature.text}}</p>
        </div>
      </div>
    </div>
    <div v-if="getMd" v-for="(feature, index) in featuresContent" :key="index" class="col-xs-12 row justify-center items-center" :style="{ backgroundColor: feature.backgroundColor, height: '25vh' }" @click="goTo(feature.link)">
      <h1 class="no-margin" :style="{ color: feature.color }">{{ feature.title }}</h1>
    </div>
  </div> -->
  <div class="row gutter-sm">
    <div v-for="(feature, index) in features" :key="index" class="col-xs-12 col-md-4 row items-stretch">
      <q-card class="cursor-pointer hover-shadow card-border" flat @click.native="goTo(feature.link)">
        <q-card-media>
          <img :src="feature.image" :alt="`${feature.title.split(' ').join('').toLowerCase()}`">
        </q-card-media>
        <q-card-title class="text-center">
          <h5 class="card-title">{{ feature.title }}</h5>
        </q-card-title>
        <q-card-main>
          <div class="q-subheading text-justify">{{ feature.text }}</div>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      features: [
        {
          title: 'Aide à domicile',
          text: 'Nous assistons votre proche pour les tâches de la vie quotidienne et passons de bons moments avec lui.',
          link: '/aide-a-domicile',
          image: 'https://res.cloudinary.com/alenvi/image/upload/c_scale,q_auto:eco,w_1050/v1522752580/images/business/Aide_a%CC%80_domicile_S.jpg',
          backgroundColor: '#E2007A',
          color: 'white',
          titleColor: 'white'
        },
        {
          title: 'Compagnie & stimulation',
          text: 'Formés en continu sur les troubles cognitifs, nous sommes là pour aider votre proche à conserver des activités : promenades, jeux...',
          link: '/compagnie',
          image: 'https://res.cloudinary.com/alenvi/image/upload/c_scale,q_auto:eco,w_1050/v1522752581/images/business/Compagnie_et_stimulation_S.jpg',
          backgroundColor: 'white',
          color: '#E2007A',
          titleColor: '#E2007A',
        },
        {
          title: `Sortie d'hôpital`,
          text: 'Nous aidons votre proche à retrouver son autonomie lorsqu’il regagne son domicile après un passage à l’hôpital.',
          link: '/sortie-hopital',
          image: 'https://res.cloudinary.com/alenvi/image/upload/c_scale,q_auto:eco,w_1050/v1522752580/images/business/Sortie_d_ho%CC%82pital_S.jpg',
          backgroundColor: '#E2007A',
          color: 'white',
          titleColor: 'white'
        }
      ]

    }
  },
  computed: {
    getMd () {
      return this.isMd;
    }
  },
  methods: {
    onResize (size) {
      if (size.width <= 768) {
        this.isMd = true;
      } else {
        this.isMd = false;
      }
    },
    goTo (path) {
      this.$router.push(path);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
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

.square
  border-radius: 2px
  background: transparent
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)
  cursor: pointer
  &:hover
    background: #FAF9F8

.alenvi-link
  &:hover
    color: #ff1693 !important

.hover-shadow
  transition: 0.8s cubic-bezier(0.25, 0.8, 0.5, 1)
  &:hover
    box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12) !important

.card-title
  color: $primary
  margin: 0
  @media (max-width: 400px)
    font-size: 1.4em

.card-border
  border: 1px solid rgba(0, 0, 0, .1)

.flex-card
  flex: 0 1 auto

.q-subheading
  @media (max-width: 768px)
    text-align: center

</style>
