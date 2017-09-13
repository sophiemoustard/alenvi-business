<template>
  <div class="bg-carousel-gradient">
    <q-carousel infinite autoplay class="text-tertiary">
      <div v-for="slide in slides" slot="slide" class="bg-carousel-transparent">
        <div class="row">
          <div v-for="content in slide" class="col-xs-12 col-sm-6 col-md-6">
            <a :href="content.link">
              <q-card color="white" class="shadow-1">
                <div class="carousel-card row items-center justify-center content-center">
                  <div class="col-lg-4">
                    <div class="row justify-center">
                      <img :src="content.img" :alt="content.imgAlt">
                    </div>
                  </div>
                  <div class="col-lg-8 content">
                    <div class="row content-center">
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
        ]
      ]
    }
  }
}
</script>

<style lang="stylus">
  @import '~variables'

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
</style>
