import'font-awesome/css/font-awesome.css';
import'./../assets/styles/Stars.css';
import { useState } from 'react';
export default function RenderStars({totalRatings,handleRatings}){


    const[hoveredStarIndex,setHovered] = useState(0);
    const[selectedStarIndex, setSelected] = useState(0);

    const starHovered=(index)=>{

        setHovered(index);

    }
    const starClicked =(index) =>{

        setSelected(index);

    }

    const onHoverLeave =() =>{
        setHovered(0);
    }
   
    const renderStars = () =>{

        return Array.from({length:totalRatings},(_,index)=>{

            const starIndex = index+1;
            const selectedIndex = starIndex <= (selectedStarIndex || hoveredStarIndex);
            return(<span key={starIndex} className={`fa ${selectedIndex?'fa-star ':'fa-star-o '}`}
            onMouseEnter={()=>starHovered(starIndex)}
            onMouseLeave={onHoverLeave}
            onClick={()=>starClicked(starIndex)}></span>);

        })

    }

    return <div className='rating_bar'>{renderStars()}</div>
}