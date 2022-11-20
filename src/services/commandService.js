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

export const saveCommandStatus = async ({
  _id,
  status,
}) => {
  try {
    const { data } = await axios.put(`${serviceApi}/${_id}`, {
      estadoPedido: status,
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
  
}

