<template lang="html">
  <div class="row">
    <q-window-resize-observable @resize="onResize" />
    <div class="col-sm-3 auxiliaries-container" v-for="auxiliary in auxiliaries" v-if="auxiliary.youtube" @click="openModal(auxiliary)">
      <img class="auxiliaries-size" :src="auxiliary.picture" alt="splash" />
      <div class="auxiliaries-icon-container">
        <q-icon class="auxiliaries-icon" name="play circle outline" color="white" size="500%"/>
      </div>
      <div class="auxiliaries-filter" :style="{ backgroundColor: auxiliary.backgroundColor }">
        <h3 class="auxiliaries-name">{{auxiliary.firstname}}</h3>
      </div>
    </div>
    <q-modal ref="basicModal" @close="closeModal()" :content-css="setVideoContainerSize()">
      <div class="absolute-right">
        <q-btn color="primary" @click="$refs.basicModal.close()">
          <q-icon name="close"></q-icon>
        </q-btn>
      </div>
      <iframe id="auxiliary-iframe" :src="video_link" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
    </q-modal>
  </div>
</template>

<script>
import { QBtn, QIcon, QModal, QVideo, QWindowResizeObservable } from 'quasar'
import _ from 'lodash'

export default {
  components: {
    QBtn,
    QIcon,
    QModal,
    QVideo,
    QWindowResizeObservable
  },
  props: [
    'videoNumber',
    'videoLocation',
    'videoRoles'
  ],
  data() {
    return {
      windowSize: {},
      video_link: '',
      auxiliaries: [],
      auxiliariesRaw: []
    }
  },
  async created() {
    const params = {
      role: this.videoRoles || '',
      location: this.videoLocation
    };
    const payload = _.pickBy(params);
    const auxiliariesRaw = await this.$http.get('https://alenvi-api.herokuapp.com/users/presentation', {
      params: payload
    });
    this.auxiliariesRaw = auxiliariesRaw.data.data.users;
    this.auxiliaries = this.auxiliariesRaw;
    this.shuffle(this.auxiliaries);
    if (this.auxiliaries[0].role == 'admin'
    || this.auxiliaries[0].role == 'coach'
    || this.auxiliaries[0].role == 'tech') {
      const first = this.auxiliaries.splice(0,1);
      this.auxiliaries.push(first[0]);
    }
    if (this.videoNumber) {
      if (this.windowSize.width < 1024) {
        this.auxiliaries.splice(this.videoNumber / 2);
      } else {
        this.auxiliaries.splice(this.videoNumber);
      }
    }
    for (let i = 0, j = 4, test = false; i < this.auxiliaries.length; i++) {
      if (this.auxiliaries[i].role == 'auxiliary') {
        if (i < j) {
          if (test) {
            this.auxiliaries[i].backgroundColor = i % 2 == 1 ? '#F070AA' : '#B61A6D';
          }
          else {
            this.auxiliaries[i].backgroundColor = i % 2 == 0 ? '#F070AA' : '#B61A6D';
          }
        } else {
          j += 4;
          test = !test;
          this.auxiliaries[i].backgroundColor = this.auxiliaries[i - 4].backgroundColor == '#F070AA' ? '#B61A6D' : '#F070AA';
          // this.auxiliaries[i].backgroundColor = i % 2 == 0 ? '#F070AA' : '#B61A6D';
        }
      } else {
        this.auxiliaries[i].backgroundColor = '#F29400';
      }
    }
  },
  methods: {
    openModal(auxiliary) {
      this.video_link = `${auxiliary.youtube.link}?autoplay=1&enablejsapi=1`;
      this.$refs.basicModal.open();
    },
    setVideoContainerSize() {
      let width = '50%';
      let height = '50%';
      if (this.windowSize.width < 1200) {
        width = '100%';
      }
      if (this.windowSize.height < 500) {
        height = '100%';
      }
      return {
        width,
        height
      }
    },
    onResize(size) {
      this.windowSize = size;
    },
    closeModal() {
      const iframe = document.getElementById('auxiliary-iframe').contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
    },
    shuffle(a) {
      for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
    }
  }
}

// auxiliaries: [
//   {
//     firstname: 'Maud',
//     lastname: 'Desnoës',
//     youtube: {
//       link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
//       location: 'accueil'
//     },
//     picture: 'statics/Maud.jpg',
//   },
//   {
//     firstname: 'Maud',
//     lastname: 'Desnoës',
//     youtube: {
//       link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
//       location: 'accueil'
//     },
//     picture: 'statics/Maud.jpg',
//   },
//   {
//     firstname: 'Maud',
//     lastname: 'Desnoës',
//     youtube: {
//       link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
//       location: 'accueil'
//     },
//     picture: 'statics/Maud.jpg',
//   },
//   {
//     firstname: 'Maud',
//     lastname: 'Desnoës',
//     youtube: {
//       link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
//       location: 'accueil'
//     },
//     picture: 'statics/Maud.jpg',
//   }
// ]
</script>

<style lang="stylus" scoped>

.auxiliaries-container
  position: relative
  cursor: pointer
  width: 100%
  max-height: 300px
  height: auto

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
  // vertical-align: middle
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
  display: table
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
