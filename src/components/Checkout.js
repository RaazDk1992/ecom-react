import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { Card, Container,Row,Col, Form, Button } from "react-bootstrap";
import'./../assets/styles/Card.css';
import chipLogo from './../assets/logo/c-chip.png';
import visaLogo from './../assets/logo/visa.PNG';

const Checkout = () => {
  const[cardDetails,setCardDetails] =useState({
    card_number:null,
    card_holder_name:null,
    card_expiry_date :null,
    card_cvc:null,
    shipping_address:null,
    email:null,
    amount:200
  });

  const[card,setCardType] = useState('undefined');


  const makePayment =(e)=>{
    e.preventDefault();
    console.log(cardDetails.card_number);

  }

  function   delimitedCardNo(event){

    const cleanedVal = event.target.value.replace(/\D/g,'');;
    
    const formattedCardNo = cleanedVal.match(/.{1,4}/g)?.join('-') || ''; // Group into sets of 4

    event.target.value=formattedCardNo;
    setCardType(cardType(cleanedVal));
    setFields(event);

  }

  function cardType(cardNo){
    const patterns={
      Visa:/^4[0-9]{0,15}$/,
      MasterCard: /^5[1-5][0-9]{0,14}$/,
      AmericanExpress: /^3[47][0-9]{0,13}$/,
      Discover: /^6(?:011|5[0-9]{2})[0-9]{0,12}$/

    };
    for(const[cardType,pattern] of Object.entries(patterns)){
      if(pattern.test(cardNo)){
        return cardType;
      }
    }
    return "Undefined";
  }
  const setFields =(e)=>{

    const{name,value} = e.target;
    setCardDetails(prevDetails =>({
      ...cardDetails,[name]:value
    }));


 

  }
  return (
    <Container id="checkout-main" className="p-4">
      <Row className="">
        
        {/* Card Form */}
        <Col xs={12} md={6} id="card-form">
          <Form>
            <Form.Group controlId="card-num">
              <Form.Label>Card No.</Form.Label>
              <Form.Control
                type="text"
                name="card_number"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                className="mb-3 cardinput"
                onChange={delimitedCardNo}
              />
              
            </Form.Group>

            <Form.Group controlId="name-on-card">
            <Form.Label>Name on Card</Form.Label> 
            <Form.Control type="text" name="card_holder_name" placeholder="John Doe" className="mb-3" onChange={setFields}/>
              
            </Form.Group>


            <Form.Group controlId="card_expiry_date">
            <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="text" name="card_expiry_date" placeholder="MM/YY" className="mb-3"  onChange={setFields}/>
              
            </Form.Group>
            <Form.Group controlId="card_cvc">
            <Form.Label>CvC No.</Form.Label>
            <Form.Control type="number" name="card_cvc" placeholder="CVC" className="mb-3"  onChange={setFields}/>
              
            </Form.Group>
            <Form.Group controlId="shipping_address">
            <Form.Label>Shipping Address</Form.Label>
              <Form.Control type="text" name="shipping_address" placeholder="Your address" className="mb-3" onChange={setFields} />
            </Form.Group>
            
            <Button onClick={makePayment}>Pay</Button>

          </Form>
        </Col>

        {/* Card Display */}
        <Col xs={12} md={4} className="ecom-card-placeholder d-flex ">
          <div className="ecom-card">
            <div className="ecom-card-face ecom-card-face-front p-3">
              <div id="card-chip"><img src={chipLogo} alt="Chip" className="chip-image" /></div>
              <div id="card-logo">
               {card.toLocaleLowerCase() === 'visa' && <img src={visaLogo}></img>}
              </div>
              <div id="card-number">XXXX-XXXX-XXXX-XXXX</div>
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