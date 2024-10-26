import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { Card, Container,Row,Col, Form } from "react-bootstrap";
import'./../assets/styles/Card.css';
import chipLogo from './../assets/assets/global/logo/c-chip.png';

const Checkout = () => {
  return (
    <Container id="checkout-main" className="p-4">
      <Row className="">
        
        {/* Card Form */}
        <Col xs={12} md={6} id="card-form">
          <Form>
            <Form.Group controlId="checkout-form">
              <Form.Label>Card No.</Form.Label>
              <Form.Control
                type="text"
                name="card_number"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                className="mb-3 cardinput"
              />
              
              <Form.Label>Name on Card</Form.Label>
              <Form.Control type="text" name="card_holder_name" placeholder="John Doe" className="mb-3" />

              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="text" name="card_expiry_date" placeholder="MM/YY" className="mb-3" />

              <Form.Label>CvC No.</Form.Label>
              <Form.Control type="number" name="card_cvc" placeholder="CVC" className="mb-3" />

              <Form.Label>Shipping Address</Form.Label>
              <Form.Control type="text" name="shipping_address" placeholder="Your address" className="mb-3" />

              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="johndoe@gmail.com" className="mb-3" />
            </Form.Group>
          </Form>
        </Col>

        {/* Card Display */}
        <Col xs={12} md={4} className="ecom-card-placeholder d-flex ">
          <div className="ecom-card">
            <div className="ecom-card-face ecom-card-face-front p-3">
              <div id="card-chip"><img src={chipLogo} alt="Chip" className="chip-image" /></div>
              <div id="card-logo"></div>
              <div id="cardholders-name">John Doe</div>
              <div id="expiry-date">MM/YY</div>
            </div>
            <div className="ecom-card-face ecom-card-face-back">
              <p>Card Back Design</p>
            </div>
          </div>
        </Col>
        
      </Row>
    </Container>
  );
};

export default Checkout;