var
  path = require('path'),
  config = require('../config'),
  cssUtils = require('./css-utils'),
  webpack = require('webpack'),
  merge = require('webpack-merge'),
  baseWebpackConfig = require('./webpack.base.conf'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin'),
  PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: cssUtils.styleRules({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      postcss: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: config.build.productionSourceMap,
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/index.html'),
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          (
            module.resource.indexOf('quasar') > -1 ||
            module.resource.indexOf(
              path.join(__dirname, '../node_modules')
            ) === 0
          )
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new PrerenderSpaPlugin(
      path.join(__dirname, '../dist'),
      // List of routes to prerender
<<<<<<< HEAD
      [ '/' ]
    //   {
    //     postProcessHtml: function(context) {
    //       var contents = {
    //         '/': {
    //           title: 'Accueil',
    //           metaName: 'description',
    //           content: 'Home Description'
    //         }
    //       }
    //       return context.html.replace(
    //         /<title>[^<]*<\/title>/i,
    //         `<title>${contents[context.route].title} | Alenvi</title><meta name="${contents[context.route].metaName}" content="${contents[context.route].content}">`
    //       )
    //     }
    //   }
=======
      ['/', '/home', '/aide-a-domicile', '/compagnie', '/sortie-hopital', '/vision', '/equipe', '/recrutement', '/mentions'],
      {
        postProcessHtml: function(context) {
          var contents = {
            '/': {
              title: 'Accueil',
              meta: {
                name: 'description',
                content: "Les 'auxiliaires d’envie' Alenvi accompagnent à domicile les personnes âgées. Formés en continu sur les troubles cognitifs, ils les aident pour les gestes de la vie quotidienne et leur apportent une compagnie stimulante et humaine."
              }
            },
            '/home': {
              title: 'Accueil',
              meta: {
                name: 'description',
                content: "Les 'auxiliaires d’envie' Alenvi accompagnent à domicile les personnes âgées. Formés en continu sur les troubles cognitifs, ils les aident pour les gestes de la vie quotidienne et leur apportent une compagnie stimulante et humaine."
              }
            },
            '/aide-a-domicile': {
              title: 'Aide à domicile',
              meta: {
                name: 'description',
                content: "Services d’aide à domicile (repas, toilettes, aide au lever…) proposés aux personnes âgées par les 'auxiliaires d’envie' Alenvi."
              }
            },
            '/compagnie': {
              title: 'Compagnie et stimulation',
              meta: {
                name: 'description',
                content: "Les “auxiliaires d’envie” passent du temps de qualité avec les personnes âgées à domicile : promenades, jeux, stimulation etc…"
              }
            },
            '/sortie-hopital': {
              title: "Sortie d'hôpital",
              meta: {
                name: 'description',
                content: "Les 'auxiliaires d’envie' aident votre proche âgé à réussir son retour à domicile à la suite d’une hospitalisation."
              }
            },
            '/vision': {
              title: 'Vision',
              meta: {
                name: 'description',
                content: "Alenvi réinvente l’accompagnement à domicile des personnes âgées grâce à la valorisation des auxiliaires de vie et aux technologies mobiles."
              }
            },
            '/equipe': {
              title: 'Equipe',
              meta: {
                name: 'description',
                content: "Présentations en vidéo des collaborateurs d’Alenvi."
              }
            },
            '/recrutement': {
              title: 'Recrutement',
              meta: {
                name: 'description',
                content: "Rejoignez une équipe engagée pour la valorisation du métier d’auxiliaire de vie."
              }
            },
            '/mentions': {
              title: 'Mentions légales',
              meta: {
                name: 'description',
                content: "Mentions légales de l’organisation Alenvi."
              }
            }
          }
          console.log(`<title>${contents[context.route].title} | Alenvi</title><meta name="${contents[context.route].meta.name}" content="${contents[context.route].meta.content}">`)
          return context.html.replace(
            /<title>[^<]*<\/title>/i,
            `<title>${contents[context.route].title} | Alenvi</title><meta name="${contents[context.route].meta.name}" content="${contents[context.route].meta.content}">`
          )
        }
      }
>>>>>>> 891543e8c62825904440c0249fe4c410f58fb6b4
    )
  ]
})
