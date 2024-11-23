import { useCallback, useContext, useEffect, useState } from "react";
import FetchData from "../provider/FetchData";
import { Alert, Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import './../assets/styles/Products.css';
import Ratings from "./Ratings";
import RenderStars from "./Stars";
import {useNavigate } from "react-router-dom";
import Slider from "./Slider";
import api from "../provider/api";
import './../assets/styles/fonts.css'

export default function Products(){

  const [items, setItems] = useState([]); // To store the API response data
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle error state
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    // Replace with your actual API endpoint
    api
      .get("/api/public/products")
      .then((response) => {
        if (response.data && Array.isArray(response.data) && response.data.length > 0) {
          setItems(response.data); // Set the response data to the state if it's an array and has items
          console.log(items);
        } else {
          setItems([]); // Set empty array if no data
        }
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((err) => {
        setError('Error fetching data');
        setLoading(false); // Set loading to false on error
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center mt-5">
        <Alert variant="warning">No items available.</Alert>
      </div>
    );
  }

  const mouseHover =()=>{
    setIsHovered(true);
  }
  return (<>

<Slider/>

<div className="d-flex " id="explore_more_label">
    <span style={{color:'red',fontFamily:'Ostrich-Sans',fontSize:'30px',paddingLeft:'10px'}}>Browse </span>&nbsp;&nbsp;<span style={{color:'red',fontFamily:'Amar-nath',fontSize:'30px'}}> More</span>
</div>
<Container className="mt-5">
      <Row>
        {items.map((item, index) => (
          <Col xs={12} sm={6} md={3} lg={3} key={index} className="mb-4">
            
            <div className="product_items_wrapper">


            <Card key={item.id} onMouseEnter={mouseHover} className="product_card">
                <Card.Img variant="top" src={item.imagePath} className="product_card_image"/>
                <Card.Body>
                    <Card.Title>{item.productName}</Card.Title>

                    <Ratings ratings={item.ratings} ratings_id={item.productId}/>
                    <span>Rs.</span><span>{item.price}</span>
                </Card.Body>
                
                
            </Card>

            <Button id="add_to_cart_button"  >Addto Cart</Button>
            </div>



          </Col>
        ))}
      </Row>
    </Container>
  </>
    
  );
  
  
    return(<>

        <Slider/>
        {/* <RenderStars totalRatings={5} handleRatings={null}/> */}
       
            

        </>);
}