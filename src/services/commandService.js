import axios from 'axios';

const serviceApi = 'comandas'

export const getAllCommands = async () => {
  try {
    const response = await axios.get(serviceApi)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

