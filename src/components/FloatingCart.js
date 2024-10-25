import { useContext, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/styles/FloatingCart.css';
import { CartContext } from "../provider/CartDataProvider";

export default function FloatingCart() {
    const [cartexpanded, setCartExpanded] = useState(false);
    const {cartItems} = useContext(CartContext);    
    return (
        <div id="floating-cart">
            <Dropdown>
                <Dropdown.Toggle as="div" className="icon-toggle">
                    <button className="fa fa-shopping-cart fa-2x ecom-cart-icon"></button>
                    
                </Dropdown.Toggle>

                <Dropdown.Menu>

                  {cartItems.length >0?(cartItems
                    .map(items=>( <Dropdown.Item as="button">Action</Dropdown.Item>)))
                    :(<Dropdown.Item as="button">You have not added any item</Dropdown.Item>)}
                   
                   
                </Dropdown.Menu>
            </Dropdown>
           
        </div>
    );
}
