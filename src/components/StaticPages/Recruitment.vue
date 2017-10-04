<template>
  <div class="">
    <breadcrumb class="col-12 breadcrumb"/>
    <section id="presentation" class="section-margin">
      <div class="row"> <!-- pres-background -->
        <h1 class="col-12 text-center title-margin-bottom">Rejoignez une équipe engagée pour la valorisation du métier d’auxiliaire de vie</h1>
        <div id="pres-text" class="col-lg-7">
          <p>Chez Alenvi, nous pensons qu’il n’est possible de bien accompagner les personnes âgées à domicile qu’en valorisant le métier d’auxiliaire de vie.</p>
          <p>Les auxiliaires d’envie travaillent ainsi au sein de communautés autonomes dans un cadre de travail unique :</p>
          <ul>
            <li>CDI 35H, SMIC + 20%</li>
            <li>Interventions de 2H minimum</li>
            <li>Autonomie dans la gestion du planning et la relation avec les bénéficiaires</li>
            <li>Formation continue</li>
            <li>Coopération entre collègues (réunions d’équipe toutes les 2 semaines) & formation continue</li>
          </ul>
          <p>Nous recrutons actuellement pour des interventions à Paris et dans les Hauts de Seine.</p>
          <q-btn color="primary" big>
            <a class="btn-call" @click="$refs.infoModal.openModal('https://alenvi.typeform.com/to/MwEMWk')">Postuler</a>
          </q-btn>
          <modal ref="infoModal"/>
        </div>
        <div class="col-lg-5 alenvi-video">
          <iframe id="auxiliary-iframe" src="https://www.youtube.com/embed/yGWVPxglesc" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { QBtn } from 'quasar'
import Breadcrumb from '../Breadcrumbs.vue'
import Modal from '../Modal.vue'

export default {
  metaInfo: {
    title: 'Recrutement',
    meta: [
      { name: 'description', content: "Rejoignez une équipe engagée pour la valorisation du métier d’auxiliaire de vie." }
    ]
  },
  components: {
    Breadcrumb,
    Modal,
    QBtn
  }
}
</script>

<style lang="stylus" scoped>
  @import "~variables"

  .breadcrumb
    padding-left: 1%
    @media (max-width: 1024px) and (min-width: 320px)
      padding-left: 0%
    @media (min-width: 1199px)
      padding-left: 2.3%

  .pres-background
    background: linear-gradient(to right, #FAF9F8, white)

  #pres-text
    padding-left: 5%
    padding-right: 5%
    @media (max-width: 991px)
      padding-bottom: 5%

  .title-margin-bottom
    margin-bottom: 3%

  .alenvi-video
    width: 100%
    height: auto
    min-height: 325px
    max-width: 500px
    @media (max-width: 1200px)
      max-width: 100%

  .section-margin
    @media (max-width: 1200px)
      margin-bottom: 3%

  .btn-call:hover
    color: $white

</style>
