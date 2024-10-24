import { useOutletContext } from "react-router-dom";

export default function CartDropDown(){

   
    const context = useOutletContext(); // This should now contain the context passed from Products
    console.log(context);
    return(
        <p>Total Items in cart </p>
    );
}