<template>
  <div class="bg-carousel-gradient">
    <q-carousel infinite autoplay class="text-tertiary">
      <div v-for="slide in slides" slot="slide" class="bg-carousel-transparent">
        <div class="row">
          <div v-for="content in slide" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <a :href="content.link">
              <q-card color="white" class="shadow-1">
                <div :class="carouselCardClassesObj">
                  <div class="col-xs-12 col-sm-12 col-md-4 img-carousel">
                    <div class="row justify-center">
                      <img :src="content.img" :alt="content.imgAlt">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-8 content">
                    <div class="row justify-center">
                      <div class="text-italic">
                        {{ content.description }}
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
            title: 'CNews',
            img: 'statics/cnews.png',
            imgAlt: 'cnews logo',
            description: 'Turihkew vafom vesiujo iw gopzu defru nobocif novo ci tu mabnos pafik zibhu oswu oso den gob favhuki.',
            link: 'https://www.cnews.fr'
          },
          {
            title: 'Le parisien',
            img: 'statics/leparisien.png',
            imgAlt: 'leparisien logo',
            description: 'Dimpiek ru nuibekic bihipi alufuhu losiz pahhe daacegi viufook arocub vevsees osbewgu cota.',
            link: 'https://www.leparisien.fr'
          }
        ],
        [
          {
            title: 'CNews',
            img: 'statics/cnews.png',
            imgAlt: 'cnews logo',
            description: 'Turihkew vafom vesiujo iw gopzu defru nobocif novo ci tu mabnos pafik zibhu oswu oso den gob favhuki.',
            link: 'https://www.cnews.fr'
          },
          {
            title: 'Le parisien',
            img: 'statics/leparisien.png',
            imgAlt: 'leparisien logo',
            description: 'Dimpiek ru nuibekic bihipi alufuhu losiz pahhe daacegi viufook arocub vevsees osbewgu cota.',
            link: 'https://www.leparisien.fr'
          }
        ]
      ],
      carouselCardClasses: {
        'carousel-card': true,
        row: true,
        'items-center': true,
        'content-between': true
      }
    }
  },
  computed: {
    carouselCardClassesObj() {
      if (this.$q.platform.is.mozilla) {
        return {
        'carousel-card': true,
        row: true,
        'items-center': true,
        'content-between': false
        }
      }
      return this.carouselCardClasses;
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
    background: linear-gradient(135deg, $grey-carousel 0%, $grey-carousel-fade-1 20%, $grey-carousel-fade-2 40%, $white 50%)

  .bg-carousel-transparent
    background: rgba(0, 0, 0, 0)

  .q-card
    border-radius: 15px

  .q-card-title
    color: $tertiary

  .carousel-card
    min-height: 100px

  .content
    color: $tertiary
    font-weight: 100
    padding: 0px 15px

    @media (max-width: 768px)
      padding: 0px 0px 10px 15px

</style>
