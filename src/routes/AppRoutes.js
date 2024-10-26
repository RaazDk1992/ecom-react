import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductManagement from "../components/admin/ProductManagement";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import { CartDataProvider } from "../provider/CartDataProvider";
import EcomNavBar from "../components/EcomNavBar";
import Cart from "../components/Cart";
import FloatingCart from "../components/FloatingCart";
import CheckOut from "../components/Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const AppRoutes =() =>{
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  console.log(stripePromise);
    return(
        
           <BrowserRouter>
           <EcomNavBar/>
            <Routes>
                <Route path="/admin" element={<ProductManagement/>}/>
                <Route
          path="/products"
          element={
            <CartDataProvider>
              <Products /> <FloatingCart/>
            </CartDataProvider>
          }
        />
        <Route
          path="/cart"
          element={
            <CartDataProvider>
              <Cart/>
            </CartDataProvider>
          }
        />
        <Route path="/product-details" element={ProductDetails}/>
        <Route path="/checkout" element={
        <Elements stripe={stripePromise}>
          <CartDataProvider>
          <CheckOut/>
          </CartDataProvider>
        </Elements>
        }/>
            </Routes>
           </BrowserRouter>
        
    );
}
export default AppRoutes;