import axios from 'axios';

const serviceApi = 'pedidos'

export const getAllOrders = async () => {
  try {
    const response = await axios.get(serviceApi)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createOrder = async ({
  disheIds
}) => {
  try {
    const { data } = await axios.post(serviceApi, {
      platosID: disheIds,
      reserva: '6351f35a6392257affdaaa8b',
      garzon: '6337ab8820f9be3d30f2355c',
      comentariosPlato: '',
      comentariosDevolucion: '',
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
  
}
