<template>
  <div class="row bg-gradient">
    <breadcrumb class="breadcrumb"/>
    <div class="row justify-center title">
      <h1>Aide à domicile pour les personnes âgées</h1>
    </div>
    <section class="content">
      <div class="row items-start xl-gutter layout-padding">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <h2>Françoise et Sabine</h2>
          <p class="text-justify">
            Tous les matins, Sabine retrouve Françoise à son domicile. Après un petit café, Sabine aide Françoise à faire un brin de toilette. La préparation du repas est ensuite l’occasion de passer un bon moment ensemble. Sabine est contente de voir que Françoise apprécie le plat cuisiné ensemble. Elle la laisse ensuite prendre un peu de repos en attendant la visite de sa fille dans l’après-midi.
          </p>
          <p>
            C’est pour vivre et faire vivre ce type de moments que les auxiliaires d’envie se lèvent tous les matins.
          </p>
          <p>
            Nous sommes à la disposition de votre proche âgé pour l’aider dans ses gestes de la vie quotidienne et passer du temps de qualité avec lui.
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <img class="img-home-care" src="statics/aide_domicile.jpg" alt="photo aide-a-domicile">
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

  .img-home-care
    width: 100%
    height: auto
</style>
