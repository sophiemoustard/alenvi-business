<template lang="html">
  <div>
    <q-window-resize-observable @resize="onResize" />
    <div class="text-center">
      <q-btn color="primary" big>
        <a class="btn-call" @click="$refs.basicModal.open()">POSTULER</a>
      </q-btn>
    </div>
    <q-modal ref="basicModal" :content-css="setVideoContainerSize()">
      <div class="absolute-right">
        <q-btn color="primary" @click="$refs.basicModal.close()">
          <q-icon name="close"></q-icon>
        </q-btn>
      </div>
      <iframe id="apply_typeform" src="https://alenvi.typeform.com/to/MwEMWk" frameborder="0"></iframe>
    </q-modal>
  </div>
</template>

<script>
import { QModal, QBtn, QWindowResizeObservable, QIcon } from 'quasar'

export default {
  components: {
    QModal,
    QBtn,
    QWindowResizeObservable,
    QIcon
  },
  data() {
    return {
      windowSize: {}
    }
  },
  methods: {
    setVideoContainerSize() {
      let width = '75%';
      let height = '75%';
      if (this.windowSize.width < 800) {
        width = '100%';
        height = '100%';
      }
      return {
        width,
        height
      }
    },
    onResize(size) {
      this.windowSize = size;
    }
  }
}
</script>

<style lang="stylus">

#apply_typeform
  width: 100%
  height: 100%

</style>
