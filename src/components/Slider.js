import { useCallback, useEffect, useState } from "react";
import api from "../provider/api";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
export default function Slider(){

    const[slideItems,setSlideItems] = useState([]);
    const[loading,setLoading] = useState(true);

    const autoplayOptions = { delay: 4000 }; // 4-second delay
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        const selectedIndex = emblaApi.selectedScrollSnap();
        console.log(`Current slide: ${selectedIndex}`);
      }, [emblaApi]);

      useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
      }, [emblaApi, onSelect]);

    const fetchSlides = async()=>{

       try{

        const resp =  await api.get("/api/admin/slider/getsliders");
        setSlideItems(resp);
        setLoading(false);
       }catch(ex){

        setLoading(false);
       }
    
       
    }
    
    useEffect(() => {
        fetchSlides();
      },[]);


      return(<>
     {!slideItems &&<p>Hey</p>}
      </>);

}

