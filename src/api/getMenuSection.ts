import axios from 'axios'
import MenuSectionItem from '@/models/AsideMenu/MenuSectionItem'
import MenuSection from '@/models/AsideMenu/MenuSection'
import MenuSectionInterface from '@/interfaces/MenuSection'

const parseSectionGroups = (group: MenuSectionInterface) => {
    return new MenuSection({
        ...group,
        sections: group.sections.map((section) => new MenuSectionItem(section))
    })
}

export const fetchMenuSections = async () => {
    let sections: MenuSectionItem[] = []

    const { data, status } = await axios.get('/api/getMenuSections')

    if (status === 200 && data.length) {
        sections = data.map((group: MenuSectionInterface) => parseSectionGroups(group))
    }

    return sections
}
