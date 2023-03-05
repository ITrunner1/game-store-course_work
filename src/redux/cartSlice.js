import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => { 
    let cart = localStorage.getItem('cart');
    if(cart){ 
        return JSON.parse(localStorage.getItem(`cart`));
    } else { 
        return [];
    }
}

const storeInLocalStorage = (data) => { 
    localStorage.setItem(`cart`, JSON.stringify(data));
}

const initialState = { 
    carts: fetchFromLocalStorage()     
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemInCart = state.carts.find(item => 
            item.id === action.payload.id)

            if(isItemInCart){
                const tempCart = state.carts.map(item => {
                    if(item.id === action.payload.id){
                    let tempTotalPrice = item.price;                  
                    
                    return { 
                        ...item, price: tempTotalPrice
                    }
                } else { 
                    return item;
                } 

                });
                state.carts = tempCart;
                storeInLocalStorage(state.carts);
            } else { 
                state.carts.push(action.payload);
                storeInLocalStorage(state.carts);
            }
        },

        removeFromCart: (state, action) => { 
          const tempCart = state.carts.filter(item => item.id !== action.payload);
          state.carts = tempCart;
          storeInLocalStorage(state.carts); 
        },

        clearCart: (state) => {
            state.carts = [];
            storeInLocalStorage(state.carts);
        },       
     }
})

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;
export const getAllCarts = (state) => state.cart.carts;
export default cartSlice.reducer;