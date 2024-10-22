import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import ProductManagement from "../components/admin/ProductManagement";
import Products from "../components/Products";

const AppRoutes =() =>{
    return(
        
            <Routes>
                <Route path="/admin" Component={ProductManagement}/>
                <Route path="/" Component={Products}/>
            </Routes>
        
    );
}
export default AppRoutes;