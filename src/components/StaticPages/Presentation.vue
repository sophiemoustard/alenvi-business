<template lang="html">
  <div class="row"> <!-- pres-background -->
    <h1 class="col-12 text-center title-margin-bottom">{{presentationContent.title}}</h1>
    <div id="pres-text" class="col-lg-6 self-center">
      <h2>{{presentationContent.subtitle}}</h2>
      <p v-if="presentationContent.text1">{{presentationContent.text1}}</p>
      <p v-if="presentationContent.text2">{{presentationContent.text2}}</p>
      <p v-if="presentationContent.text3">{{presentationContent.text3}}</p>
      <!-- <q-btn color="red" big>
        <a class="btn-call" @click="$refs.infoModal.openModal('https://alenvi.typeform.com/to/j8Zn47')">Demande en ligne</a>
      </q-btn> -->
      <q-btn color="primary" big>
        <a class="btn-call" href="tel:+33179755475">Appeler le 01 79 75 54 75</a>
      </q-btn>
      <p id="online-asking" @click="$refs.infoModal.openModal('https://alenvi.typeform.com/to/Hq6cm5')">Demande en ligne</p>
      <modal ref="infoModal"/>
    </div>
    <div class="col-lg-6 text-center self-center">
      <img class="img-size" :src="presentationContent.image" alt="">
    </div>
  </div>
</template>

<script>
import { QBtn } from 'quasar'
import Modal from '../Modal.vue'

export default {
  components: {
    QBtn,
    Modal
  },
  props: {
    presentationContent: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.pres-background
  background: linear-gradient(to right, #FAF9F8, white)

#pres-text
  padding-left: 5%
  padding-right: 5%
  @media (max-width: 991px)
    padding-bottom: 5%

#online-asking
  padding-top: 1%
  padding-left: 65px
  cursor: pointer
  color: $primary

.title-margin-bottom
  margin-bottom: 3%

.img-size
  width: 75%
  max-width: 600px
  height: auto;
</style>
