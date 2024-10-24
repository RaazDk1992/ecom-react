import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductManagement from "../components/admin/ProductManagement";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import CartDropDown from "../components/CartDropDown";
import { CartDataProvider } from "../provider/CartDataProvider";
import EcomNavBar from "../components/EcomNavBar";

const AppRoutes =() =>{
    return(
        
           <BrowserRouter>
           <EcomNavBar/>
            <Routes>
                <Route path="/admin" element={<ProductManagement/>}/>
                <Route
          path="/products"
          element={
            <CartDataProvider>
              <Products />
            </CartDataProvider>
          }
        />
        <Route
          path="/cart"
          element={
            <CartDataProvider>
              <CartDropDown />
            </CartDataProvider>
          }
        />
                <Route path="/product-details" element={ProductDetails}/>
            </Routes>
           </BrowserRouter>
        
    );
}
export default AppRoutes;