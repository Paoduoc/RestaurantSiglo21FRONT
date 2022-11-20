import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import productReducer from './slices/productSlice'
import disheReducer from './slices/disheSlice'
import tableReducer from './slices/tableSlice'
import cartReducer from './slices/cartSlice'
import commandReducer from './slices/commandSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    dishe: disheReducer,
    table: tableReducer,
    cart: cartReducer,
    command: commandReducer,
  },
})