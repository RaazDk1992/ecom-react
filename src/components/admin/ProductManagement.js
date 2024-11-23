import axios from "axios";
import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import InputField from "../utils/InputField";
import apiWithUpload from "../../provider/apiWithUpload";

export default function ProductManagement() {

    const[expiring,setExpiring] = useState(false);

const{register,
    handleSubmit,
    formState:{errors}
} = useForm({
    defaultValues:{

        productName: "Example Product",
        manufacturer: "Example Manufacturer",
        imageFile: null, // This will be a file upload path, adjust as needed
        manufactureDate: new Date().toISOString().slice(0, 10),  // Format date to 'yyyy-MM-dd'
        expiryDate: new Date().toISOString().slice(0, 10),  // Format date to 'yyyy-MM-dd'
        doesExpire: expiring,
        quantity: 10,
        price: 100,
        minQuantity: 2,
        categoryId:2,
    
    },
    mode:"onTouched",
});


/**
 * 
 * String productName;
    String manufacturer;
    String imagePath;
    Date manufactureDate;
    Date expiryDate;
    Boolean doesExpire;
    int quantity;
    int price;
    int minQuantity;
    int ratings;
    int totalRates;
    categoryId
 */

function handleCheckChange(){
    setExpiring(!expiring);
    
}

const saveProduct=(data)=>{

    const formData = new FormData();
        formData.append("productName",data.productName);
        formData.append("manufacturer",data.manufacturer);
        formData.append("manufactureDate",data.manufactureDate);
        formData.append("expiryDate",data.expiryDate);
        formData.append("doesExpire",expiring);
        formData.append("imageFile",data.imageFile[0]);
        formData.append("categoryId",data.categoryId);
        formData.append("quantity",data.quantity);
        formData.append("price",data.price)
        formData.append("minQuantity",data.minQuantity)
       // console.log(formData);

       try{

        const response = apiWithUpload.post("/api/admin/addproduct",formData);
       }catch(ex){

        console.log(ex);
       }
}

return(
    <div className="d-flex align-items-center justify-content-center min-vh-100" >

        <Card style={{width:"400px"}}> 
            <Card.Header>Add A product</Card.Header>
            <Card.Body>
            <form onSubmit={handleSubmit(saveProduct)}>

            <InputField
            label="Category"
            type="text"
            id="categoryId"
            register={register}
            errors={errors}
            required="*Productname is required is required"
            />         
            <InputField
            label="Product Name"
            type="text"
            id="productName"
            register={register}
            errors={errors}
            required="*Productname is required is required"
            />
            <InputField
            label="Manufacturer"
            type="text"
            id="manufacturer"
            register={register}
            errors={errors}
            required="*Productname is required is required"
            />
            <InputField
            label="Manufacture Date"
            type="text"
            id="manufactureDate"
            register={register}
            errors={errors}
            required="*Productname is required is required"
            />
            <InputField
            label="Expiry  Date"
            type="text"
            id="expiryDate"
            register={register}
            errors={errors}
            required="*Productname is required is required"
            />
           <input type="checkbox" id="doesExpire" checked={expiring} onChange={handleCheckChange}/>
            <InputField
            label="Quantity"
            type="number"
            id="quantity"
            register={register}
            errors={errors}
            required="*Productname is required is required"
            />
            
            <InputField
            label="Price"
            type="text"
            id="price"
            register={register}
            errors={errors}
            required="*Productname is required is required"
            />
             <InputField
            label="Product Image"
            type="file"
            id="imageFile"
            register={register}
            errors={errors}
            required="*Image is required is required"
            />
            <Button variant="primary" type="submit" >Submit</Button>
            </form>
            </Card.Body>
        </Card>

    </div>
);

}
