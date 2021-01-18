const path = require('path')

module.exports = {
    configureWebpack: {
	    entry: '/src/app.ts',
	    devServer: {
		    proxy: {
			    '/api': {
				    secure: false,
				    changeOrigin: true,
				    target: 'http://localhost:3000/',
				    pathRewrite: {
					    '^/api': '/api/v1'
				    }
			    }
		    },
		    watchOptions: {
			    poll: true
		    }
	    },
    	resolve: {
		    alias: {
			    server: path.resolve(__dirname, './server'),
			    public: path.resolve(__dirname, './public'),
			    uiKit: path.resolve(__dirname, './src/components/UiKit')
		    },
            extensions: ['.js', '.ts', '.json', '.vue']
        }
    }
}
