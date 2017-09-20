<template lang="html">
  <div class="row layout-padding">
    <div v-for="feature in features" class="col-sm-4 feature-padding" :style="{ backgroundColor: feature.backgroundColor }">
      <div class="text-center">
        <img class="main-picto" :src="feature.image" alt="">
        <h2>{{feature.title}}</h2>
      </div>
      <p class="feature-text">{{feature.text}}</p>
      <div class="text-center">
        <a href="#">En savoir plus</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
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
</style>
