<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout" view="hHh lpr fff">
    <q-toolbar color="white" slot="header" class="justify-end">
      <!-- opens drawer below -->
      <q-btn color="primary" class="lt-md hide-on-drawer-visible" @click="$refs.layout.toggleLeft()" flat big>
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title class="justify-start">
          <router-link :to="'home'" active-class="active">
            <img src="statics/alenvi_logo_50x50.png" alt="Logo Alenvi">
          </router-link>
        </q-toolbar-title>

      <nav class="gt-sm mobile-hide">
        <router-link :to="'home'" active-class="active">Accueil</router-link>
        <router-link :to="'home'" active-class="active">Vision</router-link>
        <router-link :to="'home'" active-class="active">Equipe</router-link>
        <router-link :to="'home'" active-class="active">Recrutement</router-link>
        <router-link :to="'home'" active-class="active">Magazine</router-link>
        <q-btn color="primary">Appeler 01 79 75 54 75</q-btn>
      </nav>

    </q-toolbar>

    <div class="lt-md" slot="left">
      <q-item-side right>
        <q-btn @click="$refs.layout.hideCurrentSide" class="justify-end" color="tertiary" flat big>
          <q-icon name="close" />
        </q-btn>
      </q-item-side>
      <q-list-header>Alenvi</q-list-header>
      <q-side-link item to="/home">
        <q-item-side icon="home" />
        <q-item-main label="Accueil" />
      </q-side-link>
      <q-side-link item to="/home">
        <q-item-side icon="visibility" />
        <q-item-main label="Vision" />
      </q-side-link>
      <q-side-link item to="/home">
        <q-item-side icon="supervisor account" />
        <q-item-main label="Equipe" />
      </q-side-link>
      <q-side-link item to="/home">
        <q-item-side icon="assignment ind" />
        <q-item-main label="Recrutement" />
      </q-side-link>
      <q-side-link item to="/home">
        <q-item-side icon="book" />
        <q-item-main label="Magazine" />
      </q-side-link>
    </div>

    <router-view />

    <!-- Footer -->
    <q-toolbar slot="footer">
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
  QItemSide,
  QTabs,
  QTab,
  QListHeader } from 'quasar'

export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QSideLink,
    QItemMain,
    QItemSide,
    QTabs,
    QTab,
    QListHeader
  },
  data () {
    return {}
  },
}
</script>

<style lang="stylus">
  @import '~variables'

  #header a
    color $primary

  nav a {
    color: $tertiary
    font-weight: bold
    padding: 0px 20px
    line-height: 50px
  }
</style>
