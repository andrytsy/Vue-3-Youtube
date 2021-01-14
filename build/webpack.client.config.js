const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
    // Укажите точку входа серверной части вашего приложения
    entry: '/src/entry-client.ts',
    plugins: [
        // Важно: это разбивает webpack runtime на главный фрагмент так,
        // чтобы асинхронные части могли быть внедрены сразу после него.
        // Это также позволяет лучше кэшировать код вашего приложения / вендоров.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            minChunks: Infinity
        }),
        // Плагин генерирует `vue-ssr-client-manifest.json` в output-каталоге
        new VueSSRClientPlugin()
    ]
})
