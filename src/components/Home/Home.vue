<template lang="html">
  <main class="">
    <!-- main presentation -->
    <section id="main-presentation" class="row sm-gutter section-margin">
      <div id="main-text-and-call" class="self-center col-md-5">
        <h1 class="main-section-title">Accompagner le quotidien, stimuler les envies.</h1>
        <h2 class="main-section-subtitle">Nous sommes des professionnels passionnés par notre métier. Nous créons des liens sur le long terme avec les personnes âgées.</h2>
        <q-btn color="primary">
          <a class="btn-call" href="tel:+33179755475">Appeler le 01 79 75 54 75</a>
        </q-btn>
      </div>
      <div class="col-md-7">
        <q-gallery-carousel class="gallery-cropper" infinite autoplay :src="gallery"></q-gallery-carousel>
        <!-- <div class="half-background"></div> -->
      </div>
    </section>
    <!-- features -->
    <section id="features" class="row layout-padding section-margin">
      <div class="col-sm-4">
        <div class="align-center">
          <img class="main-picto" src="statics/picto.png" alt="">
          <h5>Aide à domicile</h5>
        </div>
        <p class="feature-text">Nous assistons votre proche pour les tâches de la vie quotidienne et passons de bons moments ensemble.</p>
        <div class="align-center">
          <a href="#">En savoir plus</a>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="align-center">
          <img class="main-picto" src="statics/picto.png" alt="">
          <h5>Compagnie & stimulation</h5>
        </div>
        <p class="feature-text">Formés en continu sur les troubles cognitifs, nous sommes là pour aider votre proche à garder des activités : promenades, jeux...</p>
        <div class="align-center">
          <a href="#">En savoir plus</a>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="align-center">
          <img class="main-picto" src="statics/picto.png" alt="">
          <h5>Sortie d'hospitalisation</h5>
        </div>
        <p class="feature-text">Nous aidons votre proche à retrouver son autonomie lorsqu’il regagne son domiciille après un passage à l’hôpital.</p>
        <div class="align-center">
          <a href="#">En savoir plus</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import {
  QGalleryCarousel,
  QBtn,
  QIcon
} from 'quasar'
export default {
  components: {
    QGalleryCarousel,
    QBtn,
    QIcon
  },
  data() {
    return {
      gallery: [
        'statics/home_care_1.jpg',
        'statics/home_care_2.jpg',
        'statics/home_care_3.jpg',
        'statics/home_care_4.jpg'
      ]
    }
  }
}
</script>

<style lang="css" scoped>

#main-presentation {
  background-color: #FAF9F8;
}

#main-text-and-call {
  padding-left: 5%;
  padding-right: 5%;
}

.main-section-title {
  font-size: 2.8em;
  /*text-align: center;*/
}

.main-section-subtitle {
  font-size: 1.5em;
  /*text-align: center;*/
}

.gallery-cropper {
  /*width: 100%;
  height: auto;
  max-width: 90vw;*/
  width: 100%;
  height: auto;
  max-height: 500px;
}

.half-background {
  /*z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: -50%;
  margin-top: -15%;
  webkit-transform: rotate(8deg);
  ms-transform: rotate(8deg);
  transform: rotate(8deg);
  display: block;
  position: absolute;
  background-color: #faf9f8;*/
}

.section-margin {
  margin-bottom: 3%;
}

.main-picto {
  width: 100px;
  height: 100px;
}

.align-center {
  text-align: center;
}

.feature-text {
  text-align: justify;
  padding-left: 10%;
  padding-right: 10%;
}

</style>
