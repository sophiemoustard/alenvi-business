<template>
  <div>
    <!-- <q-window-resize-observable @resize="onResize" /> -->
    <q-modal :value="value" @input="toggleModal" :content-css="setVideoContainerSize" class="scroll overflow-hidden">
      <div class="absolute-right">
        <q-btn color="primary" @click.native="closeModal">
          <q-icon name="close"></q-icon>
        </q-btn>
      </div>
      <iframe id="apply_typeform" :src="typeform_link" frameborder="0"></iframe>
    </q-modal>
  </div>
</template>

<script>

export default {
  // model: {
  //   prop: 'toggleModal',
  //   event: 'change'
  // },
  props: {
    value: Boolean,
    info: String,
  },
  data () {
    return {
      windowSize: {},
      typeform_link: this.info,
      // showModal: this.toggleModal,
    }
  },
  computed: {
    setVideoContainerSize () {
      // let width = '75%'
      // let height = '75%'
      // if (this.windowSize.width < 800) {
      //   width = '100%'
      //   height = '100%'
      // }
      return {
        width: '90vw',
        height: '90vh'
      }
    },
  },
  methods: {
    toggleModal (value) {
      this.$emit('input', value);
    },
    // onresize (size) {
    //   this.windowsize = size
    // },
    closeModal () {
      this.$emit('closeModal');
    }
  }
}
</script>

<style lang="stylus" scoped>

#apply_typeform
  width: 100%
  height: 100%

</style>
