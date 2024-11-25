import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Form, Row, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import InputField from "../utils/InputField";
import apiWithUpload from "../../provider/apiWithUpload";
import api from "../../provider/api";

export default function ProductManagement() {

    const[expiring,setExpiring] = useState(false);
    const[selectedUnit,setSelectedUnit] = useState();
    const[category,setCategory] = useState();
    const[unitx,setUnitx] = useState([]);
    const[loading,setLoading] = useState(true);
    const[error,setError] = useState();

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
        quantity: 1,
        price: 100,
        minQuantity: 2,
        categoryId:2,
        itemsInStock:1,
    
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


    itemsInStock

 */

function handleCheckChange(){
    setExpiring(!expiring);
    
}

useEffect(()=>{
    api.get("/api/units/getunits")
    .then((response)=>{
        if(Array.isArray(response.data) && response.data.length >0){
            setUnitx(response.data);
            setLoading(false);
        }
        
           
    })
    .catch((error)=>{
        setError(error);
        setLoading(false);
    })
},[]);

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
        formData.append("price",data.price);
        formData.append("minQuantity",data.minQuantity);
        formData.append("unit_id",selectedUnit);
        formData.append("itemsInStock",data.itemsInStock);
       // console.log(formData);

       try{

        const response = apiWithUpload.post("/api/admin/addproduct",formData);
       }catch(ex){

        setError(ex)
       }
}

if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <Alert variant="danger">{error}</Alert>
      </div>
    );
  }

  if (unitx.length === 0) {
    return (
      <div className="text-center mt-5">
        <Alert variant="warning">No items available.</Alert>
      </div>
    );
  }

  const handleUnitChange=(e)=>{
    setSelectedUnit(e.target.value);
    //console.log(selectedUnit);
  }

return(
    <div className="d-flex align-items-center justify-content-center min-vh-100" >

        <Card style={{width:"600px"}}> 
            <Card.Header>Add A product</Card.Header>
            <Card.Body>
            <Form onSubmit={handleSubmit(saveProduct)} className="product-form">
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="categoryId">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            {...register("categoryId", { required: "*Category is required" })}
                            isInvalid={!!errors.categoryId}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.categoryId?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group controlId="productName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            {...register("productName", { required: "*Product Name is required" })}
                            isInvalid={!!errors.productName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.productName?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="manufacturer">
                        <Form.Label>Manufacturer</Form.Label>
                        <Form.Control
                            type="text"
                            {...register("manufacturer", { required: "*Manufacturer is required" })}
                            isInvalid={!!errors.manufacturer}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.manufacturer?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group controlId="manufactureDate">
                        <Form.Label>Manufacture Date</Form.Label>
                        <Form.Control
                            type="date"
                            {...register("manufactureDate", { required: "*Manufacture Date is required" })}
                            isInvalid={!!errors.manufactureDate}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.manufactureDate?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="expiryDate">
                        <Form.Label>Expiry Date</Form.Label>
                        <Form.Control
                            type="date"
                            {...register("expiryDate", { required: "*Expiry Date is required" })}
                            isInvalid={!!errors.expiryDate}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.expiryDate?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col md={6} className="d-flex align-items-center">
                    <Form.Check
                        type="checkbox"
                        id="doesExpire"
                        label="Does Expire?"
                        checked={expiring}
                        onChange={handleCheckChange}
                    />
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group controlId="quantity">
                        <Form.Label>Min Order Quantity</Form.Label>
                        <Form.Control
                            type="number"
                            {...register("quantity", { required: "*Quantity is required" })}
                            isInvalid={!!errors.quantity}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.quantity?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group controlId="units">
                        <Form.Label>unit</Form.Label>
                        <Form.Select aria-label="Units" value={selectedUnit} onChange={handleUnitChange}>
                            <option>Open this select menu</option>
                            
                                {unitx.map((unit)=>(<option key={`item_`+unit.id} value={unit.id}>{unit.unitName}</option>))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
            <Col md={6}>
                    <Form.Group controlId="price">
                        <Form.Label>Price for Min Quantity</Form.Label>
                        <Form.Control
                            type="text"
                            {...register("price", { required: "*Price is required" })}
                            isInvalid={!!errors.price}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.price?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group controlId="items_in_stock">
                        <Form.Label>Quantity in Stock</Form.Label>
                        <Form.Control
                            type="text"
                            {...register("itemsInStock", { required: "*stock quantity is required" })}
                            isInvalid={!!errors.itemsInStock}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.itemsInStock?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
            <Col md={12}>
                    <Form.Group controlId="imageFile">
                        <Form.Label>Product Image</Form.Label>
                        <Form.Control
                            type="file"
                            {...register("imageFile", { required: "*Image is required" })}
                            isInvalid={!!errors.imageFile}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.imageFile?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
             
            </Row>

            <Row>
                <Col className="text-center">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Col>
            </Row>
        </Form>
            </Card.Body>
        </Card>

    </div>
);

}
