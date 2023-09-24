import React, { createContext, useReducer, useEffect } from 'react';
import { useContext } from 'react';
import cartReducer from "../reducer/cart_reducer";

const CartContext = createContext();

const initialState = {
    cart: [],
    total_item: 0,
    total_amount: "",
    shipping_fee: 200,
}
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);


   const addtocart = (id, color, amount, prodcut) =>{
    dispatch({type:"ADD_TO_CART", payload: {id, color, amount, prodcut}})
   
   }
   const removeItem = (id) => {
    dispatch({type:"REMOVE_ITEM", payload: id})
   }

return <CartContext.Provider 
value={{...state, addtocart, removeItem}}>
    {children}
    </CartContext.Provider>;
};

 const useCartContext = () => {
    return useContext(CartContext);
}

export {CartProvider, useCartContext};
