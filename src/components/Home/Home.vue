<template lang="html">
  <main class="">
    <!-- main presentation -->
    <section id="main-presentation" class="row sm-gutter section-margin">
      <div id="main-text-and-call" class="self-center col-sm-5">
        <h1 class="main-section-title">Accompagner le quotidien, stimuler les envies.</h1>
        <h2 class="main-section-subtitle">Nous sommes des professionnels passionnés par notre métier. Nous créons des liens sur le long terme avec les personnes âgées.</h2>
        <q-btn>
          Appeler au 01 79 75 54 75
        </q-btn>
      </div>
      <div class="gallery-param col-sm-7">
        <q-gallery-carousel class="gallery-cropper" infinite autoplay :src="gallery"></q-gallery-carousel>
        <!-- <div class="half-background"></div> -->
      </div>
    </section>
    <!-- features -->
    <section id="features" class="row layout-padding justify-center section-padding">
      <div class="col-sm-4" align="center">
        <img class="image-center" src="statics/picto.png" alt="">
        <h5>Aide à domicile</h5>
        <p>Nous assistons votre proche pour les tâches de la vie quotidienne et passons de bons moments ensemble.</p>
      </div>
      <div class="col-sm-4" align="center">
        <img class="image-center" src="statics/picto.png" alt="">
        <h5>Compagnie & stimulation</h5>
        <p>Formés en continu sur les troubles cognitifs, nous sommes là pour aider votre proche à garder des activités : promenades, jeux...</p>
      </div>
      <div class="col-sm-4" align="center">
        <img class="image-center" src="statics/picto.png" alt="">
        <h5>Sortie d'hospitalisation</h5>
        <p>Nous aidons votre proche à retrouver son autonomie lorsqu’il regagne son domiciille après un passage à l’hôpital.</p>
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
        'statics/home_care.jpg',
        'statics/home_care.jpg'
      ]
    }
  }
}
</script>

<style lang="css" scoped>
#main-presentation {
  background-color: #FAF9F8;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
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
}

.half-background {
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  margin-left: -50%;
  margin-top: -15%;
  webkit-transform: rotate(8deg);
  ms-transform: rotate(8deg);
  transform: rotate(8deg);
  display: block;
  position: absolute;
  background-color: #faf9f8;
}
/*.section-margin {
  margin-bottom: 3%;
}*/
.image-center {
  width: 100px;
  height: 100px;
}

#main-text-and-call {
  padding-left: 5%;
  padding-right: 5%;
}

</style>
