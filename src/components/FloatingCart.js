import { useContext, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/styles/FloatingCart.css';
import { CartContext } from "../provider/CartDataProvider";

export default function FloatingCart() {
    const { cart } = useContext(CartContext);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <div id="floating-cart" key={"floating-cart"}>
            <Dropdown key={"floating-cart-dropdown"}>
                <Dropdown.Toggle as="div" className="icon-toggle">
                    <button 
                        className="fa fa-shopping-cart fa-2x ecom-cart-icon" 
                        style={{ color: '#2456a6' }}
                    ></button>
                </Dropdown.Toggle>

                {cart.length > 0 ? (
                    <Dropdown.Menu>
                        {cart.map((item, index) => (
                            <Dropdown.Item key={index} href="#/action-1">
                                {item.productName || 'Item'}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                ) : (
                    <Dropdown.Menu>
                        <Dropdown.Item disabled>No items in cart</Dropdown.Item>
                    </Dropdown.Menu>
                )}
            </Dropdown>

            <span
                style={{
                    left: '5px',
                    bottom: '40%',
                    position: 'relative',
                    width: '15px',
                    height: '15px',
                    backgroundColor: 'red',
                    border: '1px solid red',
                    borderRadius: '50%',
                    color: 'white'
                }}
                className="d-flex align-items-center justify-content-center"
            >
                {cart.length}
            </span>
        </div>
    );
}
