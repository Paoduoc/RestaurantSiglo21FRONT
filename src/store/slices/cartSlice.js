import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  plates: [],
  menu: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setPlates: (state, action) => {
      state.plates = action.payload
    },
    addPlate: (state, action) => {
      // aqui buscamos el plato por su id
      const existPlate = state.plates.find(p => p._id === action.payload._id)
      const existPlateMenu = state.menu.find(p => p._id === action.payload._id)
      if (existPlate) {
        // si el plato existe entonces solo sumamos la cantidad del plato seleccionado que se quiere comprar
        existPlate.cantidad++
        existPlateMenu.cantidad++
      } else {
        // si no existe entonces lo agregamos con la cantidad en 1
        state.plates.push({
          ...action.payload,
          cantidad: 1
        })
        existPlateMenu.cantidad++
      }
      localStorage.setItem('cart', JSON.stringify(state.plates));

    },
    removePlate: (state, action) => {
      const plate = state.plates.find(p => p._id === action.payload)
      const plateMenu = state.menu.find(p => p._id === action.payload)
      console.log(plate)

      if (plate.cantidad === 1) {
        state.plates = state.plates.filter(p => p._id !== action.payload)
        plateMenu.cantidad --
      } else {
        plate.cantidad --
        plateMenu.cantidad --
      }

      localStorage.setItem('cart', JSON.stringify(state.plates));

    },
    removeAllPlates: (state) => {
      state.plates = initialState.plates
      localStorage.removeItem('cart')
    },
    setMenu: (state, action) => {
      const info = action.payload.map(info => ({...info, cantidad: 0}))
      state.plates.forEach(plate => {
        const p = info.find(element => element._id === plate._id)
        console.log(p)
        if (p) {
          p.cantidad = plate.cantidad
        }
      })
      state.menu = info
    }
  },
})

export const {
  setPlates,
  addPlate,
  removePlate,
  removeAllPlates,
  setMenu,
} = cartSlice.actions

export default cartSlice.reducer