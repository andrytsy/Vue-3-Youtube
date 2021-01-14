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
					    '^/api': ''
				    }
			    }
		    },
		    watchOptions: {
			    poll: true
		    }
	    },
    	resolve: {
		    alias: {
			    public: path.resolve(__dirname, './public/'),
			    uiKit: path.resolve(__dirname, './src/components/UiKit/'),
			    app: path.resolve(__dirname, './src/')
		    },
            extensions: ['.js', '.ts', '.json', '.vue']
        }
    }
}
