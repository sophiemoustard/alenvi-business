<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout" view="hHh lpr fff">
    <q-toolbar color="white" slot="header" class="justify-end">

      <q-toolbar-title class="justify-start">
        <router-link :to="'home'" active-class="active">
          <img src="statics/alenvi_logo_complet_183x50.png" alt="Logo Alenvi">
        </router-link>
      </q-toolbar-title>

      <nav class="gt-sm mobile-hide">
        <router-link :to="'home'">Accueil</router-link>
        <router-link :to="'home'">Vision</router-link>
        <router-link :to="'home'">Equipe</router-link>
        <router-link :to="'home'">Recrutement</router-link>
        <router-link :to="'home'">Magazine</router-link>
      </nav>

      <q-btn class="gt-sm mobile-hide" color="primary"><a class="btn-call" href="tel:+33179755475">Appeler le 01 79 75 54 75</a></q-btn>

      <q-btn color="primary" class="lt-md hide-on-drawer-visible" @click="$refs.layout.toggleLeft()" flat big>
        <q-icon name="menu" />
      </q-btn>

    </q-toolbar>

    <div slot="left">
      <q-item-side right>
        <q-btn @click="$refs.layout.hideCurrentSide()" class="justify-end" color="tertiary" flat big>
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
      <div class="row sm-gutter justify-between">
        <div class="col-auto">
          <ul>
            <li><router-link :to="'home'" class="footer-links">Accueil</router-link></li>
            <li><router-link :to="'home'" class="footer-links">Vision</router-link></li>
            <li><router-link :to="'home'" class="footer-links">Equipe</router-link></li>
            <li><router-link :to="'home'" class="footer-links">Recrutement</router-link></li>
            <li><router-link :to="'home'" class="footer-links">Magazine</router-link></li>
          </ul>
        </div>
        <div class="col-auto">
          <ul>
            <li><router-link :to="'home'" class="footer-links">Aide à domicile</router-link></li>
            <li><router-link :to="'home'" class="footer-links">Stimulation et compagnie</router-link></li>
            <li><router-link :to="'home'" class="footer-links">Sortie d'hospitalisation</router-link></li>
          </ul>
        </div>
      </div>
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
  QItem,
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
    QItem,
    QItemMain,
    QItemSide,
    QTabs,
    QTab,
    QListHeader
  },
  data () {
    return {}
  },
  mounted() {
    this.$refs.layout.hideLeft();
  },
  methods: {
    onResize(size) {
      console.log(size)
    }
  }
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

  .btn-call {
    color: $white
    padding: 0 10px 0 10px
  }

  .btn-call:hover {
    color: $white
  }

  footer ul {
    list-style: none
  }

  footer ul li a {
    color: $white
    line-height: 30px
  }

  .footer-links:hover {
    text-decoration: underline
    color: $white
  }

  // .sidebar-link {
  //   margin-left: 10px
  //   color: #0c0c0c
  // }
</style>
