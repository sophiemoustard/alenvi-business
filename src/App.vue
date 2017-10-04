<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
/*
 * Root component
 */
export default {
  metaInfo: {
    title: 'Alenvi',
    // titleTemplate: '%s | Alenvi',
    htmlAttrs: {
      lang: 'fr'
    }
  }
}
</script>

<style lang="stylus">
@import '~variables'

body
  font-family: alenviTextFont
  color: $tertiary

h1, h2, h3, h4, h5, h6
  font-family: alenviTitleFont
  color: $tertiary

h1
  font-size: 2.8em
  @media (max-width: 400px)
    font-size: 2em

h2, h4
  font-size: 1.5em
  @media (max-width: 400px)
    font-size: 1.4em

p
  font-size: 16px

.btn-call
  color: $white
</style>
