import { createContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

// Create the CartContext
export const CartContext = createContext();

export const CartDataProvider = ({ children }) => {
  
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("excom");
    return storedCart ? JSON.parse(storedCart) : [];
  });


     // Save cart to localStorage whenever it updates
     useEffect(() => {
      localStorage.setItem("excom", JSON.stringify(cart));
  }, [cart]);

  // Add an item to the cart
  const addToCart = (item) => {

       setCart((prevCart)=>{
        const existingItem = prevCart.find((cartItem)=>(cartItem.productId===item.productId));

        if(existingItem){
            return prevCart.map((cartItem)=>
                cartItem.productId ===item.productId?{...cartItem,quantity:cartItem.quantity+1}:
            cartItem)
        } else {
            return [...prevCart,item];
        }
       });

};

const updateCart=(productId, qty) =>{

    setCart((prevCart)=>  {
        return prevCart.map((cartItem)=>(cartItem.productId===productId?{...cartItem,quantity:qty}:cartItem));
    });

};

  // Remove an item from the cart
  const removeFromCart = (itemId) => {
      console.log(itemId)
      setCart((prevCart) => prevCart.filter((item) => item.productId !== itemId));
  };

  return (
      <CartContext.Provider value={{ cart, addToCart,updateCart, removeFromCart }}>
          {children}
      </CartContext.Provider>
  );
};