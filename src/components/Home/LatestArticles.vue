<template>
  <div class="row md-gutter layout-padding items-start">
    <div class="col-12">
      <div class="row text-center justify-center">
        <h1>Blog : les derniers articles</h1>
      </div>
    </div>
    <div v-for="article in lastArticles" class="col-xs-12 col-sm-4">
      <q-card class="card no-margin" flat>
        <!-- <q-card-media> -->
          <a class="img-articles" :style="{'background-image': 'url(' + article.image.link + ')'}" :href="article.link" alt="photo article"></a>
        <!-- </q-card-media> -->
        <q-card-title>
          {{ article.title | truncate('40') }}
        </q-card-title>
        <q-card-main class="card-content">
          {{ article.content | truncate('100') }}
          <q-card-actions align="end">
            <a class="text-primary" :href="article.link">Lire la suite</a>
          </q-card-actions>
        </q-card-main>
      </q-card>
    </div>
  </div>
</template>

<script>
import {
  QCard,
  QCardTitle,
  QCardMain,
  QCardActions,
  QCardMedia,
  QBtn,
  QIcon
} from 'quasar'

import _ from 'lodash'

export default {
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QCardActions,
    QCardMedia,
    QBtn,
    QIcon
  },
  filters: {
    truncate(string, value) {
      if (string.length > value) {
        return string.substring(0, value) + '...';
      }
      return string;
    }
  },
  data () {
    return {
      lastArticles: []
    }
  },
  async created () {
    const feeds = await this.$http.get('https://alenvi-api.herokuapp.com/blog/rssFeeds', {
      params: {
        feed_url: 'http://blog.alenvi.io/rss/'
      }
    });
    const orderedFeeds = _.sortBy(feeds.data.data, ['pubDate']).reverse().slice(0,3);
    orderedFeeds.forEach(item => {
      let article = {
        title: item.title,
        content: item.summary,
        image: {
          link: this.getImgInfo(item.description, 'src'),
          alt: this.getImgInfo(item.description, 'alt'),
        },
        link: item.link
      };
      this.lastArticles.push(article);
    });
    // console.log(this.lastArticles);
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     console.log(this.$refs['article1'].clientHeight)
  //   })
  // },
  methods: {
    getImgInfo (text, type) {
      let regex;
      switch (type) {
        case 'src':
          regex = /<img src="(.*?)"/;
          break;
        case 'alt':
          regex = /<img src=".*?" alt="(.*?)"/;
          break;
      }

      const found = text.match(regex);
      // console.log(found);

      if (found) {
        return found[1];
      } else {
        return null;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'

.img-articles
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &:before
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    content: '';

  &:after
    display: block;
    content: '';
    width: 100%;
    padding-bottom: 75%;

.q-card
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;

.q-card-actions a:hover
  color: #ff1693 !important

.q-card-title
  font-family: alenviTitleFont

.q-card-container
  padding: 16px 0px 0px 16px
</style>
