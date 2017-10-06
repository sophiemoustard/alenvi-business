<template>
  <div class="bg-carousel-gradient">
    <q-carousel infinite autoplay class="text-tertiary">
      <div v-for="slide in slides" slot="slide" class="bg-carousel-transparent">
        <div class="row">
          <div v-for="content in slide" class="col-xs-12 col-xl-6">
            <a :href="content.link">
              <q-card color="white" class="shadow-1" flat>
                <div class="carousel-card row items-center" :class="isMozillaContentBetweenFalse">
                  <!-- Image -->
                  <div class="col-xs-12 col-md-4 img-carousel">
                    <div class="row justify-center">
                      <img :src="content.img" :alt="content.imgAlt">
                    </div>
                  </div>
                  <!-- Description -->
                  <div class="col-xs-12 col-md-8 description">
                    <div class="row justify-center">
                      <div class="text-italic text-center">
                      <!-- <blockquote class="no-margin" :cite="content.link"> -->
                        {{ content.description }}
                      <!-- </blockquote> -->
                      </div>
                    </div>
                  </div>
                </div>
              </q-card>
            </a>
          </div>
        </div>
      </div>
    </q-carousel>
  </div>
</template>

<script>
import {
  QCarousel,
  QCard,
  QCardTitle,
  QCardMain } from 'quasar'

export default {
  components: {
    QCarousel,
    QCard,
    QCardTitle,
    QCardMain
  },
  data () {
    return {
      slides: [
        [
          {
            title: 'Le Parisien',
            img: 'https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507019444/images/business/leparisien.png',
            imgAlt: 'leparisien logo',
            description: '« A la rencontre des auxiliaires d’envie »',
            link: 'http://www.leparisien.fr/economie/business/a-la-rencontre-des-auxilliaires-d-envie-20-09-2016-6135411.php'
          },
          {
            title: 'CNEWS',
            img: 'https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507019444/images/business/cnews.png',
            imgAlt: 'CNEWS logo',
            description: '« Interview en plateau de Dorothée, auxiliaire d’envie chez Alenvi »',
            link: 'https://www.youtube.com/watch?v=M30Ia_oV6AI'
          }
        ]
        // [
        //   {
        //     title: 'CNews',
        //     img: 'statics/cnews.png',
        //     imgAlt: 'cnews logo',
        //     description: 'Turihkew vafom vesiujo iw gopzu defru nobocif novo ci tu mabnos pafik zibhu oswu oso den gob favhuki.',
        //     link: 'https://www.cnews.fr'
        //   },
        //   {
        //     title: 'Le parisien',
        //     img: 'statics/leparisien.png',
        //     imgAlt: 'leparisien logo',
        //     description: 'Dimpiek ru nuibekic bihipi alufuhu losiz pahhe daacegi viufook arocub vevsees osbewgu cota.',
        //     link: 'https://www.leparisien.fr'
        //   }
        // ]
      ],
      isNotMozilla: {
        // 'carousel-card': true,
        // row: true,
        // 'items-center': true,
        'content-between': true
      }
    }
  },
  computed: {
    isMozillaContentBetweenFalse() {
      if (this.$q.platform.is.mozilla) {
        return {
          'content-between': false
        }
      }
      return this.isNotMozilla;
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~variables'

  @media (max-width: 1024px)
    .img-carousel
      margin: 10px 0px 10px 0px

  .bg-carousel-gradient
    background: #FAF9F8
    // background: linear-gradient(135deg, $grey-carousel 0%, $grey-carousel-fade-1 20%, $grey-carousel-fade-2 40%, $white 50%)

  .bg-carousel-transparent
    background: rgba(0, 0, 0, 0)

  // .q-card
  //   border-radius: 15px

  .q-card-title
    color: $tertiary

  .carousel-card
    min-height: 100px

  .description
    color: $primary
    font-weight: 100
    // padding: 0px 15px

    @media (max-width: 768px)
      padding: 0px 0px 10px 15px

</style>
