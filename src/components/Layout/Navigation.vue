<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout" view="hHh lpr fff">
    <div slot="header">
      <div class="w3-bar w3-white alenvi-nav row items-center justify-start">
        <router-link :to="'/'" class="w3-bar-item" style="width: 180px">
          <img class="alenvi-logo" src="https://res.cloudinary.com/alenvi/image/upload/c_fit,q_auto,w_500/v1507124345/images/business/alenvi_logo_complet_full.png" alt="Logo Alenvi">
        </router-link>
        <div class="row items-center gt-mld">
          <div class="w3-dropdown-hover bg-white">
            <button id="dropdownHome" class="alenvi-button text-tertiary"><router-link :to="'/'">Services <q-icon name="arrow drop down"/></router-link></button>
            <div class="alenvi-dropdown-list w3-dropdown-content w3-bar-block w3-card-4">
              <router-link :to="'aide-a-domicile'" class="w3-bar-item">Aide à domicile</router-link>
              <router-link :to="'compagnie'" class="w3-bar-item">Compagnie et stimulation</router-link>
              <router-link :to="'sortie-hopital'" class="w3-bar-item">Sortie d'hôpital</router-link>
            </div>
          </div>
          <router-link :to="'vision'" class="w3-bar-item">Vision</router-link>
          <router-link :to="'equipe'" class="w3-bar-item">Equipe</router-link>
          <router-link :to="'recrutement'" class="w3-bar-item">Recrutement</router-link>
          <div class="w3-dropdown-hover bg-white">
            <button id="dropdownMag" class="alenvi-button text-tertiary"><a href="http://blog.alenvi.io/">Blog <q-icon name="arrow drop down"/></a></button>
            <div class="alenvi-dropdown-list w3-dropdown-content w3-bar-block w3-card-4">
              <a href="http://blog.alenvi.io/tag/aidants-familiaux" class="w3-bar-item">Aidants familiaux</a>
              <a href="http://blog.alenvi.io/tag/auxiliaires" class="w3-bar-item">Auxiliaires</a>
              <a href="http://blog.alenvi.io/tag/alenvi" class="w3-bar-item">Le projet Alenvi</a>
            </div>
          </div>
        </div>
        <q-btn id="btn-call-header" v-if="this.$route.meta.name != 'recrutement'" class="gt-mld" color="primary" big><a class="btn-call text-white" href="tel:+33179755475">Appeler le 01 79 75 54 75</a></q-btn>
        <q-btn id="btn-call-header" v-else class="gt-mld" color="primary" big><a class="btn-call text-white" @click="$refs.infoModal.openModal('https://alenvi.typeform.com/to/MwEMWk')">Postuler</a></q-btn>
        <modal ref="infoModal"/>
        <q-btn color="primary" class="lt-lgx hide-on-drawer-visible absolute-right" @click="$refs.layout.toggleRight()" flat big>
          <q-icon name="menu" />
        </q-btn>
      </div>
    </div>

    <div slot="right">
      <q-item-side right>
        <q-btn @click="$refs.layout.hideCurrentSide()" class="justify-end" color="tertiary" flat big>
          <q-icon name="close" />
        </q-btn>
      </q-item-side>
      <q-side-link class="no-bg" item to="/">
        <q-item-main label="Accueil" />
      </q-side-link>
      <q-collapsible label="Services">
        <q-side-link item to="/aide-a-domicile">
          <q-item-main label="Aide à domicile" />
        </q-side-link>
        <q-side-link item to="/compagnie">
          <q-item-main label="Compagnie et stimulation" />
        </q-side-link>
        <q-side-link item to="/sortie-hopital">
          <q-item-main label="Sortie d'hôpital" />
        </q-side-link>
      </q-collapsible>
      <q-side-link item to="/vision">
        <q-item-main label="Vision" />
      </q-side-link>
      <q-side-link item to="/equipe">
        <q-item-main label="Equipe" />
      </q-side-link>
      <q-side-link item to="/recrutement">
        <q-item-main label="Recrutement" />
      </q-side-link>
      <q-collapsible label="Blog">
        <q-side-link class="no-bg" item to="">
          <q-item-main @click="goUrl('http://blog.alenvi.io')" label="Accueil Blog" />
        </q-side-link>
        <q-side-link class="no-bg" item to="">
          <q-item-main @click="goUrl('http://blog.alenvi.io/tag/aidants-familiaux')" label="Aidants familiaux" />
        </q-side-link>
        <q-side-link class="no-bg" item to="">
          <q-item-main @click="goUrl('http://blog.alenvi.io/tag/auxiliaires')" label="Auxiliaires" />
        </q-side-link>
        <q-side-link class="no-bg" item to="">
          <q-item-main @click="goUrl('http://blog.alenvi.io/tag/alenvi')" label="Le projet Alenvi" />
        </q-side-link>
      </q-collapsible>
    </div>

    <router-view />

    <div v-if="isCookiePopup" @click="setCookieWasShown()">
      <q-alert id="cookie-popup" color="tertiary" v-model="isCookiePopup" icon="thumb up" enter="bounceInRight" leave="bounceOutRight" position="bottom-right" dismissible>
        En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de cookies pour vous proposer des publicités ciblées adaptés à vos centres d’intérêts et réaliser des statistiques de visites.
      </q-alert>
    </div>

    <!-- Footer -->
    <q-toolbar class="forced-wrap" slot="footer">
      <div class="col-xs-12 col-md-3">
        <ul>
          <li><router-link :to="'/'" class="footer-links text-white">Accueil</router-link></li>
          <li><router-link :to="'vision'" class="footer-links">Vision</router-link></li>
          <li><router-link :to="'equipe'" class="footer-links">Equipe</router-link></li>
          <li><router-link :to="'recrutement'" class="footer-links">Recrutement</router-link></li>
          <li><a href="http://blog.alenvi.io" class="footer-links">Blog</a></li>
        </ul>
      </div>
      <div class="col-xs-12 col-md-3">
        <ul>
          <li><router-link :to="'aide-a-domicile'" class="footer-links">Aide à domicile</router-link></li>
          <li><router-link :to="'compagnie'" class="footer-links">Compagnie et stimulation</router-link></li>
          <li><router-link :to="'sortie-hopital'" class="footer-links">Sortie d'hôpital</router-link></li>
          <li><router-link :to="'mentions'" class="footer-links">Mentions légales</router-link></li>
        </ul>
      </div>
          <!-- </div>
        </div> -->
        <div class="col-xs-12 col-md-3 padding-top-footer">
          <div class="row justify-center">
            <a href="https://www.facebook.com/alenviservices/">
              <q-icon name="fa-facebook-official" color="white" size="2.5rem" class="hover-icon on-left"/>
            </a>
            <a href="https://www.youtube.com/channel/UCY31qIuLKsPY6zFUh_pR-pw">
              <q-icon name="fa-youtube" color="white" size="2.5rem" class="hover-icon"/>
            </a>
          </div>
        </div>
        <div class="col-xs-12 col-md-3 padding-top-footer">
          <div class="row justify-center items-center">
            <div><img class="footer-img" src="https://res.cloudinary.com/alenvi/image/upload/q_auto/v1507019445/images/business/logo-service-personne.png" alt="logo service personne"></div>
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
  QList,
  Cookies,
  QAlert,
  Alert,
  openURL } from 'quasar'

import Modal from '../Modal.vue'
import 'quasar-extras/animate/bounceInRight.css'
import 'quasar-extras/animate/bounceOutRight.css'


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
    QAlert,
    Modal
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
      },
      isCookiePopup: true
    }
  },
  mounted () {
    this.$refs.layout.hideRight();
    if (Cookies.has('popupWasShown')) {
      this.isCookiePopup = false;
    }
  },
  methods: {
    isActive () {
      this.active = !this.active;
    },
    getElementLeftPos() {
      return this.dropdownPos.left = this.$refs.dropdown.getBoundingClientRect().left + 'px';
    },
    goUrl(url) {
      openURL(url);
    },
    setCookieWasShown() {
      Cookies.set('popupWasShown', true, { expires: 10, path: '/' });
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

  @media (max-width: 991px)
    .padding-top-footer
      padding-top: 15px

  .no-bg
    background: none !important

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
    margin-top: -0.4px

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
    width: 100%

  .btn-call
    color: $white
    // padding: 0 10px 0 10px

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
    &:hover
      color: $grey-4 !important

  // .footer-logos
  //   background-color: $white
  //   border-radius: 15px
  //
  //   &:hover
  //     text-decoration: underline
  //     color: $white

  .footer-img
    width: 100px
    height: auto

  .forced-wrap
    flex-wrap: wrap

  .hover-icon:hover
    color: $grey-4 !important

  #cookie-popup
    padding-right: 1%
    padding-bottom: 1%


</style>
