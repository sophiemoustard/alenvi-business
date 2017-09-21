<template lang="html">
  <div class="row">
    <q-window-resize-observable @resize="onResize" />
    <div class="col-sm-3 auxiliaries-container" v-for="auxiliary in auxiliaries" v-if="auxiliary.youtube" @click="openModal(auxiliary)">
      <img :src="auxiliary.picture" alt="splash" />
      <div class="auxiliaries-icon-container">
        <q-icon class="auxiliaries-icon" name="play circle outline" color="white" size="5rem"/>
      </div>
      <div class="auxiliaries-filter" :style="{ backgroundColor: auxiliary.backgroundColor }">
        <h4 class="auxiliaries-name">{{auxiliary.firstname}}</h4>
      </div>
    </div>
    <q-modal ref="basicModal" @close="closeModal()" :content-css="setVideoContainerSize()">
      <!-- <q-video id="iframe" :src="video_link" style="width: 100%; height: 100%"/> -->
      <iframe id="auxiliary-iframe" :src="video_link" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
    </q-modal>
  </div>
  <!-- <q-video src="https://www.youtube.com/embed/jvC2ywimFY0?wmode=opaque" style="width: 100%; height: 315px" /> -->
</template>

<script>
import { QIcon, QModal, QVideo, QWindowResizeObservable } from 'quasar'

export default {
  components: {
    QIcon,
    QModal,
    QVideo,
    QWindowResizeObservable
  },
  data() {
    return {
      windowSize: {},
      video_link: '',
      auxiliaries: [],
      auxiliariesRaw: [],
      videoNumber: 8 || 8
    }
  },
  async created() {
    const auxiliariesRaw = await this.$http.get('http://localhost:3000/users/presentation', {
      params: {
        role: 'auxiliary',
        location: 'accueil'
      }
    });
    this.auxiliariesRaw = auxiliariesRaw.data.data.users;
    this.shuffle(this.auxiliaries);
    this.auxiliaries = this.auxiliariesRaw;
    if (this.windowSize.width < 1024) {
      this.auxiliaries = this.auxiliariesRaw;
      this.auxiliaries.splice(this.videoNumber / 2);
    } else {
      this.auxiliaries = this.auxiliariesRaw;
      this.auxiliaries.splice(this.videoNumber);
    }
    for (let i = 0; i < this.auxiliaries.length; i++) {
      if (i < 4) {
        this.auxiliaries[i].backgroundColor = i % 2 == 1 ? '#F070AA' : '#B61A6D';
      } else {
        this.auxiliaries[i].backgroundColor = i % 2 == 0 ? '#F070AA' : '#B61A6D';
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

  // {
  //   firstname: 'Maud',
  //   lastname: 'Desnoës',
  //   youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
  //   image: 'statics/Maud.jpg',
  //   backgroundColor: '#F070AA'
  // },
  // {
  //   firstname: 'Maud',
  //   lastname: 'Desnoës',
  //   youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
  //   image: 'statics/Maud.jpg',
  //   backgroundColor: '#B61A6D'
  // },
  // {
  //   firstname: 'Maud',
  //   lastname: 'Desnoës',
  //   youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
  //   image: 'statics/Maud.jpg',
  //   backgroundColor: '#F070AA'
  // },
  // {
  //   firstname: 'Maud',
  //   lastname: 'Desnoës',
  //   youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
  //   image: 'statics/Maud.jpg',
  //   backgroundColor: '#B61A6D'
  // },
  // {
  //   firstname: 'Maud',
  //   lastname: 'Desnoës',
  //   youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
  //   image: 'statics/Maud.jpg',
  //   backgroundColor: '#B61A6D'
  // },
  // {
  //   firstname: 'Maud',
  //   lastname: 'Desnoës',
  //   youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
  //   image: 'statics/Maud.jpg',
  //   backgroundColor: '#F070AA'
  // },
  // {
  //   firstname: 'Maud',
  //   lastname: 'Desnoës',
  //   youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
  //   image: 'statics/Maud.jpg',
  //   backgroundColor: '#B61A6D'
  // },
  // {
  //   firstname: 'Maud',
  //   lastname: 'Desnoës',
  //   youtube_link: 'https://www.youtube.com/embed/5KmBe0Ux6G4',
  //   image: 'statics/Maud.jpg',
  //   backgroundColor: '#F070AA'
  // }

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
