import AsideMenuSectionItemInterface from '@/interfaces/AsideMenuSectionItem'
import AsideMenuSectionInterface from '@/interfaces/AsideMenuSection'

export default class AsideMenuSection {
	readonly id: number
	readonly title: string
	readonly items: AsideMenuSectionItemInterface[]

	constructor (data: AsideMenuSectionInterface) {
	    this.id = data.id
	    this.title = data.title
	    this.items = data.items
	}
}
