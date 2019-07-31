<template>
  <div class="row">
    <q-window-resize-observable @resize="onResize" />
    <!-- On Mobile -->
    <!-- <div class="col-sm-3 auxiliaries-container" v-for="(auxiliary, index) in auxiliaries" :key="index" v-if="$q.platform.is.mobile && auxiliary.youtube" @click="getVideo($event)" :id="'container-' + (index + 1)">
      <img :src="auxiliary.picture.link" alt="splash" />
      <div class="auxiliaries-icon-container-mobile" :ref="'video' + (index + 1)">
        <q-video :src="auxiliary.youtube.link" style="width: 100%; height: 100%"/>
      </div>
      <div class="auxiliaries-filter-mobile" :style="{ backgroundColor: auxiliary.backgroundColor }"></div>
      <div class="auxiliaries-name-container-mobile row justify-center">
        <div class="auxiliaries-name-mobile col-12 self-center">{{auxiliary.firstname}}</div>
        <div class="auxiliaries-name-mobile col-12"><q-icon name="play circle outline" size="2rem"/></div>
      </div>
    </div> -->
    <!-- On Desktop -->
    <div class="col-sm-2 auxiliaries-container" v-for="(auxiliary, index) in auxiliaries" :key="index" v-if="auxiliary.youtube" @click="openModal(auxiliary)">
      <img class="auxiliaries-size" :src="auxiliary.picture.link" alt="splash" />
      <div class="auxiliaries-icon-container row justify-center">
        <q-icon class="auxiliaries-icon self-center" name="play circle outline" color="white" size="5rem" style="display: inherit"/>
      </div>
      <div class="auxiliaries-filter" :style="{ backgroundColor: auxiliary.backgroundColor }"></div>
      <div class="auxiliaries-name-container row justify-center"><p class="auxiliaries-name self-center">{{auxiliary.identity.firstname}}</p>
      </div>
    </div>
    <q-modal v-model="opened" @hide="closeModal()" :content-css="setVideoContainerSize">
      <div class="absolute-right">
        <q-btn color="primary" @click="closeModal()">
          <q-icon name="close"></q-icon>
        </q-btn>
      </div>
      <iframe id="auxiliary-iframe" :src="video_link" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
    </q-modal>
  </div>
</template>

<script>
import _ from 'lodash'
import qs from 'qs'

export default {
  props: [
    'videoNumber',
    'videoLocation',
    'videoRoles'
  ],
  data () {
    return {
      opened: false,
      windowSize: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      video_link: '',
      auxiliaries: [],
      auxiliariesRaw: []
    }
  },
  async mounted () {
    // if (PROD) {
    //   this.isProd = true;
    // }
    const params = {
      role: this.videoRoles || '',
      location: this.videoLocation
    };
    const payload = _.pickBy(params);
    let auxiliariesRaw
    try {
      auxiliariesRaw = await this.$axios.get(`https://alenvi-api.herokuapp.com/users/presentation`, { // 'https://alenvi-api.herokuapp.com/users/presentation'
        params: payload,
        paramsSerializer (params) { // to send query array as key: [] and not 'key[]': []
          return qs.stringify(params, { indices: false })
        }
      });
    } catch (e) {
      console.error(e.response);
    }
    // console.log('AUXILIARIES ROLES', auxiliariesRaw.data.data.users);
    // this.auxiliariesRaw = auxiliariesRaw.data.data.users;
    // this.auxiliaries = this.auxiliariesRaw;
    this.auxiliaries = this.auxiliariesRaw = auxiliariesRaw.data.data.users;
    this.shuffle(this.auxiliaries);
    if (this.auxiliaries[0].role.name === 'admin' ||
        this.auxiliaries[0].role.name === 'coach') {
      const first = this.auxiliaries.splice(0, 1);
      this.auxiliaries.push(first[0]);
    }
    if (this.videoNumber) {
      this.auxiliaries = this.auxiliariesMobile;
      // this.auxiliaries.splice(this.videoNumber);
    }
    this.generateMosaic(this.auxiliaries);
  },
  computed: {
    setVideoContainerSize () {
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
    auxiliariesMobile () {
      if (this.windowSize.width < 600 && this.videoNumber > 4) {
        return this.auxiliariesRaw.slice(0, this.videoNumber / 2);
      } else {
        return this.auxiliariesRaw.slice(0, this.videoNumber);
      }
    }
  },
  methods: {
    openModal (auxiliary) {
      this.video_link = `${auxiliary.youtube.link}?autoplay=1?rel=0&enablejsapi=1`;
      this.opened = true;
    },
    onResize (size) {
      this.windowSize = size;
      if (this.videoNumber) {
        this.auxiliaries = this.auxiliariesMobile;
      }
      this.generateMosaic(this.auxiliaries);
      // if (this.videoNumber) {
      //   if (size.width < 600 && this.videoNumber > 4) {
      //     // console.log(this.auxiliaries.slice(this.videoNumber / 2));
      //     // console.log(this.auxiliariesMobile);
      //     // this.auxiliariesMobile;
      //   } else {
      //     this.auxiliaries.splice(this.videoNumber);
      //   }
      // }
    },
    closeModal () {
      const iframe = document.getElementById('auxiliary-iframe').contentWindow;
      iframe.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
      this.opened = false;
    },
    shuffle (a) {
      for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
    },
    getVideo (e) {
      const targetId = e.currentTarget.id;
      const num = targetId.replace(/^\D+/, '');
      const videoNum = `video${num}`;
      this.$refs[videoNum][0].style.zIndex = 4;
    },
    generateMosaic (auxiliaries) {
      for (let i = 0, j = 6, test = false; i < auxiliaries.length; i++) {
        if (auxiliaries[i].role.name === 'auxiliary') {
          if (i < j) {
            if (test) {
              auxiliaries[i].backgroundColor = i % 2 === 1 ? '#F070AA' : '#B61A6D';
            } else {
              auxiliaries[i].backgroundColor = i % 2 === 0 ? '#F070AA' : '#B61A6D';
            }
          } else {
            j += 6;
            test = !test;
            auxiliaries[i].backgroundColor = auxiliaries[i - 6].backgroundColor === '#F070AA' ? '#B61A6D' : '#F070AA';
            // this.auxiliaries[i].backgroundColor = i % 2 == 0 ? '#F070AA' : '#B61A6D';
          }
        } else {
          auxiliaries[i].backgroundColor = '#F29400';
        }
      }
    }
  }
}
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

.auxiliaries-container:hover > .auxiliaries-name-container
  opacity: 0

.auxiliaries-container:hover > .auxiliaries-filter
  opacity: 0

// .auxiliaries-container:visited > .auxiliaries-name-container
//   opacity: 0
//
// .auxiliaries-container:visited > .auxiliaries-filter
//   opacity: 0

.auxiliaries-icon-container
  position: absolute
  // display: inline-block
  // vertical-align: middle
  width: 100%
  height: 100%
  top: 0
  left: 0
  opacity: 0
  text-align: center

.auxiliaries-icon
  height: 100%
  color: rgba(255, 255, 255, .5)

.auxiliaries-name-container
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  text-align: center

.auxiliaries-name
  position: relative
  // width: 100%
  // height: 100%
  font-size: 30px
  color: white

.auxiliaries-filter
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  opacity: 0.7

.auxiliaries-icon-container-mobile
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  text-align: center
  z-index: -1

.auxiliaries-name-container-mobile
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  text-align: center
  z-index: 2

.auxiliaries-name-mobile
  position: relative
  // width: 100%
  height: 10%
  font-size: 30px
  color: white

.auxiliaries-filter-mobile
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  opacity: 0.7
  z-index: 1

</style>
