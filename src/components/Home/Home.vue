<template lang="html">
  <div class="layout-padding">
    <section id="main-presentation" class="row justify-center">
      <div class="col-sm-8">
        <h1>Test</h1>
      </div>
      <div class="gallery-cropper col-sm-4">
        <q-gallery-carousel class="gallery-cropper" infinite autoplay :src="gallery"></q-gallery-carousel>
      </div>
    </section>
  </div>
</template>

<script>
import {
  QGalleryCarousel
} from 'quasar'
export default {
  components: {
    QGalleryCarousel
  },
  data() {
    return {
      gallery: [
        'statics/companionship.jpg',
        'statics/companionship.jpg'
      ]
    }
  }
}
</script>

<style lang="css">
#main-presentation {
  background-color: blue;
}
.gallery-cropper {
  width: 100%;
  /*max-width: 90vw;*/
  /*border-top: 80px solid white;
  border-left: 80px solid red;*/

  /*height: 300px;*/
  /*background: red;*/
  /*position: relative;*/
}

.gallery-cropper:before {
  /*content: '';
  border-top: 80px solid white;
  border-left: 80px solid red;*/
  /*position: absolute;*/
  /*top: 0; right: 0;*/
  /*width: 0;*/
   /*display: inline;
   margin: 0 auto;
   height: 100%;
   width: auto;*/
}
</style>
