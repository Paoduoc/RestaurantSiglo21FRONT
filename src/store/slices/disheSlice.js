import { createSlice } from '@reduxjs/toolkit'

const initialStateDishe = {
  _id: '',
  nombrePlato: '',
  estado: false,
  descripcion: '',
  categoria: '',
  preparacion: '',
  precio: '',
  minutosPreparacion: '',
  ingredientes: [],
  imagen: '',
}

const initialState = {
  dishe: {},
  modalCrudVisibility: false,
  selectedDishe: initialStateDishe,
  formType: 'create',
  allDishes: []
}

export const disheSlice = createSlice({
  name: 'dishe',
  initialState,
  reducers: {
    setDishe: (state, action) => {
      state.user = action.payload
    },
    setModalCrudVisibility: (state, action) => {
      state.modalCrudVisibility = action.payload
    },
    setSelectedDishe: (state, action) => {
      state.selectedDishe = action.payload
    },
    resetSelectedDishe: (state) => {
      state.selectedDishe = initialStateDishe
    },
    setFormType: (state, action) => {
      state.formType = action.payload
    },
    setAllDishes: (state, action) => {
      state.allDishes = action.payload
    }
  },
})

export const {
  setDishe,
  setToken,
  logout,
  setModalCrudVisibility,
  setSelectedDishe,
  resetSelectedDishe,
  setFormType,
  setAllDishes
} = disheSlice.actions

export default disheSlice.reducer