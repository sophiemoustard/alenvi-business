<template lang="html">
  <div class="">
    <breadcrumb v-if="!$q.platform.is.mobile" class="breadcrumb"/>
    <div class="row">
      <h1 class="col-12 text-center title-margin-bottom">Découvrez notre équipe engagée</h1>
    </div>
    <section id="auxiliaries-gallery" class="section-margin">
      <auxiliaries-gallery :videoNumber="videoNumber" :videoLocation="videoLocation" :videoRoles="videoRoles"/>
    </section>
  </div>
</template>

<script>
import Breadcrumb from '../Breadcrumbs.vue'
import AuxiliariesGallery from '../AuxiliariesGallery.vue'

export default {
  metaInfo: {
    title: 'Equipe',
    meta: [
      { name: 'description', content: "Présentations en vidéo des collaborateurs d’Alenvi." }
    ]
  },
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

<style lang="stylus" scoped>
.title-margin-bottom
  margin-bottom: 3%

.section-margin
  margin-bottom: 3%

.breadcrumb
  padding-left: 1%
  @media (max-width: 1024px) and (min-width: 320px)
    padding-left: 0%
  @media (min-width: 1199px)
    padding-left: 2.3%

</style>
