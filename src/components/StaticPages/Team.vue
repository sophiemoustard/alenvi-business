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
      videoRoles: ['auxiliary', 'tech']
    }
  }
}
</script>

<style lang="stylus">

</style>
