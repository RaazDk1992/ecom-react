import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

// Create the CartContext
export const CartContext = createContext();

export const CartDataProvider = ({ children }) => {
  
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cartx");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  

  useEffect(()=>{

      localStorage.setItem("cartx",JSON.stringify(cart))
    
  },[cart]);

  const addToCart =(item)=>{
    setCart(
      (prevCart)=>{
        const updatedCart = [...prevCart,item];
        return updatedCart;
      }
    );};

    const removeFromCart = (itemId)=>{
      setCart((prevcart)=>{
        const updatedCart = prevcart.filter((item)=>item.id !==itemId)
        return updatedCart;
      });
    }

  return (
<CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}  {/* Render the children inside the provider */}
    </CartContext.Provider>
  );
};

