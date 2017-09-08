<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout" view="hHh lpr fff">
    <q-toolbar color="white" slot="header">
      <!-- opens drawer below -->
      <q-btn v-if="$q.platform.is.mobile" class="hide-on-drawer-visible" @click="$refs.layout.toggleLeft()" flat>
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Title
      </q-toolbar-title>

      <div v-if="!$q.platform.is.mobile" id="header">
        <a href="">TEST</a>
        <a href="">TEST</a>
        <a href="">TEST</a>
      </div>

    </q-toolbar>

    <!-- Navigation Tabs
    <q-tabs slot="navigation">
      <q-route-tab slot="title" icon="view_quilt" to="/layout/about" replace hide="icon" label="About" />
      <q-route-tab slot="title" icon="view_day" to="/layout/toolbar" replace hide="icon" label="Toolbar" />
      <q-route-tab slot="title" icon="view_day" to="/layout/tabs" replace label="Tabs" />
      <q-route-tab slot="title" icon="input" to="/layout/drawer" replace label="Drawer" />
    </q-tabs>
    -->
    <div slot="left">
      <q-side-link item to="/test-layout" exact>
        <q-item-main label="About" />
      </q-side-link>
      <q-side-link item to="/test-layout/toolbar">
        <q-item-main label="Toolbar" />
      </q-side-link>
    </div>
    <!-- Left Side Panel
    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item>
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item>
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item>
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item>
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>
    -->

    <!-- Right Side Panel
    <div slot="right">
      ...
    </div>
    -->

    <router-view />

    <!-- Footer -->
    <q-toolbar color="primary" slot="footer">
      Footer
    </q-toolbar>

  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QSideLink,
  QItemMain,
  QTabs,
  QTab,
  Platform } from 'quasar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QSideLink,
    QItemMain,
    QTabs,
    QTab,
    Platform
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
  @import '~variables'

  #header a
    color $primary

  .q-toolbar
    color $primary
</style>
