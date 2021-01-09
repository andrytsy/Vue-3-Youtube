const aliases = require('./webpack/aliases.js')

module.exports = {
    configureWebpack: {
	    devServer: {
		    watchOptions: {
			    poll: true
		    }
	    },
    	resolve: {
            alias: aliases,
            extensions: ['.js', '.ts', '.json', '.vue']
        }
    }
}
