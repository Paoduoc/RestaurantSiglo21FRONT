import { createSlice } from '@reduxjs/toolkit'

const initialStateTable = {
  _id: '',
  numMesa: '',
  estado: true,
  cantSillas: ''
}

const initialState = {
  table: {},
  modalCrudVisibility: false,
  selectedTable: initialStateTable,
  formType: 'create',
  allTables: []
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setTable: (state, action) => {
      state.user = action.payload
    },
    setModalCrudVisibility: (state, action) => {
      state.modalCrudVisibility = action.payload
    },
    setSelectedTable: (state, action) => {
      state.selectedTable = action.payload
    },
    resetSelectedTable: (state) => {
      state.selectedTable = initialStateTable
    },
    setFormType: (state, action) => {
      state.formType = action.payload
    },
    setAllTables: (state, action) => {
      state.allTables = action.payload
    }
  },
})

export const {
  setTable,
  setToken,
  logout,
  setModalCrudVisibility,
  setSelectedTable,
  resetSelectedTable,
  setFormType,
  setAllTables
} = tableSlice.actions

export default tableSlice.reducer