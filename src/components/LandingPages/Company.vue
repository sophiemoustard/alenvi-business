<template>
  <div class="row">
    <breadcrumb class="breadcrumb"/>
    <div class="row justify-center title">
      <h1>Compagnie et stimulation pour les personnes âgées</h1>
    </div>
    <section class="content">
      <div class="row items-start lg-gutter layout-padding">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <h2>Thierry et Dorothée</h2>
          <p class="text-justify">
            Chaque après-midi, Dorothée se rend chez Thierry. Selon l’humeur du jour, ils décident d’aller se promener, de faire un jeu, ou de simplement lire un livre ensemble. C’est souvent dur de se quitter, mais Dorothée s’en va avec un sentiment de fierté car elle sent Thierry plus apaisé qu’à son arrivée.
          </p>
          <p>
            Ce sont ces moments humains, de partage, qui aident les personnes touchées par des troubles cognitifs à se sentir mieux. Ils peuvent également freiner l’évolution de la maladie.
          </p>
          <p>
            Les auxiliaires d’envie sont là pour offrir ces moments d’apaisement à votre proche âgé.
          </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <img class="img-company" src="statics/compagnie.jpg" alt="photo compagnie">
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

  .img-company
    width: 100%
    height: auto
</style>
