import { useOutletContext } from "react-router-dom";
import { CartContext } from "../provider/CartDataProvider";
import { useContext } from "react";

export default function CartDropDown(){

    const {cartItems} = useContext(CartContext);
    return(
        <p>Total Items in cart {cartItems.length} </p>
    );
}