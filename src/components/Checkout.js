import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import'./../assets/styles/Card.css';

export default function CheckOut(){

    const stripe  = useStripe();
    const elements = useElements();
    const[isFlipped, setIsFlipped] =useState(false);
    const[errorMessage,setErrorMessage] = useState(null);
    const handleSubmit = async(e)=>{

        e.preventDefault();
        if(!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        const{error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card:cardElement,
        });

    } 

    return (
      <div id="checkout-main">
        <div id="card-form">
           <Form>
                <Form.Group className="mb-3"controlId="checkout-form">
                    <Form.Label>Card No.</Form.Label>
                    <Form.Control type="number" name="card_number" id="card_number" placeholder="Your card number"/>
                    <Form.Label>Name on Card</Form.Label>
                    <Form.Control type="text" name="card_holder_name" id="card_holder_name" placeholder="John Doe"/>
                    <Form.Label>Expiry Date.</Form.Label>
                    <Form.Control type="text" name="card_expiry_date" id="card_expiry_date" placeholder="mm/yy"/>
                    <Form.Label>CvC No.</Form.Label>
                    <Form.Control type="number" name="card_cvc" id="card_cvc" placeholder="Cvc number on back of card"/>
                    <Form.Label>Shipping Address</Form.Label>
                    <Form.Control type="text" name="shipping_number" id="shipping_number" placeholder="Your card number"/>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" name="ecom_customer_email" id="ecom_customer_email" placeholder="johndoe@gmail.com"/>
                </Form.Group>
           </Form>
        </div>
        <div className="ecom-card-placeholder">
        <div className="ecom-card">
            <div className="ecom-card-face ecom-card-face-front">
                <div id="card-chip"></div>
                <div id="card-logo"></div>
                <div id="cardholders-name"></div>
                <div id="expiry-date"></div>
            </div>

            <div className="ecom-card-face ecom-card-face-back">
                <p>df</p>
            </div>

        </div>

        </div>
      </div>
    );

   
}