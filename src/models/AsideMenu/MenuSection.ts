import MenuSectionItemInterface from '@/interfaces/MenuSectionItem'
import MenuSectionInterface from '@/interfaces/MenuSection'

export default class MenuSection {
	readonly id: number
	readonly title: string
	readonly items: MenuSectionItemInterface[]

	constructor (data: MenuSectionInterface) {
	    this.id = data.id
	    this.title = data.title
	    this.items = data.items
	}
}
