import { useCallback, useContext, useState } from "react";
import FetchData from "../provider/FetchData";
import { Button, Card } from "react-bootstrap";
import './../assets/styles/Products.css';
import Ratings from "./Ratings";
import RenderStars from "./Stars";
import {useNavigate } from "react-router-dom";
import { CartContext } from "../provider/CartDataProvider";
import Slider from "./Slider";


export default function Products(){
    const[data,setData] = useState([]);
    const[error,setError] = useState(null);
    const { addToCart , cartItems} = useContext(CartContext); // Access the addToCart function

    const handleDataChanges =useCallback((data,error)=>{
        setData(data);
        setError(error);
       // console.log(data);
       
    },[]);

    const addItemToCart = (item)=>{
        addToCart(item);
        console.log(cartItems);
    }
    const navigate = useNavigate();
    const productCardClick =(productId)=>{
      //  console.log({productId});
      navigate('/product-details',{state:productId});
    }
    return(<>

        <Slider/>
        {/* <RenderStars totalRatings={5} handleRatings={null}/> */}
       
   
        </>);
}