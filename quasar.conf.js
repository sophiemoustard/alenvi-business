// Configuration for your app
require('dotenv').config();
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'i18n',
      'axios',
      'vueBreadcrumbs',
      'vuelidate',
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons',
      // 'ionicons',
      // 'mdi',
      'fontawesome'
    ],
    supportIE: true,
    vendor: {
      add: [],
      remove: []
    },
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      publicPath: '/',
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      useNotifier: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar)/
        });
        if (ctx.prod) {
          cfg.plugins.push(
            new PrerenderSPAPlugin({
              // Required - The path to the webpack-outputted app to prerender.
              staticDir: path.join(__dirname, 'dist/spa-mat'),

              // Required - Routes to render.
              routes: ['/', '/aide-a-domicile', '/compagnie', '/sortie-hopital', '/vision', '/equipe', '/recrutement', '/mentions'],

              // Optional - Allows you to customize the HTML and output path before
              // writing the rendered contents to a file.
              // renderedRoute can be modified and it or an equivelant should be returned.
              // renderedRoute format:
              // {
              //   route: String, // Where the output file will end up (relative to outputDir)
              //   originalRoute: String, // The route that was passed into the renderer, before redirects.
              //   html: String, // The rendered HTML for this route.
              //   outputPath: String // The path the rendered HTML will be written to.
              // }
              postProcess (renderedRoute) {
                // Ignore any redirects.
                // renderedRoute.path = renderedRoute.originalPath
                // Basic whitespace removal. (Don't use this in production.)
                // renderedRoute.html = renderedRoute.html.split(/>[\s]+</gmi).join('><')
                // Remove /index.html from the output path if the dir name ends with a .html file extension.
                // For example: /dist/dir/special.html/index.html -> /dist/dir/special.html
                // if (renderedRoute.path.endsWith('.html')) {
                //   renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.path);
                // }

                renderedRoute.html = renderedRoute.html.replace(/<script>[^<]*<\/script>/i,
                  `<script>
                     (function (w, d, s, l, i) {
                       w[l] = w[l] || [];
                       w[l].push({
                         'gtm.start': new Date().getTime(),
                         event: 'gtm.js'
                       });
                       var f = d.getElementsByTagName(s)[0],
                         j = d.createElement(s),
                         dl = l != 'dataLayer' ? '&l=' + l : '';
                       j.async = true;
                       j.src =
                         'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                       f.parentNode.insertBefore(j, f);
                     })(window, document, 'script', 'dataLayer', 'GTM-5MT8HT');
                     </script>`);
                // renderedRoute.html = renderedRoute.html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/i, '');

                return renderedRoute;
              },

              // Optional - Uses html-minifier (https://github.com/kangax/html-minifier)
              // To minify the resulting HTML.
              // Option reference: https://github.com/kangax/html-minifier#options-quick-reference
              // minify: {
              //   collapseBooleanAttributes: true,
              //   collapseWhitespace: true,
              //   decodeEntities: true,
              //   keepClosingSlash: true,
              //   sortAttributes: true
              // },

              // Server configuration options.
              // server: {
              // Normally a free port is autodetected, but feel free to set this if needed.
              // port: 8001
              // },

              // The actual renderer to use. (Feel free to write your own)
              // Available renderers: https://github.com/Tribex/prerenderer/tree/master/renderers
              renderer: new Renderer({
                // Optional - The name of the property to add to the window object with the contents of `inject`.
                // injectProperty: '__PRERENDER_INJECTED',
                // // Optional - Any values you'd like your app to have access to via `window.injectProperty`.
                // inject: {
                //   foo: 'bar'
                // },

                // Optional - defaults to 0, no limit.
                // Routes are rendered asynchronously.
                // Use this to limit the number of routes rendered in parallel.
                // maxConcurrentRoutes: 4,

                // Optional - Wait to render until the specified event is dispatched on the document.
                // eg, with `document.dispatchEvent(new Event('custom-render-trigger'))`
                // renderAfterDocumentEvent: 'custom-render-trigger',

                // Optional - Wait to render until the specified element is detected using `document.querySelector`
                renderAfterElementExists: '#q-app',

                // Optional - Wait to render until a certain amount of time has passed.
                // NOT RECOMMENDED
                // renderAfterTime: 5000, // Wait 5 seconds.

                // Other puppeteer options.
                // (See here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)
                headless: true // Display the browser window when rendering. Useful for debugging.
              })
            })
          );
        }
      },
      env: {
        API_HOSTNAME: JSON.stringify(process.env.API_HOSTNAME)
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutFooter',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSide',
        'QModal',
        'QCollapsible',
        'QVideo',
        'QWindowResizeObservable',
        'QCard',
        'QCardTitle',
        'QCardMain',
        'QCardActions',
        'QCardMedia',
        'QCarousel',
        'QCarouselSlide',
        'QField',
        'QInput',
        'QParallax',
        'QFab',
        'QFabAction'
      ],
      directives: [
        'Ripple',
        'Scroll',
        'ScrollFire'
      ],
      // Quasar plugins
      plugins: [
        'Notify',
        'Cookies',
        'AddressbarColor'
      ]
    },
    // animations: 'all' --- includes all animations
    animations: [
      'fadeIn',
      'fadeOut'
    ],
    pwa: {
      cacheExt: 'js,html,css,ttf,eot,otf,woff,woff2,json,svg,gif,jpg,jpeg,png,wav,ogg,webm,flac,aac,mp4,mp3',
      manifest: {
        // name: 'Quasar App',
        // short_name: 'Quasar-PWA',
        // description: 'Best PWA App in town!',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      extendWebpack (cfg) {
        // do something with cfg
      },
      packager: {
        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      }
    },

    // leave this here for Quasar CLI
    starterKit: '1.0.2'
  }
}
