<template>
  <div>
    <q-carousel :swipe-easing="overshoot" infinite autoplay class="text-tertiary">
      <q-carousel-slide v-for="(slide, index) in slides" :key="index">
        <div class="row justify-around">
          <div v-for="(content, index) in slide" :key="index" class="col-xs-12 col-xl-6">
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
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { easing } from 'quasar'

export default {
  data () {
    return {
      overshoot: easing.overshoot,
      slides: [
        [
          {
            title: 'CNEWS',
            img: 'https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507019444/images/business/cnews.png',
            imgAlt: 'CNEWS logo',
            description: '« Interview en plateau de Dorothée, auxiliaire d’envie chez Alenvi\xa0»',
            link: 'https://www.youtube.com/watch?v=M30Ia_oV6AI'
          },
          {
            title: 'Europe 1',
            img: 'https://res.cloudinary.com/alenvi/image/upload/c_scale,q_auto,w_175/v1510067496/images/business/Europe_1.jpg',
            imgAlt: 'Europe 1 logo',
            description: "« En disant auxiliaire d'envie, on reconnaît que ce qu'apportent les auxiliaires, c'est bien plus que du maintien à domicile\xa0»",
            link: 'https://www.youtube.com/watch?v=c7tEjBkwfY0'
          },
        ],
        [
          {
            title: 'Le parisien',
            img: 'https://res.cloudinary.com/alenvi/image/upload/v1507019444/images/business/leparisien.png',
            imgAlt: 'leparisien logo',
            description: "« A la rencontre des auxiliaires d'envie\xa0»",
            link: 'http://www.leparisien.fr/economie/business/a-la-rencontre-des-auxilliaires-d-envie-20-09-2016-6135411.php'
          },
          {
            title: 'Siver Eco',
            img: 'https://res.cloudinary.com/alenvi/image/upload/c_scale,q_auto:eco,w_120/v1522753629/images/business/logo-silver-economie.png',
            imgAlt: 'SilverEco logo',
            description: "« Alenvi transforme le métier d'auxiliaire de vie.\xa0»",
            link: 'https://www.silvereco.fr/alenvi-et-ogust-oeuvrent-ensemble-pour-revaloriser-le-metier-dauxiliaire-de-vie/3178309'
          },
        ]
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
    isMozillaContentBetweenFalse () {
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

  //.bg-carousel-gradient
    //background: #FAF9F8
    // background: linear-gradient(135deg, $grey-carousel 0%, $grey-carousel-fade-1 20%, $grey-carousel-fade-2 40%, $white 50%)

  //.bg-carousel-transparent
    //background: rgba(0, 0, 0, 0)

  // .q-card
  //   border-radius: 15px

  //.q-card-title
    //color: $tertiary

  .carousel-card
    min-height: 100px

  .description
    color: $primary
    font-weight: 100
    padding: 1%
    // padding: 0px 15px

    @media (max-width: 768px)
      padding: 0px 0px 10px 15px

</style>
