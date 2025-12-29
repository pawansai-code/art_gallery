import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import galleryReducer from '../features/Home/homeSlice';
import cartReducer from '../features/shop/cartSlice';
import shopReducer from '../features/shop/shopSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        home: galleryReducer,
        shop: shopReducer,
        cart: cartReducer,
        user: userReducer,
    },
});
