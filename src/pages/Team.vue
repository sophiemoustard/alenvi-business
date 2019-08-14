<template>
  <q-page padding>
    <breadcrumb v-if="!$q.platform.is.mobile" class="breadcrumb"/>
    <div class="row">
      <h1 class="col-12 text-center title-margin-bottom">Découvrez notre équipe engagée</h1>
    </div>
    <section id="auxiliaries-gallery" class="section-margin">
      <auxiliaries-gallery :videoNumber="videoNumber" :videoLocation="videoLocation" :videoRoles="videoRoles"/>
    </section>
  </q-page>
</template>

<script>
import Breadcrumb from '../components/Breadcrumbs.vue'
import AuxiliariesGallery from '../components/AuxiliariesGallery.vue'

export default {
  metaInfo: {
    title: 'Equipe',
    meta: [
      { name: 'description', content: 'Présentations en vidéo des collaborateurs d’Alenvi.' }
    ],
    script: [
      { innerHTML: '{ "@context": "http://schema.org", "@type": "Role", "name": "Equipe", "description": "Présentations en vidéo des collaborateurs d’Alenvi", "url": "https://www.alenvi.io/equipe" }', type: 'application/ld+json' }
    ]
  },
  components: {
    Breadcrumb,
    AuxiliariesGallery
  },
  data () {
    return {
      videoNumber: '',
      videoLocation: ['accueil', 'team'],
      videoRoles: ['auxiliary', 'coach', 'admin']
    }
  }
}
</script>

<style lang="stylus" scoped>
.breadcrumb
  padding-left: 1%
  @media (max-width: 1024px) and (min-width: 320px)
    padding-left: 0%
  @media (min-width: 1199px)
    padding-left: 2.3%

.title-margin-bottom
  margin-bottom: 3%

.section-margin
  margin-bottom: 3%
</style>
