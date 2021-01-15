import MenuListItemInterface from '@/interfaces/MenuListItem'

export default class MenuListItem {
	readonly id: number
	readonly title: string
	readonly icon: string
	readonly path: string

	constructor (data: MenuListItemInterface) {
	    this.id = data.id
	    this.title = data.title
	    this.icon = data.icon
	    this.path = data.path
	}
}
