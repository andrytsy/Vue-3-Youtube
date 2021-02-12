export default interface IUserAgent {
	fullUserAgent: string
	browser: string
	browserVersion: string
	device: string
	deviceVersion: string
	getParseUserAgent(fullUserAgent: string): object
}
