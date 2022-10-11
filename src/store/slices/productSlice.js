import { createSlice } from '@reduxjs/toolkit'

const initialStateProduct = {
  _id: '',
  nombreProducto: '',
  tipo: '',
}

const initialState = {
  product: {},
  modalCrudVisibility: false,
  selectedProduct: initialStateProduct,
  formType: 'create',
  allProducts: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.user = action.payload
    },
    setModalCrudVisibility: (state, action) => {
      state.modalCrudVisibility = action.payload
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload
    },
    resetSelectedProduct: (state) => {
      state.selectedProduct = initialStateProduct
    },
    setFormType: (state, action) => {
      state.formType = action.payload
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload
    }
  },
})

export const {
  setProduct,
  setToken,
  logout,
  setModalCrudVisibility,
  setSelectedProduct,
  resetSelectedProduct,
  setFormType,
  setAllProducts
} = productSlice.actions

export default productSlice.reducer