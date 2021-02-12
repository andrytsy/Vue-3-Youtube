import axios from 'axios'
import AsideMenuSectionItem from '@/models/asideMenu/AsideMenuSectionItem'
import AsideMenuSection from '@/models/asideMenu/AsideMenuSection'
import AsideMenuSectionInterface from '@/interfaces/AsideMenuSection'
import AsideMenuSectionItemInterface from '@/interfaces/AsideMenuSectionItem'

const parseSections = (section: AsideMenuSectionInterface) => {
    return new AsideMenuSection({
        ...section,
        items: section.items.map((sectionItem: AsideMenuSectionItemInterface) => new AsideMenuSectionItem(sectionItem))
    })
}

export const fetchMenuSections = async () => {
    let sections: AsideMenuSectionItem[] = []

    const { data, status } = await axios.get('/api/getMenuSections')

    if (status === 200 && data.length) {
        sections = data.map((group: AsideMenuSectionInterface) => parseSections(group))
    }

    return sections
}
