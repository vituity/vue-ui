const path = require('path')

module.exports = {
  lintOnSave: false,

  // outputDir: './docs',
  // publicPath: './',
  devServer: {
    host: 'localhost',
    disableHostCheck: true
  },
  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, './docs-src/main.js')
    },
    resolve: {
      alias: {
        '@style': path.resolve(__dirname, './src/style/imports.sass'),
        '@': path.resolve(__dirname, './docs-src')
      }
    }
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule('js')
  //     .include
  //     .add(path.resolve(__dirname, './docs-src'))

  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .tap(options => {
  //       options.compilerOptions.preserveWhitespace = true
  //       return options
  //     })
  // },
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import '~@style'"
      }
    }
  }
}
