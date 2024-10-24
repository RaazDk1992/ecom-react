import { useContext } from "react";
import { CartContext } from "../provider/CartDataProvider";

export default function Cart(){
    const {itemsList} = useContext(CartContext);
    return(
        <div className="cart-placeholder">
            <i className="ecom-cart-icon fa fa-shopping-cart fa-2x"/>
        </div>
    );

}