<template>
  <div class="row">
    <div class="row div-info justify-center">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="column-md row-xl items-center">
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <img class="img-info" src="statics/picto.png" alt="picto">
          </div>
          <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <h2>Visite et devis gratuits</h2>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="column-md row-xl items-center">
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <img class="img-info" src="statics/picto.png" alt="picto">
          </div>
          <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <h2>Entre 23 et 26 &#8364; par heure</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row div-info justify-center padding-info">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="column-md row-xl items-center">
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <img class="img-info" src="statics/picto.png" alt="picto">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <h2>Mise en place possible sous 2 jours</h2>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
        <div class="column-md row-xl items-center">
          <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <img class="img-info" src="statics/picto.png" alt="picto">
          </div>
          <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <h2>50% remboursé en crédit d'impôt et prise en charge APA possible</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  @media (max-width: 1023px) and (min-width: 320px)
    .column-md
      flex-direction: column
      display: flex
      flex-wrap: wrap

  @media (min-width: 1024px)
    .row-xl
      flex-direction: row
      display: flex
      flex-wrap: wrap

  .img-info
    width: 100px
    height: 100px

  .padding-info
    padding-top: 5%

  .div-info
    width: 100%

</style>
