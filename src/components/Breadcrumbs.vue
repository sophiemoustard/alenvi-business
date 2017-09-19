<template>
  <div class="row">
    <ul class="breadcrumbs">
      <li v-for="(breadcrumb, index) in $breadcrumbs" :class="{ current: index === $breadcrumbs.length - 1 }">
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

<style lang="stylus">
  @import "~variables"

  .breadcrumbs:after
    clear: both
    content: ''

  .breadcrumbs
    list-style: none
    li
      float: left
      display: inline-block
      &:after
        display: inline-block
        content: '\00bb'
        margin: 0 .6em
        color: $tertiary

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
