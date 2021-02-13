import IUserAgent from '@/models/global/userAgent/UserAgent.interface'

export default class UserAgent implements IUserAgent {
	browser?: string = ''
	version?: string = ''
	device?: string = ''
	os?: object | string = ''
	description?: string = ''

	constructor(data: IUserAgent = {}) {
		this.browser = data.name
		this.version = data.version
		this.device = data.product
		this.os = data.os
		this.description = data.description
	}
}
