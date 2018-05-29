<template>
  <div>
    <q-window-resize-observable @resize="onResize" />
    <q-modal v-model="toggleModal" :content-css="setVideoContainerSize()" class="scroll overflow-hidden">
      <div class="absolute-right">
        <q-btn color="primary" @click="closeModal">
          <q-icon name="close"></q-icon>
        </q-btn>
      </div>
      <iframe id="apply_typeform" :src="typeform_link" frameborder="0"></iframe>
    </q-modal>
  </div>
</template>

<script>

export default {
  model: {
    prop: 'toggleModal',
    event: 'change'
  },
  props: {
    toggleModal: Boolean,
    info: String,
  },
  data () {
    return {
      windowSize: {},
      typeform_link: this.info,
      showModal: this.toggleModal,
    }
  },
  methods: {
    setVideoContainerSize () {
      let width = '75%'
      let height = '75%'
      if (this.windowSize.width < 800) {
        width = '100%'
        height = '100%'
      }
      return {
        width,
        height
      }
    },
    onResize (size) {
      this.windowSize = size
    },
    closeModal () {
      this.showModal = false
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="stylus" scoped>

#apply_typeform
  width: 100%
  height: 100%

</style>
