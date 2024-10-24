import { useState } from "react";
import'./../assets/styles/FloatingCart.css';
export default function FloatingCart(){
    const[cartexpanded,setCartExpanded] = useState(false);
    return(<div id="floating-cart">
        <button className="fa fa-shopping-cart fa-2x ecom-cart-icon"></button>
    </div>);
}