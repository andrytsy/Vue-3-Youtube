import axios from 'axios'
import MenuListItem from '@/models/AsideMenu/MenuListItem'

export const fetchMenuSections = async () => {
    let sections: MenuListItem[] = []

    const { data, status } = await axios.get('/api/getMenuSections')

    if (status === 200 && data.length) {
        sections = data.map((item: object) => new MenuListItem(item))
    }

    return sections
}
