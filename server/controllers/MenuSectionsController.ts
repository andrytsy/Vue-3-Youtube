
class MenuSectionsController {
	static getMenuSections(req, res) {
		const mainSections = [
			{
				id: 'main',
				title: '',
				sections: [
					{id: 'main-1', title: 'Home', path: '/', icon: 'home'},
					{id: 'main-2', title: 'Trending', path: '/trends', icon: 'trending'},
					{id: 'main-3', title: 'Subscriptions', path: '/subscriptions', icon: 'subscriptions'},
					{id: 'main-4', title: 'YouTube Music', path: '/music', icon: 'y-music'}
				]
			},
			{
				id: 'account',
				title: '',
				sections: [
					{ id: 'account-1', title: 'Library', path: '/library', icon: 'library' },
					{ id: 'account-2', title: 'History', path: '/history', icon: 'history' },
					{ id: 'account-3', title: 'Your videos', path: '/videos', icon: 'video' },
					{ id: 'account-4', title: 'Watch later', path: '/later', icon: 'watch' },
					{ id: 'account-5', title: 'Liked videos', path: '/liked', icon: 'like' }
				]
			},
			{
				id: 'best',
				title: 'Best of YouTube',
				sections: [
					{id: 'best-1', title: 'Music', path: '/music', icon: 'y-music'},
					{id: 'best-2', title: 'Gaming', path: '/gaming', icon: 'gaming'},
					{id: 'best-3', title: 'News', path: '/news', icon: 'news'},
					{id: 'best-4', title: 'Live', path: '/live', icon: 'live'},
					{id: 'best-5', title: '360 Video', path: '/vr', icon: 'vr'}
				]
			},
			{
				id: 'subscriptions',
				title: 'Subscriptions',
				sections: []
			},
			{
				id: 'more',
				title: 'More From YouTube',
				sections: [
					{id: 'more-1', title: 'YouTube Premium', path: '/premium', icon: 'youtube'},
					{id: 'more-2', title: 'Gaming', path: '/gaming', icon: 'gaming'},
					{id: 'more-3', title: 'Live', path: '/live', icon: 'live'}
				]
			},
			{
				id: 'help',
				title: '',
				sections: [
					{id: 'help-1', title: 'Settings', path: '/settings', icon: 'settings'},
					{id: 'help-2', title: 'Report history', path: '/settings', icon: 'settings'}
				]
			}
		]

		// @ts-ignore
		res.json(mainSections)
	}
}

module.exports = MenuSectionsController
