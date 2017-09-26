<template lang="html">
  <div class="row"> <!-- main-pres-background -->
    <div id="main-text-and-call" class="col-lg-6 self-center">
      <h1>Accompagner le quotidien, stimuler les envies.</h1>
      <h2>Nous sommes des professionnels passionnés par notre métier. Nous créons des liens sur le long terme avec les personnes âgées.</h2>
      <q-btn color="primary" big>
        <a class="btn-call" href="tel:+33179755475">Appeler le 01 79 75 54 75</a>
      </q-btn>
      <p id="online-asking" @click="$refs.infoModal.openModal('https://alenvi.typeform.com/to/Hq6cm5')">Demande en ligne</p>
      <modal ref="infoModal"/>
      <!-- <q-btn color="primary" big>
        <a class="btn-call" href="tel:+33179755475">Appeler le 01 79 75 54 75</a>
      </q-btn> -->
    </div>
    <div class="col-lg-6 img-overlay self-center"> <!-- test-holder -->
      <!-- <img src="statics/home_care_1.jpg" alt=""> -->
      <q-gallery-carousel class="gallery-cropper" infinite autoplay :arrows="false" :src="gallery"></q-gallery-carousel>
      <svg viewBox="25 0 592 398">
        <path d="M27,71.5a71.43,71.43,0,0,0,2.48,18.73L105,399H-71V0H98.5A71.5,71.5,0,0,0,27,71.5Z" fill="#FFFFFF"/> <!-- #FAF9F8 -->
      </svg>
    </div>
  </div>
</template>

<script>
import {
  QGalleryCarousel,
  QBtn
} from 'quasar'

import Modal from '../Modal.vue'

export default {
  components: {
    QGalleryCarousel,
    QBtn,
    Modal
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

<style lang="stylus" scoped>
@import "~variables"

#main-presentation
  // background-color: #FAF9F8
  // max-height: 500px

#main-text-and-call
  padding-left: 5%
  padding-right: 5%
  @media (max-width: 991px)
    padding-bottom: 5%

#online-asking
  padding-top: 1%
  padding-left: 65px
  cursor: pointer
  color: $primary

.main-pres-background
  // background: linear-gradient(to right, #FAF9F8, white)
  // background: rgba(0, 0, 0, 0);
  background: #FAF9F8

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
  @media (max-width: 991px)
    display: none;

.img-overlay q-gallery-carousel
  width: 100%
  display: block
  height: auto

.q-btn
  font-weight: bold

</style>
