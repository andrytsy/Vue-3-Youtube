import axios from 'axios'
import MenuSectionItem from '@/models/AsideMenu/MenuSectionItem'
import MenuSection from '@/models/AsideMenu/MenuSection'
import MenuSectionInterface from '@/interfaces/MenuSection'
import MenuSectionItemInterface from '@/interfaces/MenuSectionItem'

const parseSections = (section: MenuSectionInterface) => {
    return new MenuSection({
        ...section,
        items: section.items.map((sectionItem: MenuSectionItemInterface) => new MenuSectionItem(sectionItem))
    })
}

export const fetchMenuSections = async () => {
    let sections: MenuSectionItem[] = []

    const { data, status } = await axios.get('/api/getMenuSections')

    if (status === 200 && data.length) {
        sections = data.map((group: MenuSectionInterface) => parseSections(group))
    }

    return sections
}
