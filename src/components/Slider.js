import { useEffect, useState } from "react";
import api from "../provider/api";
export default function Slider(){

    const[slideItems,setSlideItems] = useState([]);
    const fetchSlides = async()=>{

       try{

        const resp =  await api.get("/api/admin/slider/getsliders");
        setSlideItems(resp);
       }catch(ex){

       }
    
       
    }
    
    useEffect(() => {
        fetchSlides();
      },[slideItems]);

}

