<template lang="html">
  <main class="">
    <section id="main-presentation">
      <main-presentation />
    </section>
    <section id="features" class="section-margin">
      <features />
    </section>
    <section id="auxiliaries-gallery" class="section-margin">
      <auxiliaries-gallery />
    </section>
    <section id="carousel-media">
      <carousel-media />
    </section>
    <section id="latest-articles">
      <latest-articles />
    </section>
  </main>
</template>

<script>

import MainPresentation from './MainPresentation.vue'
import Features from './Features.vue'
import AuxiliariesGallery from '../AuxiliariesGallery.vue'
import CarouselMedia from './CarouselMedia.vue'
import LatestArticles from './LatestArticles.vue'

export default {
  components: {
    MainPresentation,
    CarouselMedia,
    AuxiliariesGallery,
    Features,
    LatestArticles
  }
}
</script>

<style lang="stylus" scoped>

.section-margin
  margin-bottom: 3%

</style>
