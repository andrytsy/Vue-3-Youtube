import axios from 'axios'
import MenuListItem from '@/models/AsideMenu/MenuListItem'
import MenuSectionsGroup from '@/models/AsideMenu/MenuSectionsGroup'
import MenuSectionsGroupInterface from '@/interfaces/MenuSectionsGroup'

const parseSectionGroups = (group: MenuSectionsGroupInterface) => {
    return new MenuSectionsGroup({
        ...group,
        sections: group.sections.map((section) => new MenuListItem(section))
    })
}

export const fetchMenuSections = async () => {
    let sections: MenuListItem[] = []

    const { data, status } = await axios.get('/api/getMenuSections')

    if (status === 200 && data.length) {
        sections = data.map((group: MenuSectionsGroupInterface) => parseSectionGroups(group))
    }

    return sections
}
