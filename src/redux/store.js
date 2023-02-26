import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';

const store = configureStore( { 
    reducer: { 
        menu: menuReducer,  
        cart: cartReducer,   
        user: userReducer,      
    }
});

export default store;