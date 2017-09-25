<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout" view="hHh lpr fff">
    <q-toolbar color="white" slot="header" class="justify-between items-start">

      <div class="col-2">
        <router-link :to="'home'">
          <img src="statics/alenvi_logo_complet_183x50.png" alt="Logo Alenvi">
        </router-link>
      </div>

      <!-- <nav class="gt-mld col-8 row items-center">
        <router-link :to="'home'">Accueil</router-link>
        <router-link :to="'vision'">Vision</router-link>
        <router-link :to="'equipe'">Equipe</router-link>
        <router-link :to="'recrutement'">Recrutement</router-link>
        <router-link :to="'home'">
          <div :class="[dropdownItemClass, { 'active-link': active }, rowClass, justifyCenterClass]" ref="dropdown" @mouseover="isActive(), getElementLeftPos()">
            Magazine<q-icon name="arrow drop down" />
          </div>
        </router-link>
      </nav> -->


      <nav class="gt-mld mobile-hide col-8">
        <div class="row justify-start">
          <ul class="nav">
            <li>
              <router-link :to="'home'">Accueil</router-link>
            </li>
            <li>
              <router-link :to="'home'">Vision</router-link>
            </li>
            <li>
              <router-link :to="'home'">Equipe</router-link>
            </li>
            <li>
              <router-link :to="'home'">Recrutement</router-link>
            </li>
            <li @mouseover="$refs.popover1.open()" @mouseleave="closePopover()">
              <router-link :to="'home'">
                Magazine<q-icon name="arrow drop down" />
              </router-link>
              <q-popover ref="popover1" style="position: absolute;">
                <q-list @mouseover="isActive()" link separator>
                  <q-item @click.native="$refs.popover1.close()" :to="'test'">Rubrique 1</q-item>
                  <q-item @click.native="$refs.popover1.close()":to="'test'">Rubrique 2</q-item>
                  <q-item @click.native="$refs.popover1.close()":to="'test'">Rubrique 3</q-item>
                </q-list>
              </q-popover>
            </li>
          </ul>
        </div>
      </nav>

      <q-btn id="btn-call-header" class="gt-mld col-auto" color="primary"><a class="btn-call" href="tel:+33179755475">Appeler le <b>01 79 75 54 75</b></a></q-btn>

      <q-btn color="tertiary" class="lt-lgx hide-on-drawer-visible" @click="$refs.layout.toggleRight()" flat big>
        <q-icon name="menu" />
      </q-btn>

    </q-toolbar>

    <!-- <div v-if="active" class="row justify-center" slot="navigation">
      <div @mouseleave="isActive" :style="dropdownPos">
      <q-tabs id="tabs-nav" color="white" class="shadow-2" align="center">
        <q-route-tab @click="active = false" to="home" slot="title" label="Rubrique 1" />
        <q-route-tab @click="active = false" to="home" slot="title" label="Rubrique 2" />
        <q-route-tab @click="active = false" to="home" slot="title" label="Rubrique 3" />
      </q-tabs>
      </div>
    </div> -->


    <div slot="right">
      <q-item-side right>
        <q-btn @click="$refs.layout.hideCurrentSide()" class="justify-end" color="tertiary" flat big>
          <q-icon name="close" />
        </q-btn>
      </q-item-side>
      <q-list-header>Alenvi</q-list-header>
      <q-side-link item to="/home">
        <q-item-main label="Accueil" />
      </q-side-link>
      <q-side-link item to="/home">
        <q-item-main label="Vision" />
      </q-side-link>
      <q-side-link item to="/home">
        <q-item-main label="Equipe" />
      </q-side-link>
      <q-side-link item to="/home">
        <q-item-main label="Recrutement" />
      </q-side-link>
      <q-collapsible label="Magazine">
          <q-item-main label="Rubrique 1" />
        </q-side-link>
        <q-side-link item to="/home">
          <q-item-main label="Rubrique 2" />
        </q-side-link>
        <q-side-link item to="/home">
          <q-item-main label="Rubrique 3" />
        </q-side-link>
      </q-collapsible>
    </div>

    <router-view />

    <!-- Footer -->
    <q-toolbar slot="footer">
      <div class="row sm-gutter justify-between">
        <div class="col-auto">
          <ul>
            <li><router-link :to="'home'" class="footer-links">Accueil</router-link></li>
            <li><router-link :to="'vision'" class="footer-links">Vision</router-link></li>
            <li><router-link :to="'equipe'" class="footer-links">Equipe</router-link></li>
            <li><router-link :to="'recrutement'" class="footer-links">Recrutement</router-link></li>
            <li><router-link :to="'home'" class="footer-links">Magazine</router-link></li>
          </ul>
        </div>
        <div class="col-auto">
          <ul>
            <li><router-link :to="'aide-a-domicile'" class="footer-links">Aide à domicile</router-link></li>
            <li><router-link :to="'stimulation-et-compagnie'" class="footer-links">Stimulation et compagnie</router-link></li>
            <li><router-link :to="'sortie-hopital'" class="footer-links">Sortie d'hospitalisation</router-link></li>
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
  QRouteTab,
  QListHeader,
  QList,
  QTooltip,
  QCollapsible,
  QPopover } from 'quasar'

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
    QRouteTab,
    QListHeader,
    QList,
    QTooltip,
    QCollapsible,
    QPopover
  },
  data () {
    return {
      active: false,
      dropdownItemClass: 'dropdown-item',
      activeLinkClass: 'active-link',
      rowClass: 'row',
      justifyCenterClass: 'justify-center',
      dropdownPos: {
        position: 'absolute',
        left: ''
      }
    }
  },
  mounted () {
    this.$refs.layout.hideLeft();
  },
  methods: {
    isActive () {
      this.active = !this.active;
    },
    getElementLeftPos() {
      return this.dropdownPos.left = this.$refs.dropdown.getBoundingClientRect().left + 'px';
    }
    // closePopover () {
    //   if (!this.active) {
    //     this.$refs.popover1.close();
    //   } else {
    //     return;
    //   }
    // }
  }
}
</script>

<style lang="stylus">
  @import '~variables'

  @media (max-width: 1024px) and (min-width: 320px)
    .gt-mld
      display: none !important


  @media (min-width: 1025px)
    .lt-lgx
      display: none !important

  // nav a
  //   color: $tertiary
  //   font-weight: bold
  //   padding: 0px 20px
  //   line-height: 20px

  // nav a div
  //   display: inline-block;
  // .q-tabs-scroller
  //   flex-wrap: wrap;

  .nav
    list-style: none

  .nav li
    float: left
    padding-right: 30px

  .nav li a
    color: $tertiary
    font-weight: bold

  .active-link
    color: $primary

  .dropdown-item
    display: inline-block
    height: 60px
    padding-top: 20px


  .q-toolbar
    min-height: 70px

  .q-tab-label
    color: $tertiary

  .q-tab-label:hover
    color: $primary

  .btn-call
    color: $white
    padding: 0 10px 0 10px

  button a b
    font-weight: bold

  .btn-call:hover
    color: $white


  #btn-call-header
    margin: 0 -15px

  footer ul
    list-style: none


  footer ul li a
    color: $white
    line-height: 30px


  .footer-links:hover
    text-decoration: underline
    color: $white

</style>
