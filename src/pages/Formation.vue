<template>
  <q-page padding>
    <!-- <breadcrumb class="col-12 breadcrumb"/> -->
    <section id="presentation" class="section-margin">
      <div class="row"> <!-- pres-background -->
        <h1 class="col-12 text-center title-margin-bottom">Par son offre de formation, Alenvi permet aux intervenants du secteur médico-social pour exercer leur métier plus sereinement</h1>
        <div id="pres-text" class="col-lg-6 self-center">
          <!-- <h1 class="col-12 text-center title-margin-bottom">Rejoignez une équipe mobilisée pour la valorisation du métier d’auxiliaire de vie</h1> -->
          <p>Alenvi Formation est né du constat que les formations actuelles étaient axées principalement sur le savoir-faire, et peu sur le savoir-être et la prise d’initiative, pourtant essentiels.</p>
          <p>L'ensemble de notre programme découle du référentiel de compétences co-construit en collaboration avec notre partenaire, le <a style="color: blue" href="https://reseau-memoire-alois.fr">Réseau Mémoire Aloïs</a>, et les différentes parties prenantes de l'écosystème de l'aide à domicile.</p>
          <p>Ce programme permet aux professionnels de prendre du recul par rapport à leur métier, d’acquérir la bonne posture qui leur permettra de gérer du mieux possible la relation humaine avec en situation d'accompagnement des personnes en perte d'autonomie.</p>
          <p>Notre programme est en cours de certification à la Commission Nationale de la Certification Professionnelle (CNCP)</p>
          <q-btn color="primary" big>
            <a href="https://res.cloudinary.com/alenvi/image/upload/v1532440977/images/business/Alenvi_Formation_Catalogue_2018.pdf">Notre offre de formation</a>
          </q-btn>
        </div>
      </div>
      <div class="col-lg-6 text-center self-center">
        <img class="img-size" src="https://res.cloudinary.com/alenvi/image/upload/c_scale,w_726/v1532440898/images/business/formation.png" alt="">
      </div>
    </section>
  </q-page>
</template>

<script>
// import Breadcrumb from '../components/Breadcrumbs.vue'
// import TypeformModal from '../components/TypeformModal'

export default {
  // metaInfo: {
  //   title: 'Recrutement',
  //   meta: [
  //     { name: 'description', content: 'Rejoignez une équipe engagée pour la valorisation du métier d’auxiliaire de vie.' }
  //   ],
  //   script: [
  //     { innerHTML: '{ "@context": "http://schema.org", "@type": "Organization", "url": "https://www.alenvi.io/recrutement", "name": "Recrutement", "description": "Rejoignez une équipe engagée pour la valorisation du métier d’auxiliaire de vie" }', type: 'application/ld+json' }
  //   ]
  // },
  components: {
    // Breadcrumb,
    // TypeformModal
  },
  data () {
    // return {
    //   showModal: false
    // }
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
    // padding-left: 5%
    // padding-right: 5%
    @media (max-width: 991px)
      padding-bottom: 5%

  .section-margin
    margin-bottom: 3%

  .img-size
    width: 78%
    max-width: 780px
    height: auto;
    @media (max-width: 1024px)
      width: 100%
      max-width: 100%

  .pres-background
    background: linear-gradient(to right, #FAF9F8, white)

  h1
    // padding-left: 5%
    // padding-right: 5%
    @media (max-width: 991px)
      padding-bottom: 5%

  #pres-text
    // padding-left: 5%
    // padding-right: 5%
    @media (max-width: 991px)
      padding-bottom: 5%

  #online-asking
    padding-top: 1%
    padding-left: 57px
    cursor: pointer
    color: $primary

  .title-margin-bottom
    margin-bottom: 3%

</style>
