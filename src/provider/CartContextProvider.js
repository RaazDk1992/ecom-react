import { Children, useContext } from "react";
import { createContext } from "react";

export const CartContext = createContext();
export const CartDataProvider = ({Children})=>{
    const[cartItems,setCartItems] =useContext([]);
    const addToCart =(product)=>{
        setCartItems((prevItems)=>[...prevItems,product]);
    };
    
    return(<CartContext.Provider value={{cartItems,addToCart}}>
        {Children}
    </CartContext.Provider>);
}
