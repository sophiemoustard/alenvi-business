<template lang="html">
  <main class="">
    <!-- main presentation -->
    <section id="main-presentation" class="row section-margin">
      <div id="main-text-and-call" class="self-center col-md-5">
        <h1 class="main-section-title">Accompagner le quotidien, stimuler les envies.</h1>
        <h2 class="main-section-subtitle">Nous sommes des professionnels passionnés par notre métier. Nous créons des liens sur le long terme avec les personnes âgées.</h2>
        <q-btn color="primary" big>
          <a class="btn-call" href="tel:+33179755475">Appeler le 01 79 75 54 75</a>
        </q-btn>
      </div>
      <div class="col-md-7">
        <q-gallery-carousel class="gallery-cropper" infinite autoplay :src="gallery"></q-gallery-carousel>
      </div>
    </section>
    <!-- features -->
    <section id="features" class="row layout-padding section-margin">
      <div v-for="feature in features" id="test" class="col-sm-4 feature-padding" :style="{ backgroundColor: feature.backgroundColor }">
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
      <div v-for="auxiliary in auxiliaries" class="col-sm-3 test-container">
        <img src="statics/Maud.jpg" alt="splash" width="100%" height="100%"/>
        <div class="auxiliaries-filter" :style="{ backgroundColor: auxiliary.backgroundColor }"></div>
      </div>
      <!-- <q-video src="https://www.youtube.com/embed/jvC2ywimFY0?wmode=opaque" style="width: 100%; height: 315px" /> -->
    </section>
  </main>
</template>

<script>
import {
  QGalleryCarousel,
  QBtn,
  QIcon,
  QVideo
} from 'quasar'

export default {
  components: {
    QGalleryCarousel,
    QBtn,
    QIcon,
    QVideo
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

<style lang="css" scoped>

#main-presentation {
  background-color: #FAF9F8;
}

#main-text-and-call {
  padding-left: 5%;
  padding-right: 5%;
}

.test-container {
  position: relative;
  /*height: 100%;*/
}

.test-container:hover:before {
  content:'';
  position:absolute;
  top: 42%;
  left:48%;
  display:inline-block;
  width: 0;
  height: 0;
  border-top: 35px solid transparent;
  border-left: 40px solid rgba(255, 255, 255, .5);
  border-bottom: 35px solid transparent;
}

.auxiliaries-filter {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.7;
  /*background-color: pink;*/
}

.auxiliaries-filter:hover {
  opacity: 0;
}

.main-section-title {
  font-size: 2.8em;
}

.main-section-subtitle {
  font-size: 1.5em;
}

.gallery-cropper {
  width: 100%;
  height: auto;
  max-height: 500px;
  /*border-radius: 145px 0 0 0;*/
  -webkit-clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.section-margin {
  margin-bottom: 3%;
}

.main-picto {
  width: 100px;
  height: 100px;
}

.feature-text {
  text-align: justify;
  padding-left: 10%;
  padding-right: 10%;
}

.feature-background {
  background-color: #FAF9F8;
}

.feature-padding {
  padding-top: 2%;
  padding-bottom: 2%;
}

.q-btn {
  font-weight: bold;
}

.align-center {
  text-align: center;
}

</style>
