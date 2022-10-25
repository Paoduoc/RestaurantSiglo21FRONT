import axios from 'axios';

const serviceApi = 'bodega'

export const getAllVaults = async () => {
  try {
    const { data } = await axios.get(serviceApi)
    return data
  } catch (error) {
    console.log(error)
  }
}