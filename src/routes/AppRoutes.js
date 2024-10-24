import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProductManagement from "../components/admin/ProductManagement";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import { CartDataProvider } from "../provider/CartDataProvider";
import EcomNavBar from "../components/EcomNavBar";
import Cart from "../components/Cart";
import FloatingCart from "../components/FloatingCart";

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
            </Routes>
           </BrowserRouter>
        
    );
}
export default AppRoutes;