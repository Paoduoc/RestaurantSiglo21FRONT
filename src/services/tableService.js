import axios from 'axios';

const serviceApi = 'mesas'

export const getTable = async (id) => {
  try {
    const { data } = await axios.get(`${serviceApi}/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getAllTables = async () => {
  try {
    const { data } = await axios.get(serviceApi)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const createTable = async ({
  tableNumber,
  shairAmmount,
}) => {
  try {
    const { data } = await axios.post(serviceApi, {
      numMesa: tableNumber,
      cantSillas: shairAmmount,
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
  
}

export const editTable = async ({
  _id,
  tableNumber,
  shairAmmount,
}) => {
  try {
    const { data } = await axios.put(`${serviceApi}/${_id}`, {
      numMesa: tableNumber,
      cantSillas: shairAmmount,
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
  
}

export const enableTable = async ({
  status,
  _id,
}) => {
  try {
    const { data } = await axios.delete(`${serviceApi}/${_id}?estado=${status}`)
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
}

export default {
  createTable,
  editTable
}