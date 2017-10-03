<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout" view="hHh lpr fff">
    <div slot="header">
      <div class="w3-bar w3-white alenvi-nav row items-center justify-start">
        <router-link :to="'/'" class="w3-bar-item">
          <img class="alenvi-logo" src="https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507019444/images/business/alenvi_logo_complet_183x50.png" alt="Logo Alenvi">
        </router-link>
        <div class="row items-center gt-mld">
          <div class="w3-dropdown-hover bg-white">
            <button id="dropdownHome" class="alenvi-button text-tertiary"><router-link :to="'/'">Accueil <q-icon name="arrow drop down"/></router-link></button>
            <div class="alenvi-dropdown-list w3-dropdown-content w3-bar-block w3-card-4">
              <router-link :to="'aide-a-domicile'" class="w3-bar-item">Aide à domicile</router-link>
              <router-link :to="'compagnie'" class="w3-bar-item">Stimulation et compagnie</router-link>
              <router-link :to="'sortie-hopital'" class="w3-bar-item">Sortie d'hôpital</router-link>
            </div>
          </div>
          <router-link :to="'vision'" class="w3-bar-item">Vision</router-link>
          <router-link :to="'equipe'" class="w3-bar-item">Equipe</router-link>
          <router-link :to="'recrutement'" class="w3-bar-item">Recrutement</router-link>
          <div class="w3-dropdown-hover bg-white">
            <button id="dropdownMag" class="alenvi-button text-tertiary"><a href="https://blog.alenvi.io/">Blog <q-icon name="arrow drop down"/></a></button>
            <div class="alenvi-dropdown-list w3-dropdown-content w3-bar-block w3-card-4">
              <a href="https://blog.alenvi.io/tag/aidants-familiaux" class="w3-bar-item">Aidants familiaux</a>
              <a href="https://blog.alenvi.io/tag/auxiliaires" class="w3-bar-item">Auxiliaires</a>
              <a href="https://blog.alenvi.io/tag/alenvi" class="w3-bar-item">Le projet Alenvi</a>
            </div>
          </div>
        </div>
        <q-btn id="btn-call-header" class="gt-mld" color="primary" big><a class="btn-call text-white" href="tel:+33179755475">Appeler le <b>01 79 75 54 75</b></a></q-btn>
        <q-btn color="tertiary" class="lt-lgx hide-on-drawer-visible absolute-right" @click="$refs.layout.toggleRight()" flat big>
          <q-icon name="menu" />
        </q-btn>
      </div>
    </div>
  </div>
    <!-- <q-toolbar color="white" slot="header" class="justify-between items-start">

      <div class="col-2">
        <router-link :to="'/'">
          <img src="statics/alenvi_logo_complet_183x50.png" alt="Logo Alenvi">
        </router-link>
      </div> -->

      <!-- <nav class="gt-mld col-8 row items-center">
        <router-link :to="'/'">Accueil</router-link>
        <router-link :to="'vision'">Vision</router-link>
        <router-link :to="'equipe'">Equipe</router-link>
        <router-link :to="'recrutement'">Recrutement</router-link>
        <router-link :to="'/'">
          <div :class="[dropdownItemClass, { 'active-link': active }, rowClass, justifyCenterClass]" ref="dropdown" @mouseover="isActive(), getElementLeftPos()">
            Magazine<q-icon name="arrow drop down" />
          </div>
        </router-link>
      </nav> -->


      <!-- <nav class="gt-mld mobile-hide col-8">
        <div class="row justify-start">
          <ul class="nav">
            <li>
              <router-link :to="'/'">Accueil</router-link>
            </li>
            <li>
              <router-link :to="'vision'">Vision</router-link>
            </li>
            <li>
              <router-link :to="'equipe'">Equipe</router-link>
            </li>
            <li>
              <router-link :to="'recruitement'">Recrutement</router-link>
            </li>
            <li @mouseover="$refs.popover1.open()" @mouseleave="closePopover()">
              <router-link :to="'/'">
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

    </q-toolbar> -->

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
        <div class="col-4 self-baseline">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <ul>
                <li><router-link :to="'/'" class="footer-links text-white">Accueil</router-link></li>
                <li><router-link :to="'vision'" class="footer-links">Vision</router-link></li>
                <li><router-link :to="'equipe'" class="footer-links">Equipe</router-link></li>
                <li><router-link :to="'recruitement'" class="footer-links">Recrutement</router-link></li>
                <li><router-link :to="'/'" class="footer-links">Blog</router-link></li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <ul>
                <li><router-link :to="'aide-a-domicile'" class="footer-links">Aide à domicile</router-link></li>
                <li><router-link :to="'compagnie'" class="footer-links">Stimulation et compagnie</router-link></li>
                <li><router-link :to="'sortie-hopital'" class="footer-links">Sortie d'hôpital</router-link></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row justify-center">
            <a href="https://www.facebook.com/alenviservices/">
              <q-icon name="fa-facebook-official" color="white" size="2.5rem" class="on-left"/>
            </a>
            <a href="https://www.youtube.com/channel/UCY31qIuLKsPY6zFUh_pR-pw">
              <q-icon name="fa-youtube" color="white" size="2.5rem"/>
            </a>
          </div>
        </div>
        <div class="col-4">
          <div class="row justify-end items-center footer-logos">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-center"><img class="footer-img" src="https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507019444/images/business/logo_charte_qualite.jpg" alt="logo charte qualité"></div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"><img class="footer-img" src="https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507019445/images/business/logo-service-personne.png" alt="logo service personne"></div>
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
  QCollapsible,
  QTab,
  QRouteTab,
  QListHeader,
  QList } from 'quasar'

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
    QCollapsible,
    QTab,
    QRouteTab,
    QListHeader,
    QList,
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
    this.$refs.layout.hideRight();
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

<style lang="stylus" scoped>
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

  // .nav
  //   list-style: none
  //
  // .nav li
  //   float: left
  //   padding-right: 30px
  //
  // .nav li a
  //   color: $tertiary
  //   font-weight: bold
  //
  // .active-link
  //   color: $primary
  //
  // .dropdown-item
  //   display: inline-block
  //   height: 60px
  //   padding-top: 20px
  //
  //
  // .q-toolbar
  //   min-height: 70px
  //
  // .q-tab-label
  //   color: $tertiary
  //
  // .q-tab-label:hover
  //   color: $primary

  .alenvi-button
    border: none;
    display: inline-block;
    outline: 0;
    padding: 19px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;

  .alenvi-dropdown-list
    margin-top: 0.5px

  .alenvi-nav
    font-weight: bold
    color: $tertiary
    min-height: 60px
    a
      color: $tertiary
      text-decoration: none
      &:hover
        color: $primary

  .w3-dropdown-hover
    height: 60px

  header .router-link-exact-active
    font-weight: 900
    color: $primary

  .alenvi-logo
    width: 80%

  .btn-call
    color: $white
    padding: 0 10px 0 10px

  button a b
    font-weight: bold

  .btn-call:hover
    color: $white


  #btn-call-header
    // margin: 0 -15px
    margin-left: auto

  footer ul
    list-style: none


  footer ul li a
    color: $white
    line-height: 30px

  .footer-links
    color: $white

  .footer-logos
    background-color: $white
    border-radius: 15px

    &:hover
      text-decoration: underline
      color: $white

  .footer-img
    width: 100px
    height: auto

  i:hover
    color: $blue

</style>
