var
  path = require('path'),
  webpack = require('webpack'),
  config = require('../config'),
  cssUtils = require('./css-utils'),
  env = require('./env-utils'),
  merge = require('webpack-merge'),
  projectRoot = path.resolve(__dirname, '../'),
  ProgressBarPlugin = require('progress-bar-webpack-plugin'),
  PrerenderSpaPlugin = require('prerender-spa-plugin')
  useCssSourceMap =
    (env.dev && config.dev.cssSourceMap) ||
    (env.prod && config.build.productionSourceMap)

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: config[env.prod ? 'build' : 'dev'].publicPath,
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: config.aliases
  },
  module: {
    rules: [
      { // eslint
        // enforce: 'pre',
        // test: /\.(vue|js)$/,
        // loader: 'eslint-loader',
        // include: projectRoot,
        // exclude: /node_modules/,
        // options: {
        //   formatter: require('eslint-friendly-formatter')
        // }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: cssUtils.postcss,
          loaders: merge({js: 'babel-loader'}, cssUtils.styleLoaders({
            sourceMap: useCssSourceMap,
            extract: env.prod
          }))
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config[env.prod ? 'build' : 'dev'].env,
      'DEV': env.dev,
      'PROD': env.prod,
      '__THEME': '"' + env.platform.theme + '"'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: env.prod,
      options: {
        context: path.resolve(__dirname, '../src'),
        postcss: cssUtils.postcss
      }
    }),
    new ProgressBarPlugin({
      format: config.progressFormat
    })
    // new PrerenderSpaPlugin(
    //   path.join(__dirname, '../dist'),
    //   // List of routes to prerender
    //   ['/', '/home', '/aide-a-domicile', '/compagnie', '/sortie-hopital', '/vision', '/equipe', '/recrutement', '/mentions'],
    //   {
    //     postProcessHtml: function(context) {
    //       var contents = {
    //         '/': {
    //           title: 'Accueil',
    //           meta: {
    //             name: 'description',
    //             content: "Les 'auxiliaires d’envie' Alenvi accompagnent à domicile les personnes âgées. Formés en continu sur les troubles cognitifs, ils les aident pour les gestes de la vie quotidienne et leur apportent une compagnie stimulante et humaine."
    //           }
    //         },
    //         '/home': {
    //           title: 'Accueil',
    //           meta: {
    //             name: 'description',
    //             content: "Les 'auxiliaires d’envie' Alenvi accompagnent à domicile les personnes âgées. Formés en continu sur les troubles cognitifs, ils les aident pour les gestes de la vie quotidienne et leur apportent une compagnie stimulante et humaine."
    //           }
    //         },
    //         '/aide-a-domicile': {
    //           title: 'Aide à domicile',
    //           meta: {
    //             name: 'description',
    //             content: "Services d’aide à domicile (repas, toilettes, aide au lever…) proposés aux personnes âgées par les 'auxiliaires d’envie' Alenvi."
    //           }
    //         },
    //         '/compagnie': {
    //           title: 'Compagnie et stimulation',
    //           meta: {
    //             name: 'description',
    //             content: "Les “auxiliaires d’envie” passent du temps de qualité avec les personnes âgées à domicile : promenades, jeux, stimulation etc…"
    //           }
    //         },
    //         '/sortie-hopital': {
    //           title: "Sortie d'hôpital",
    //           meta: {
    //             name: 'description',
    //             content: "Les 'auxiliaires d’envie' aident votre proche âgé à réussir son retour à domicile à la suite d’une hospitalisation."
    //           }
    //         },
    //         '/vision': {
    //           title: 'Vision',
    //           meta: {
    //             name: 'description',
    //             content: "Alenvi réinvente l’accompagnement à domicile des personnes âgées grâce à la valorisation des auxiliaires de vie et aux technologies mobiles."
    //           }
    //         },
    //         '/equipe': {
    //           title: 'Equipe',
    //           meta: {
    //             name: 'description',
    //             content: "Présentations en vidéo des collaborateurs d’Alenvi."
    //           }
    //         },
    //         '/recrutement': {
    //           title: 'Recrutement',
    //           meta: {
    //             name: 'description',
    //             content: "Rejoignez une équipe engagée pour la valorisation du métier d’auxiliaire de vie."
    //           }
    //         },
    //         '/mentions': {
    //           title: 'Mentions légales',
    //           meta: {
    //             name: 'description',
    //             content: "Mentions légales de l’organisation Alenvi."
    //           }
    //         }
    //       }
    //       return context.html.replace(
    //         /<title>[^<]*<\/title>/i,
    //         `<title>${contents[context.route].title} | Alenvi</title><meta name="${contents[context.route].meta.name}" content="${contents[context.route].meta.content}">`
    //       )
    //     }
    //   }
    // )
  ],
  performance: {
    hints: false
  }
}
