import MenuListItemInterface from '@/interfaces/MenuListItem'
import MenuSectionsGroupInterface from '@/interfaces/MenuSectionsGroup'

export default class MenuSectionsGroup {
	readonly id: number
	readonly title: string
	readonly sections: MenuListItemInterface[]

	constructor (data: MenuSectionsGroupInterface) {
	    this.id = data.id
	    this.title = data.title
	    this.sections = data.sections
	}
}
