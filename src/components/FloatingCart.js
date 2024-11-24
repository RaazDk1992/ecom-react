import { useContext, useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/styles/FloatingCart.css';
import { CartContext } from "../provider/CartDataProvider";

export default function FloatingCart() {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    useEffect(()=>{console.log(cart.length)},[cart]);

    return (
        <div id="floating-cart">
            <Dropdown>
                <Dropdown.Toggle as="div" className="icon-toggle">
                    <button className="fa fa-shopping-cart fa-2x ecom-cart-icon"></button>
                    
                    
                </Dropdown.Toggle>

                <Dropdown.Menu>

                 
                   
                   
                </Dropdown.Menu>
            </Dropdown>
            <span style={{left:'5px',bottom:'40%',position:'relative',width:'15px',height:'15px',backgroundColor:'red',border:'1px solid red',borderRadius:'50%',color:'white'}} className="d-flex align-items-center justify-content-center">x</span>
        </div>
    );
}
