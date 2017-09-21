<template>
  <div class="row bg-gradient">
    <breadcrumb class="breadcrumb"/>
    <div class="row justify-center title">
      <h1>Sortie d’hôpital pour les personnes âgées</h1>
    </div>
    <section class="content">
      <div class="row items-start xl-gutter layout-padding">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <h2>Madeleine et Nathalie</h2>
          <p class="text-justify">
            Madeleine est rentrée récemment du service de soins de suite et de réadaptation. Elle a du mal à se déplacer et se fatigue très vite, même en restant chez elle. Nathalie vient la voir deux fois par jour. Ensemble elles peuvent ainsi faire la toilette, les repas et s’occuper un peu de la maison. Elles passent un bon moment. Nathalie est fascinée par toutes les histoires que Madeleine lui raconte au sujet de sa vie passée
          </p>
          <p>
            Les auxiliaires d’envie mobilisent toute leur expérience et leur envie pour aider leurs bénéficiaires à réussir leur retour à domicile. Leur mission est pleinement réussie quand l’autonomie se rétablit au fur et à mesure et qu’on a de moins en moins besoin d’eux.
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <img class="img-hospital" src="statics/sortie-hopital.jpg" alt="photo hopital">
        </div>
      </div>
    </section>
    <section class="info layout-padding">
      <info />
    </section>
  </div>
</template>

<script>
import Breadcrumb from '../Breadcrumbs.vue'
import Info from './Info.vue'

export default {
  components: {
    Breadcrumb,
    Info
  }
}
</script>

<style lang="stylus" scoped>
  @import "~variables"

  // h1
    // padding-top: 3%

  .bg-gradient
    background: linear-gradient(180deg, $grey-carousel-fade-1, $white 90%)

  .breadcrumb
    padding-left: 1%
    @media (max-width: 1024px) and (min-width: 320px)
      padding-left: 0%
    @media (min-width: 1199px)
      padding-left: 2%

  .title
    width: 100%

  .info
    width: 100%
    padding-top: 3%

  .img-hospital
    width: 100%
    height: auto
</style>
