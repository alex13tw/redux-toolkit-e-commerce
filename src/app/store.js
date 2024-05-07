import { configureStore } from '@reduxjs/toolkit';
import slideReducers from '../features/Slices/sliderSlice'
import productReducer from '../features/Slices/productSlice'
import cartReducer from '../features/Slices/cartSlice'
import authReducer from '../features/Slices/authSlice'
export const store = configureStore({
  reducer: {
   slider:slideReducers,
   products:productReducer,
   cart:cartReducer,
   user:authReducer
   
  },
});
