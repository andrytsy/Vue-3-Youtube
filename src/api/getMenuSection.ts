import axios from 'axios'

export const getMenuSection = () => {
    return axios.get('/api/getMenuSections')
}
