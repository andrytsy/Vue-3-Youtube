const {google} = require('googleapis')
const {authenticate} = require('@google-cloud/local-auth');
const youtube = google.youtube('v3');
const path = require('path');

declare class YoutubeRequestsController {
	apiKey: string

	constructor() {
		this.apiKey = 'AIzaSyA9R28-FYCYK6Cg4w8wzc77iYEKsWb88ew'
	}

	static async getQuickOptions(query) {
		const auth = await authenticate({
			keyfilePath: path.join('', './oauth2.keys.json'),
			scopes: ['https://www.googleapis.com/auth/youtube']
		});

		google.options({auth});

		const res = await youtube.search.list({
			part: 'id,snippet',
			q: query
		});

		console.log(res.data);
	}
}

module.exports = YoutubeRequestsController
