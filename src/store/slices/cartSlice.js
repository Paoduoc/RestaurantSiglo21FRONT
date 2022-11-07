import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plates: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setPlates: (state, action) => {
      state.plates = []
    },
    addPlate: (state, action) => {
      // aqui buscamos el plato por su id
      const existPlate = state.plates.find(p => p._id === action.payload._id)
      if (existPlate) {
        // si el plato existe entonces solo sumamos la cantidad del plato seleccionado que se quiere comprar
        existPlate.cantidad++
      } else {
        // si no existe entonces lo agregamos con la cantidad en 1
        state.plates.push({
          ...action.payload,
          cantidad: 1
        })
      }
    },
    removePlate: (state, action) => {
      const plate = state.plates.find(p => p._id === action.payload)
      console.log(plate)

      if (plate.cantidad === 1) {
        state.plates = state.plates.filter(p => p._id !== action.payload)
      } else {
        plate.cantidad --
      }

    },
    removeAllPlates: (state) => {
      state.plates = initialState.plates
    },
  },
})

export const {
  setPlates,
  addPlate,
  removePlate,
  removeAllPlates,
} = cartSlice.actions

export default cartSlice.reducer