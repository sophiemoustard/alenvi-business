<template lang="html">
  <div class="">
    <breadcrumb class="col-12 breadcrumb"/>
    <section id="auxiliaries-gallery" class="section-margin">
      <auxiliaries-gallery :videoNumber="videoNumber" :videoLocation="videoLocation" :videoRoles="videoRoles"/>
    </section>
  </div>
</template>

<script>
import Breadcrumb from '../Breadcrumbs.vue'
import AuxiliariesGallery from '../AuxiliariesGallery.vue'

export default {
  components: {
    Breadcrumb,
    AuxiliariesGallery
  },
  data() {
    return {
      videoNumber: '',
      videoLocation: ['accueil', 'team'],
      videoRoles: ['auxiliary', 'tech', 'coach']
    }
  }// https://puu.sh/xJhc9/d5777c1bc9.png
}// https://puu.sh/xJhcG/24789e1731.png
</script>

<style lang="stylus">
  .section-margin
    margin-bottom: 3%
</style>
