import axios from 'axios';

const serviceApi = 'menus'

export const getMenu = async () => {
  try {
    const response = await axios.get(serviceApi)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

