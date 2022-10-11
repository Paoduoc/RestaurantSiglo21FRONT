import { createSlice } from '@reduxjs/toolkit'

const initialStateUser = {
  _id: '',
  nombre: '',
  apellido: '',
  rut: '',
  contrasenna: '',
  correo: '',
  celular: '',
  fechaCumpleannos: '',
  rol: '',
  genero: '',
}

const initialState = {
  user: {},
  token: '',
  modalCrudVisibility: false,
  selectedUser: initialStateUser,
  formType: 'create',
  allUsers: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
      if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify(action.payload));
      }
    },
    setToken: (state, action) => {
      state.token = action.payload
      if (!localStorage.getItem('token')) {
        localStorage.setItem('token', JSON.stringify(action.payload));
      }
    },
    logout: (state) => {
      state.token = initialState.token
      state.user = initialState.user
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    },
    setModalCrudVisibility: (state, action) => {
      state.modalCrudVisibility = action.payload
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload
    },
    resetSelectedUser: (state) => {
      state.selectedUser = initialStateUser
    },
    setFormType: (state, action) => {
      state.formType = action.payload
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload
    }
  },
})

export const {
  setUser,
  setToken,
  logout,
  setModalCrudVisibility,
  setSelectedUser,
  resetSelectedUser,
  setFormType,
  setAllUsers
} = userSlice.actions

export default userSlice.reducer