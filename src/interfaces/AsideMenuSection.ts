import AsideMenuSectionItemInterface from '@/interfaces/AsideMenuSectionItem'

export default interface AsideMenuSectionInterface {
	id: number;
	title: string;
	items: AsideMenuSectionItemInterface[];
}
