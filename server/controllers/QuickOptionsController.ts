export default class QuickOptionsController {
	// @ts-ignore
	static getQuickOptions(req, res) {
		const options = [
			{title: 'sdfa'},
			{title: '34ttqqadsgs'},
			{title: 'asdgasgd4433'}
		]

		res.json(options)
	}
}
