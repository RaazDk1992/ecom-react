import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import'./../assets/styles/Card.css';

export default function CheckOut(){

    const stripe  = useStripe();
    const elements = useElements();
    const[isFlipped, setIsFlipped] =useState(false);
    const[errorMessage,setErrorMessage] = useState(null);
    const[cardNo,setCardNo] =useState('');


    const handleSubmit = async(e)=>{

        e.preventDefault();
        if(!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        const{error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card:cardElement,
        });

    } 

    const handleChange = (e) => {
        const rawValue = e.target.value.replace(/\D/g, ''); // Remove all non-numeric characters
    
        // Format the input by adding hyphens every 4 characters
        let formattedValue = '';
        for (let i = 0; i < rawValue.length; i++) {
          if (i > 0 && i % 4 === 0) {
            formattedValue += '-'; // Add a hyphen every 4 characters
          }
          formattedValue += rawValue[i]; // Add the current digit
        }
    
        setCardNo(formattedValue); // Update the state with the formatted value

        console.log(formattedValue)
      };




    return (
      <div id="checkout-main">
        <div id="card-form">
           <Form>
                <Form.Group className="mb-3"controlId="checkout-form">
                    <Form.Label>Card No.</Form.Label>
                    <Form.Control type="text" name="card_number" id="card_number" className="no-spinner cardinput"
                     placeholder="XXXX-XXXX-XXXX-XXXX" onChange={handleChange} value={cardNo}/>
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