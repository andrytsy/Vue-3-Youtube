
class MenuSectionsController {
	// @ts-ignore
	static getMenuSections(req, res) {
		const mainSections = [
			{ id: 1, title: 'Home', path: '/', icon: '' },
			{ id: 1, title: 'Trending', path: '/feed/trends', icon: '' },
			{ id: 1, title: 'Subscriptions', path: '/feed/Subscriptions', icon: '' }
		]

		// @ts-ignore
		res.json(mainSections)
	}
}

module.exports = MenuSectionsController
