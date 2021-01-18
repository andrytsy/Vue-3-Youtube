import MenuSectionItemInterface from '@/interfaces/MenuSectionItem'

export default class MenuSectionItem {
	readonly id: number
	readonly title: string
	readonly icon: string
	readonly path: string

	constructor (data: MenuSectionItemInterface) {
	    this.id = data.id
	    this.title = data.title
	    this.icon = data.icon
	    this.path = data.path
	}
}
