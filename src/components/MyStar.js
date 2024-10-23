
export default function Stars(){

    const totalRatings =5;
    const ratings = 3;
    return Array.from({length:totalRatings},(_,index)=>{

        return <i className={index<=ratings?'fa fa-star':'fa fa-star-o'}/>

    });
}