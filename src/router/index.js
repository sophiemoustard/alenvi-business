import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import VueGtm from 'vue-gtm'

import routes from './routes'

Vue.use(VueRouter)
Vue.use(Meta)

const Router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build -> vueRouterMode
   *
   * If you decide to go with "history" mode, please also set "build.publicPath"
   * to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
  // scrollBehavior: () => ({ y: 0 }),
  routes
})

Vue.use(VueGtm, {
  debug: false, // Whether or not display console logs debugs (optional)
  vueRouter: Router, // Pass the router instance to automatically sync with router (optional)
  // ignoredViews: ['homepage'], // If router, you can exclude some routes name (case insensitive) (optional)
})

Router.beforeEach((to, from, next) => {
  if (to.path !== '/' && to.path.slice(-1) === '/') {
    return next(to.path.slice(0, -1));
  }
  next();
})

export default Router
