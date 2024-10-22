import { useCallback, useState } from "react";
import FetchData from "../provider/FetchData";
import { Button, Card } from "react-bootstrap";
import './../assets/styles/Products.css';
import Ratings from "./Ratings";
import RenderStars from "./Stars";


export default function Products(){
    const[data,setData] = useState([]);
    const[error,setError] = useState(null);
    const handleDataChanges =useCallback((data,error)=>{
        setData(data);
        setError(error);
        console.log(data);
       
    },[]);

    const productCardClick =(productId)=>{
        console.log({productId});
    }
    return(<>
        {/* <RenderStars totalRatings={5} handleRatings={null}/> */}
        <FetchData onDataChange={handleDataChanges} apiUrl="http://localhost:8080/api/public/products"/>
        {error && <div className="error_message">{error.message}</div>}
        {!error && data && data &&(
            <div className="product_items_wrapper" style={{margin:"5px"}}>
                {data.map(item=>(
                   <Card className="product_card" key={item.productId} onClick={()=>productCardClick(item.productId)}>
                        <Card.Img className="product_card_image" variant="top" src={item.imagePath} />
                        <Card.Body className="product_card_body">
                            <Card.Title className="product_card_title">{item.productName}  <Ratings ratings={3.2} ratings_id={"ratings_"+item.productId}/></Card.Title>
                            <Card.Text className="product_card_details">
                               <span>Rs.</span>{item.price}
                          </Card.Text>
                         
                          <Button id="add_to_cart_button" key={"btn_"+item.productId}>Add to Cart &nbsp; <i className="fa fa-cart-plus"></i> </Button>
                        </Card.Body>
                   </Card>
                ))}
            </div>
        )}

    </>);
}