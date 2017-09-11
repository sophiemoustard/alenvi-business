<template>
  <!-- Don't drop "q-app" class -->
  <div id="alenvi-app">
    <router-view />
  </div>
</template>

<script>
/*
 * Root component
 */
export default {
}
</script>

<style lang="stylus">
body
  font-family: alenviTextFont

h1, h2, h3, h4, h5, h6
  font-family: alenviTitleFont
</style>
