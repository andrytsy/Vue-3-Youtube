const aliases = require('./webpack/aliases.js')

module.exports = {
    configureWebpack: {
        resolve: {
            alias: aliases,
            extensions: ['.js', '.ts', '.json', '.vue']
        }
    }
}
