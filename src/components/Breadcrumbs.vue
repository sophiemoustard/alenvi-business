<template>
  <div class="row no-padding">
    <ul class="breadcrumbs">
      <!-- If index is last, then apply "current" css class -->
      <li v-for="(breadcrumb, index) in $breadcrumbs" :key="index" :class="{ current: index === $breadcrumbs.length - 1 }">
        <router-link :to="{ path: breadcrumb.meta.name }">
          {{ breadcrumb.meta.breadcrumb }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
  @import "~variables"

// well it works
  .breadcrumbs:after
    clear: both
    content: ''

// put in list in line, add arrow after each <li> element
  .breadcrumbs
    list-style: none
    padding: 0
    li
      float: left
      display: inline-block
      &:after
        display: inline-block
        content: '\00bb'
        margin: 0 .6em
        color: $tertiary

// take off arrows for last <li> element
  .breadcrumbs li:last-of-type:after
    display: none

  .breadcrumbs
    li
      a
        color: $tertiary
        &:hover
          color: $primary

  li.current > a
    color: $primary
</style>
