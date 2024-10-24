import { createContext, useState, useContext } from "react";

// Create the CartContext
export const CartContext = createContext();

export const CartDataProvider = ({ children }) => {
  // Use useState to manage cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Return the context provider with cartItems and addToCart available
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}  {/* Render the children inside the provider */}
    </CartContext.Provider>
  );
};

