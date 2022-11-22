import axios from 'axios';

const serviceApi = 'roles'

export const getAllRoles = async () => {
  try {
    const { data } = await axios.get(serviceApi)
    return data
  } catch (error) {
    return error?.response?.data
  }
}