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
import Login from "../components/Auth/Login";
import AccessDenied from "../components/AccessDenied";
import ProtectedRoute from "./ProtectedRoutes";
import Register from "../components/Auth/Register";
const AppRoutes =() =>{
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    return(
        
           <BrowserRouter>
           <EcomNavBar/>

            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Register/>}/>
                <Route path="/admin" element={<ProtectedRoute adminPage={true}><ProductManagement/></ProtectedRoute>}/>
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
        <Route path="/product-details" element={<ProductDetails/>}/>
        <Route path="/checkout" element={
        <CartDataProvider>
            <Elements stripe={stripePromise}>
        
            <CheckOut/>
       
           </Elements>

        </CartDataProvider>
        }/>

        <Route path="/login" element={Login}/>
        <Route path="/access-denied" element={AccessDenied}/> 
          </Routes>
           </BrowserRouter>
        
    );
}
export default AppRoutes;