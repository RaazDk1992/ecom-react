import './../assets/styles/Ratings.css';
/**
 * 
 * @param {
 * Ratings in number
 * }  
 * @returns a rendered starred component. 
 */
export default function Ratings({ratings, ratings_id}){

    const normalized_rating = Math.max(0,Math.min(5,ratings));
    return(
        <span className="star-rating" style={{float:"right"}} key={ratings_id}>
        {Array.from({ length: 5 }, (_, index) => {
          if (index < Math.floor(normalized_rating)) {
             return <i key={index+"_rating"} className="fa fa-star small-icon"/>
          } else if (index < Math.ceil(normalized_rating)) {
             return  <i  key={index+"_rating"} className="fa fa-star-half-full small-icon "/>
          } else {
              return  <i  key={index+"_rating"} className="fa fa-star-o  small-icon"/>
  
          }
        })}
      </span>
    );
}