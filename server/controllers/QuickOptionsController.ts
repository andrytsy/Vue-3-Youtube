import { Request, Response } from 'express'

export default class QuickOptionsController {
	static getQuickOptions(req: Request, res: Response) {
		const options = [
			{title: 'sdfa'},
			{title: '34ttqqadsgs'},
			{title: 'asdgasgd4433'}
		]

		res.json(options)
	}
}
