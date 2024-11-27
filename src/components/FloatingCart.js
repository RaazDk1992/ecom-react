import { useContext, useEffect, useRef, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/styles/FloatingCart.css';
import { CartContext } from "../provider/CartDataProvider";
import { Button, CloseButton, Col, ListGroup, Modal, Row } from "react-bootstrap";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

export default function FloatingCart() {
    const { cart,updateCart,removeFromCart } = useContext(CartContext);
    const[cartOpen, setCartOpen] = useState(false);
    const[fields,setFields] = useState([]);
    
    
     useEffect(() => {
        // Populate `fields` whenever `cart` changes.
        console.log(cart);
       if(Array.isArray(cart)){
        const temp = cart.map((item) => ({
            id: item.productId,
            quantity: item.quantity,
            productName: item.productName,
            imagePath: item.imagePath,
            price: item.price,
        }));
        setFields(temp);
       }
    }, [cart]); 


    const openCart=()=>{
        setCartOpen(true);

    }
    const closeCart=()=>{
        setCartOpen(false);
    }


    const handleQuantityChange =(productId, value) => {
        setFields((prevFields) =>
            prevFields.map((field) =>
                field.id === productId ? { ...field, quantity: value } : field
            )
        );
    };



    const handleFocusOut = (productId,qty)=>( 
       updateCart(productId,qty)
    );

   
    return (
        <>
        
        <div id="floating-cart" key={"floating-cart"}>
           <Button onClick={openCart}>< i className="fa fa-shopping-cart fa-2x"/></Button>
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

        <Modal show={cartOpen} onHide={closeCart} key={"floating_cart"}>
            <Modal.Header >
                <Modal.Title>Your Cart &nbsp; < i className="fa fa-shopping-cart fa-2x"/></Modal.Title> 
                <CloseButton onClick={closeCart}/>
            </Modal.Header>
            <Modal.Body>
            {fields.length>0?(
                <ListGroup key={"cart_list"}>
                {fields.map((item,index)=>(
                      <ListGroup.Item key={"cart_item_"+item.id}>
                            <Row key={index} className="align-items-center mb-3">

                                <Col xs={3}>
                                <span className="product_name"> {item.productName}</span>
                                </Col>
                               <Col xs={1}>
                               <img src={item.imagePath} style={{width:'30px', height:'30px'}}/>
                               </Col>
                                
                                <Col xs={2}>
                                <span>Rs.{item.price}</span>
                                </Col>
                                <Col xs={2}>
                                    <span>Qty: &nbsp;</span>
                                    <input type="text" style={{width:'50px'}} value={item.quantity} 
                                    onChange={(e)=>handleQuantityChange(item.id,parseInt(e.target.value,10))}
                                    onBlur={(e)=>updateCart(item.id,parseInt(e.target.value,10))}/>
                               </Col>
                               <Col xs={1}>
                               <Button variant="primary">+</Button>
                               </Col>
                               <Col xs={1}>
                               <Button variant="danger">-</Button>
                               </Col>
                               <Col xs={1}>
                               <Button variant="danger" onClick={()=>removeFromCart(item.id)}><i className="fa fa-trash"></i></Button>
                               </Col>

                            </Row>
                           
                      </ListGroup.Item>
                ))}
              <ListGroup.Item>
                <Row className="align-items-center mb-3">
                    <Col xs={12}><Button variant="primary" style={{width:'100%'}}>Prceed to Checkout</Button></Col>
                </Row>
              </ListGroup.Item>
             </ListGroup>
            ):(<ListGroup>
                <ListGroup.Item>
                    <p>Your Cart is Empty!!</p>
                </ListGroup.Item>
            </ListGroup>)}
            </Modal.Body>

        </Modal>
        </>
    );
}
