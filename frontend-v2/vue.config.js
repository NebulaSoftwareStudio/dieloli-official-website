const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // Vue 解释器
  runtimeCompiler: true,

  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,

  // 打包app时放开该配置
  publicPath: '/',

  transpileDependencies: true,
  lintOnSave: false,

  devServer: {
    port: 3001,

    // 启动后自动打开浏览器
    open: '/'
  }
})
