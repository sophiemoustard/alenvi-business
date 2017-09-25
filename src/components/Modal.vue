<template lang="html">
  <div>
    <q-window-resize-observable @resize="onResize" />
    <q-modal ref="basicModal" :content-css="setVideoContainerSize()">
      <div class="absolute-right">
        <q-btn color="primary" @click="$refs.basicModal.close()">
          <q-icon name="close"></q-icon>
        </q-btn>
      </div>
      <iframe id="apply_typeform" :src="typeform_link" frameborder="0"></iframe>
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
      windowSize: {},
      typeform_link: ''
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
    },
    openModal(link) {
      this.typeform_link = link;
      this.$refs.basicModal.open();
    }
  }
}
</script>

<style lang="stylus">

#apply_typeform
  width: 100%
  height: 100%

</style>
