import axios from 'axios';

const serviceApi = 'menus'

export const getMenu = async () => {
  try {
    const response = await axios.get(`${serviceApi}/63575fc31b5bc7bf9cfcd4c5`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

