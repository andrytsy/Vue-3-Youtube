const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    devtool: isProd
        ? false
        : '#cheap-module-source-map',
    devServer: {
        watchOptions: {
            poll: true
        }
    },
    resolve: {
        alias: {
	        public: path.resolve(__dirname, '../public/'),
	        uiKit: path.resolve(__dirname, '../src/components/UiKit')
        },
        extensions: ['.js', '.ts', '.json', '.vue']
    }
}
