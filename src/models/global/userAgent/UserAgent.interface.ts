export default interface IUserAgent {
	/**
	 * The platform description.
	 */
	description?: string;
	/**
	 * The name of the browser's layout engine.
	 *
	 * The list of common layout engines include:
	 * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
	 */
	layout?: string;
	/**
	 * The name of the product's manufacturer.
	 *
	 * The list of manufacturers include:
	 * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
	 * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
	 * "Nokia", "Samsung" and "Sony"
	 */
	manufacturer?: string;
	/**
	 * The name of the browser/environment.
	 *
	 * The list of common browser names include:
	 * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
	 * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
	 * "Opera Mini" and "Opera"
	 *
	 * Mobile versions of some browsers have "Mobile" appended to their name:
	 * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
	 */
	name?: string;
	/**
	 * The alpha/beta release indicator.
	 */
	prerelease?: string;
	/**
	 * The name of the product hosting the browser.
	 *
	 * The list of common products include:
	 *
	 * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
	 * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
	 */
	product?: string;
	/**
	 * The browser's user agent string.
	 */
	ua?: string;
	/**
	 * The version of the OS.
	 */
	version?: string;

	os?: object | string
}
