import axios from 'axios';

const serviceApi = 'bodega'

export const getBodega = async (id) => {
  try {
    const { response } = await axios.get(`${serviceApi}/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getAllBodegas = async () => {
  try {
    const { data } = await axios.get(serviceApi)
    return data
  } catch (error) {
    console.log(error)
  }
}
