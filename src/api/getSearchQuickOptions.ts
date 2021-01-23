import axios from 'axios'

export const getSearchQuickOptions = async (searchString: string) => {
    let options: string[] = []
    const params = { searchString }

    const { data, status } = await axios.get('/api/getSearchQuickOptions', { params })

    if (status === 200 && data.length) {
        options = data
    }

    return options
}
