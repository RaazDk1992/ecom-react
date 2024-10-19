import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function ProductManagement() {

    const [product, setProduct] = useState({
        productName: "Example Product",
        manufacturer: "Example Manufacturer",
        imageFile: null, // This will be a file upload path, adjust as needed
        manufactureDate: new Date().toISOString().slice(0, 10),  // Format date to 'yyyy-MM-dd'
        expiryDate: new Date().toISOString().slice(0, 10),  // Format date to 'yyyy-MM-dd'
        doesExpire: true,
        quantity: 10,
        price: 100,
        minQuantity: 2,
        categoryId:1
    });

    // Function to handle input changes and update the product state
    function buildBody(event) {
        const { name, value } = event.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    }

    function handleFileChange(event) {
        setProduct(prevProduct => ({
            ...prevProduct,
            imageFile: event.target.files[0] // Store the selected file object
        }));
    }

    // Function to handle form submission and send data to the backend
    function doSend(event) {
        event.preventDefault();
        /**
         * @RequestParam("productName") String productName,
            @RequestParam("manufacturer") String manufacturer,
            @RequestParam("manufactureDate") Date manufactureDate,
            @RequestParam("expiryDate") Date expiryDate,
            @RequestParam("doesExpire") Boolean doesExpire,
            @RequestParam("quantity") int quantity,
            @RequestParam("price") int price,
            @RequestParam("minQuantity") int minQuantity,
            @RequestParam("categoryId") Long categoryId,
            @RequestParam("imageFile") MultipartFile imageFile)
         * 
         */
        const formData = new FormData();
        formData.append('productName',product.productName);
        formData.append('manufacturer',product.manufacturer);
        formData.append('manufactureDate',product.manufactureDate);
        formData.append('expiryDate',product.expiryDate);
        formData.append('doesExpire',product.doesExpire);
        formData.append('price',product.price);
        formData.append('minQuantity',product.minQuantity);
        formData.append('quantity',product.quantity);
        formData.append('categoryId',product.categoryId);
        if(product.imageFile){
            formData.append('imageFile',product.imageFile);
        }

        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }
        axios.post('http://localhost:8080/api/admin/addproduct', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then(resp => console.log("Response:", resp.data))
        .catch(err => console.error("Error:", err));
    }

    return (
        <div className="form-group">
            <Form>
                <label>Product Name:</label>
                <input type="text" name="productName" id="productName" onChange={buildBody} />

                <label>Manufacturer:</label>
                <input type="text" name="manufacturer" id="manufacturer" onChange={buildBody} />

                <label>Manufacture Date:</label>
                <input type="date" name="manufactureDate" id="manufactureDate" onChange={buildBody} />

                <label>Expiry Date:</label>
                <input type="date" name="expiryDate" id="expiryDate" onChange={buildBody} />

                <label>Does Expire:</label>
                <input type="checkbox" name="doesExpire" id="doesExpire" 
                    checked={product.doesExpire} 
                    onChange={e => setProduct({ ...product, doesExpire: e.target.checked })} 
                />

                <label>Quantity:</label>
                <input type="number" name="quantity" id="quantity" onChange={buildBody} />

                <label>Price:</label>
                <input type="number" name="price" id="price" onChange={buildBody} />

                <label>Minimum Quantity:</label>
                <input type="number" name="minQuantity" id="minQuantity" onChange={buildBody} />

                <label>Category ID:</label>
                <input type="number" name="categoryId" id="categoryId" 
                    onChange={buildBody} 
                />

                <label>Image:</label>
                <input type="file" name="imageFile" id="imageFile" onChange={handleFileChange} />

                <button onClick={doSend}>Submit</button>
            </Form>
        </div>
    );
}
