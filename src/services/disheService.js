import axios from 'axios';

const serviceApi = 'platos'

export const getDishe = async (id) => {
  try {
    const { response } = await axios.get(`${serviceApi}/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getAllDishes = async () => {
  try {
    const { data } = await axios.get(serviceApi)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const createDishe = async ({
  name,
  ingredients,
  preparation,
  preparationTime,
  price,
}) => {
  try {
    const { data } = await axios.post(serviceApi, {
      nombrePlato: name,
      estado: true,
      ingredientes: ingredients,
      preparacion: preparation,
      tiempoPreparacion: preparationTime,
      precio: price,
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
  
}

export const editDishe = async ({
  _id,
  name,
  ingredients,
  preparation,
  preparationTime,
  price,
}) => {
  try {
    const { data } = await axios.put(`${serviceApi}/${_id}`, {
      nombrePlato: name,
      ingredientes: ingredients,
      preparacion: preparation,
      tiempoPreparacion: preparationTime,
      precio: price,
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
  
}

export const enableDishe = async ({
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
  createDishe,
  editDishe
}