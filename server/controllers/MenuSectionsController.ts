
class MenuSectionsController {
	// @ts-ignore
	static getMenuSections(req, res) {
		const mainSections = [
			{
				id: 'main',
				title: '',
				items: [
					{id: 'main-1', title: 'Home', path: '/', icon: 'home'},
					{id: 'main-2', title: 'Trending', path: '/trending', icon: 'trending'},
					{id: 'main-3', title: 'Subscriptions', path: '/subscriptions', icon: 'subscriptions'},
					{id: 'main-4', title: 'YouTube Music', path: '/music', icon: 'y-music'}
				]
			},
			{
				id: 'account',
				title: '',
				items: [
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
				items: [
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
				items: []
			},
			{
				id: 'more',
				title: 'More From YouTube',
				items: [
					{id: 'more-1', title: 'YouTube Premium', path: '/premium', icon: 'premium'},
					{id: 'more-2', title: 'Gaming', path: '/gaming', icon: 'gaming'},
					{id: 'more-3', title: 'Live', path: '/live', icon: 'live'}
				]
			},
			{
				id: 'help',
				title: '',
				items: [
					{id: 'help-1', title: 'Settings', path: '/settings', icon: 'settings'},
					{id: 'help-2', title: 'Report history', path: '/reports', icon: 'flag'},
					{id: 'help-3', title: 'Send feedback', path: '/feedback', icon: 'feedback'}
				]
			}
		]

		// @ts-ignore
		res.json(mainSections)
	}
}

module.exports = MenuSectionsController
