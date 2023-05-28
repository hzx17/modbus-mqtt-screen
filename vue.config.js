const path = require('path')

module.exports = {
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')

      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        echarts: 'echarts',
        nprogress: 'NProgress',
        xlsx: 'xlsx',
        'v-charts': 'v-charts',
        'v-charts/lib/line.common': 'VeLine',
        'v-charts/lib/histogram.common': 'VeHistogram'
      })

      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main.js')

      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 全局变量路径，不能使用路径别名
        path.resolve(__dirname, "./src/assets/global.less"),
      ],
    },
  },
}
require('events').EventEmitter.defaultMaxListeners = 0
