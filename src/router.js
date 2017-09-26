import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  mode: 'history',
  routes: [
    {
      path: '/',
      component: load('Layout/Navigation'),
      meta: {
        breadcrumb: 'Accueil',
        name: '/'
      },
      children: [
        {
          path: '',
          component: load('Home/Home'),
          meta: {
            breadcrumb: 'Accueil'
          }
        },
        {
          path: 'home',
          component: load('Home/Home'),
          meta: {
            breadcrumb: 'Accueil'
          }
        },
        {
          path: 'test',
          component: load('Home/CarouselMedia'),
          meta: {
            breadcrumb: 'test',
            name: 'test'
          }
        },
        {
          path: 'aide-a-domicile',
          component: load('StaticPages/HomeCare'),
          meta: {
            breadcrumb: 'Aide à domicile',
            name: 'aide-a-domicile'
          }
        },
        {
          path: 'compagnie',
          component: load('StaticPages/Company'),
          meta: {
            breadcrumb: 'Compagnie et stimulation',
            name: 'compagnie'
          }
        },
        {
          path: 'sortie-hopital',
          component: load('StaticPages/HospitalExit'),
          meta: {
            breadcrumb: "Sortie d'hôpital",
            name: 'sortie-hopital'
          }
        },
        {
          path: 'vision',
          component: load('StaticPages/Vision'),
          meta: {
            breadcrumb: 'Vision',
            name: 'vision'
          }
        },
        {
          path: 'equipe',
          component: load('StaticPages/Team'),
          meta: {
            breadcrumb: 'Equipe',
            name: 'team'
          }
        },
        {
          path: 'recrutement',
          component: load('StaticPages/Recruitment'),
          meta: {
            breadcrumb: 'Recrutement',
            name: 'recruitment'
          }
        },
        {
          path: 'mentions',
          component: load('StaticPages/LegalNotices'),
          meta: {
            breadcrumb: 'Mentions Légales',
            name: 'mentions'
          }
        }
      ]
    },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
