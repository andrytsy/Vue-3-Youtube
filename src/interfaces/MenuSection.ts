import MenuSectionItemInterface from '@/interfaces/MenuSectionItem'

export default interface MenuSectionInterface {
	id: number
	title: string
	sections: MenuSectionItemInterface[]
}
