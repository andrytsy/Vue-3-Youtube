import {Request, Response, NextFunction} from "express";

const notFoundError = async (req: Request, res: Response, next: NextFunction) => {
	const message = 'The url you trying to reach is not hosted on our server.'
	const err = new Error('Not Found')

	// res.status = 404
	await res.json({ type: 'error', message })

	console.log(message)

	next(err)
}

export default notFoundError
