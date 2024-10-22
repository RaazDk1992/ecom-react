import { useCallback, useState } from "react";
import FetchData from "../provider/FetchData";
import { Button, Card } from "react-bootstrap";
import './../assets/styles/Products.css';


export default function Products(){
    const[data,setData] = useState([]);
    const[error,setError] = useState(null);
    const handleDataChanges =useCallback((data,error)=>{
        setData(data);
        setError(error);
        console.log(data);
       
    },[]);
    return(<>
        <FetchData onDataChange={handleDataChanges} apiUrl="http://localhost:8080/api/public/products"/>
        {error && <div className="error_message">{error}</div>}
        {!error && data && data &&(
            <div className="product_items_wrapper" style={{margin:"5px"}}>
                {data.map(item=>(
                   <Card className="product_card" key="item.productId">
                        <Card.Img className="product_card_image" variant="top" src={item.imagePath} />
                        <Card.Body className="product_card_body">
                            <Card.Title className="product_card_title">{item.productName}</Card.Title>
                            <Card.Text className="product_card_details">
                           
                          </Card.Text>
                          <Button>Add</Button>
                        </Card.Body>
                   </Card>
                ))}
            </div>
        )}

    </>);
}