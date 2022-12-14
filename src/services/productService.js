import axios from 'axios';

const serviceApi = 'productos'

export const getProduct = async (id) => {
  try {
    const { response } = await axios.get(`${serviceApi}/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(serviceApi)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const createProduct = async ({
  name,
  type,
  gDispo,
  gMin,
}) => {
  try {
    const { data } = await axios.post(serviceApi, {
      nombreProducto: name,
      estado: true,
      tipo: type,
      gramos: parseInt(gDispo),
      cantidadMin: parseInt(gMin),
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
  
}

export const editProduct = async ({
  _id,
  name,
  type,
  gDispo,
  gMin,
}) => {
  try {
    const { data } = await axios.put(`${serviceApi}/${_id}`, {
      nombreProducto: name,
      tipo: type,
      gramos: parseInt(gDispo),
      cantidadMin: parseInt(gMin),
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
  
}

export const enableProduct = async ({
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
  createProduct,
  editProduct
}