import { Button, Card} from "react-bootstrap";
import { useForm } from "react-hook-form";
import InputField from "./utils/InputField";
import api from "../provider/api";

const AddCategory = ()=>{

    const{
        register,
        handleSubmit,
        formState:{errors}
    } = useForm({

        defaultValues:{
            categoryName:'',
           
        }

    });

    const  saveCategory = async(data)=>{

    

       try{
        const response = await  api.post("/api/admin/addcategory",data);
        console.log(response);
       }catch(ex){
        console.log(ex);
       }

    }

    return(
        <div className="d-flex justify-content-center align-items-center min-vh-100">

        <Card style={{width:'400px'}} >
                    <Card.Header as={"h4"}>Add  new Category</Card.Header>
                    <Card.Body>
                    <form onSubmit={handleSubmit(saveCategory)}>
                        <InputField
                            type="text"
                            label="CategoryName"
                            id="categoryName"
                            register={register}
                            errors={errors}
                            required = "*title required!"
                        />
                      
                        <Button type="submit" variant="primary">Save Category</Button>
                    </form>
                    </Card.Body>
                </Card>
        </div>
    );

}

export default AddCategory;