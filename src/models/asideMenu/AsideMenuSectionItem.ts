import AsideMenuSectionItemInterface from '@/interfaces/AsideMenuSectionItem'

export default class AsideMenuSectionItem {
	readonly id: number
	readonly title: string
	readonly icon: string
	readonly path: string

	constructor (data: AsideMenuSectionItemInterface) {
	    this.id = data.id
	    this.title = data.title
	    this.icon = data.icon
	    this.path = data.path
	}
}
