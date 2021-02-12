import IUserAgent from '@/models/global/userAgent/UserAgent.interface'

export default class UserAgent implements IUserAgent {
	fullUserAgent: string
	browser: string
	browserVersion: string
	device: string
	deviceVersion: string

	constructor(fullUserAgent: string) {
		this.fullUserAgent = fullUserAgent;

		const {
			browser,
			browserVersion,
			device,
			deviceVersion
		} = this.getParseUserAgent()

		this.browser = browser
		this.browserVersion = browserVersion
		this.device = device
		this.deviceVersion = deviceVersion
	}

	getParseUserAgent() {
		const browser = this.fullUserAgent
		const browserVersion = this.fullUserAgent
		const device = this.fullUserAgent
		const deviceVersion = this.fullUserAgent

		return {
			browser,
			browserVersion,
			device,
			deviceVersion
		}
	}
}
