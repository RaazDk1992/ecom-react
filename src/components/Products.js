import { useCallback, useState } from "react";
import FetchData from "../provider/FetchData";
import { Card } from "react-bootstrap";

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
            <ul>
                {data.map(item=>(
                   <Card id="item.productId" style={{width:'20rem'}}>
                        <Card.Img variant="top" src={item.imagePath}/>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text></Card.Text>
                        </Card.Body>
                   </Card>
                ))}
            </ul>
        )}

    </>);
}