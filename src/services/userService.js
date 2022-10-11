import axios from 'axios';

const serviceApi = 'users'

export const getUser = async (id) => {
  try {
    const { response } = await axios.get(`${serviceApi}/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(serviceApi)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const createUser = async ({
  name,
  lastName,
  rut,
  pw,
  email,
  phone,
  birthdate,
  rol,
  gender
}) => {
  console.log(rut)
  try {
    const { data } = await axios.post(serviceApi, {
      nombre: name,
      apellido: lastName,
      rut: rut,
      contrasenna: pw,
      correo: email,
      celular: phone,
      fechaCumpleannos: birthdate,
      rol: rol,
      estatus: true,
      genero: gender
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
  
}

export const editUser = async ({
  _id,
  name,
  lastName,
  rut,
  pw,
  email,
  phone,
  birthdate,
  rol,
  gender,
}) => {
  try {
    console.log(name)
    const { data } = await axios.put(`${serviceApi}/${_id}`, {
      contrasenna: pw,
      nombre: name,
      apellido: lastName,
      correo: email,
      celular: phone,
      fechaCumpleannos: birthdate,
      rol: {
        _id: rol
      },
      genero: gender
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
  
}

export const enableUser = async ({
  status,
  _id,
}) => {
  try {
    const { data } = await axios.delete(`${serviceApi}/${_id}?estatus=${status}`)
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
}

export default {
  createUser,
  editUser
}