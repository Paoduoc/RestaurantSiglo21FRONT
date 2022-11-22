import axios from 'axios';

const serviceApi = 'reserva'


export const getAllReservations = async () => {
  try {
    const date = new Date()
    const fechaIngreso = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    const { data } = await axios.get(serviceApi, {
      params: {
        fechaIngreso,
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const startReservation = async ({
  tableId,
}) => {
  try {
    console.log(tableId)
    const { data } = await axios.post(serviceApi, {
      fechaSalida: '',
      mesa: tableId,
      reservada: true,
      sobrecupo: false,
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
  
}

export const endReservation = async ({
  _id,
}) => {
  try {
    const { data } = await axios.put(`${serviceApi}/${_id}`)
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
}

export const putOvercrowding = async ({
  _id,
  overcrowding,
}) => {
  try {
    const { data } = await axios.put(`${serviceApi}/sobrecupo/${_id}`, {
      sobrecupo: overcrowding,
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
}