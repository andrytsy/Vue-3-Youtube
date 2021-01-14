export default class MenuListItem {
	readonly id: number
	readonly title: string
	readonly icon: string
	readonly path: string

	constructor (
	    id: number,
	    title: string,
	    icon: string,
	    path: string
	) {
	    this.id = id
	    this.title = title
	    this.icon = icon
	    this.path = path
	}
}
