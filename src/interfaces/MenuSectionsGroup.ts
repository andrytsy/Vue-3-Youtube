import MenuListItemInterface from '@/interfaces/MenuListItem'

export default interface MenuSectionsGroupInterface {
	id: number
	title: string
	sections: MenuListItemInterface[]
}
