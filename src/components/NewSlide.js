import { Button, Card} from "react-bootstrap";
import { useForm } from "react-hook-form";
import InputField from "./utils/InputField";
import apiWithUpload from "../provider/apiWithUpload";

const NewSlide = ()=>{

    const{
        register,
        handleSubmit,
        formState:{errors}
    } = useForm({

        defaultValues:{
            slideTitle:'',
            image:null,
        }

    });

    const  saveSlides = async(data)=>{

        const formData = new FormData();
        formData.append("title",data.slideTitle);
        formData.append("imageFile",data.image[0]);

       if(data.image){
        console.log("data");
       }
       try{
        const response = await  apiWithUpload.post("/api/admin/slider/newslide",formData);
        console.log(response);
       }catch(ex){
        console.log(ex);
       }

    }

    return(
        <div className="d-flex justify-content-center align-items-center min-vh-100">

        <Card style={{width:'400px'}} >
                    <Card.Header as={"h4"}>Add  new Slide</Card.Header>
                    <Card.Body>
                    <form onSubmit={handleSubmit(saveSlides)}>
                        <InputField
                            type="text"
                            label="slidetitle"
                            id="slideTitle"
                            register={register}
                            errors={errors}
                            required = "*title required!"
                        />
                        <InputField
                            type="file"
                            label="slidefile"
                            id="image"
                            register={register}
                            errors={errors}
                            required ="*File required!"
                        />
                        <Button type="submit" variant="primary">Save Slide</Button>
                    </form>
                    </Card.Body>
                </Card>
        </div>
    );

}

export default NewSlide;