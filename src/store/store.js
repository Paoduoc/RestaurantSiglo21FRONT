import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import productReducer from './slices/productSlice'
import disheReducer from './slices/disheSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    dishe: disheReducer,
  },
})