<template lang="html">
<div class="row layout-padding">
  <div v-for="(feature, index) in featuresContent" :key="index" class="col-sm-4 feature-padding" :style="{ backgroundColor: feature.backgroundColor }">
    <div class="text-center">
      <img class="main-picto" :src="feature.image" alt="">
      <h2 style="white-space: pre">{{feature.title}}</h2>
    </div>
      <p class="feature-text">{{feature.text}}</p>
      <div v-if="feature.link" class="text-center">
        <router-link class="text-primary alenvi-link" v-if="feature.link.substring(0, 4) != 'http'" :to="feature.link">En savoir plus</router-link>
        <a v-else :href="feature.link">En savoir plus</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    featuresContent: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-picto
  width: 100px
  height: 100px

.feature-text
  text-align: justify
  padding-left: 10%
  padding-right: 10%

.feature-background
  background-color: #FFFFFF
  // background-color: #FAF9F8

.feature-padding
  padding-top: 2%
  padding-bottom: 2%

.alenvi-link
  &:hover
    color: #ff1693 !important

</style>
