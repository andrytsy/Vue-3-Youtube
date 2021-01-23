const {google} = require('googleapis')

declare class YoutubeRequestsController {
	apiKey: string
	blogger: object

	constructor() {
		this.apiKey = 'AIzaSyA9R28-FYCYK6Cg4w8wzc77iYEKsWb88ew'
		this.blogger = google.customsearch()
	}

	getQuickOptions() {
		this.blogger.blogs.get({}, (err, res) => {
			if (err) {
				console.error(err);
				throw err;
			}
			console.log(`The blog url is ${res.data.url}`);
		});
	}
}

module.exports = YoutubeRequestsController
