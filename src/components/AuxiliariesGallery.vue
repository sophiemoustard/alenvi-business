<template lang="html">
  <div class="row">
    <div class="col-sm-3 auxiliaries-container" v-for="auxiliary in auxiliaries" v-if="auxiliary.youtube_link">
      <img src="statics/Maud.jpg" alt="splash" />
      <div class="auxiliaries-icon-container">
        <q-icon class="auxiliaries-icon" name="play circle outline" color="white" size="5rem"/>
      </div>
      <div class="auxiliaries-filter" :style="{ backgroundColor: auxiliary.backgroundColor }">
        <h4 class="auxiliaries-name">{{auxiliary.firstname}}</h4>
      </div>
    </div>
  </div>
  <!-- <q-video src="https://www.youtube.com/embed/jvC2ywimFY0?wmode=opaque" style="width: 100%; height: 315px" /> -->
</template>

<script>
import { QIcon } from 'quasar'

export default {
  components: {
    QIcon
  },
  data() {
    return {
      auxiliaries: [
        {
          firstname: 'Maud',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#F070AA'
        },
        {
          firstname: 'Maud',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#B61A6D'
        },
        {
          firstname: 'Maud',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#F070AA'
        },
        {
          firstname: 'Maud',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#B61A6D'
        },
        {
          firstname: 'Maud',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#B61A6D'
        },
        {
          firstname: 'Maud',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#F070AA'
        },
        {
          firstname: 'Maud',
          lastname: 'Desnoës',
          youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
          image: 'statics/Maud.jpg',
          backgroundColor: '#B61A6D'
        },
        {
          firstname: 'Maud',
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

.auxiliaries-container
  position: relative

.auxiliaries-container img
  width: 100%
  height: 100%

.auxiliaries-container:hover > .auxiliaries-icon-container
  opacity: 1

.auxiliaries-icon-container
  position: absolute
  display: table
  width: 100%
  height: 100%
  top: 0
  left: 0
  opacity: 0

.auxiliaries-icon
  display: table-cell
  text-align: center
  vertical-align: middle
  color: rgba(255, 255, 255, .5)

.auxiliaries-container:hover:before
  // content: ''
  // position: absolute
  // top: 42%
  // left:48%
  // display: inline-block
  // width: 0
  // height: 0
  // border-top: 35px solid transparent
  // border-left: 40px solid rgba(255, 255, 255, .5)
  // border-bottom: 35px solid transparent

.auxiliaries-filter
  position: absolute
  display: table;
  width: 100%
  height: 100%
  top: 0
  left: 0
  opacity: 0.7

.auxiliaries-filter:hover
  opacity: 0

.auxiliaries-name
  display: table-cell
  text-align: center
  vertical-align: middle
  color: white
  font-weight: bold

// .auxiliaries-name:hover
//   opacity: 0

</style>
