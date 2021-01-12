export default class MenuListItem {
	readonly id: number
	readonly title: string
	readonly src: string

	constructor(
		id: number,
		title: string,
		src: string
	) {
		this.id = id
		this.title = title
		this.src = src
	}
}
