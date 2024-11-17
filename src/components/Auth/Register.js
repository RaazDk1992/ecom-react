import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Register = () =>{

    const{
        register,
        handleSubmit,
        formState:{errors}
    } = useForm({
        defaultValues:{},
        mode:'onTouched'
    });


    const onSubmit = (data)=>{

    }


    return(
        <div className="d-flex justify-content-center align-items-center min-vh-100">

            <Card style={{width:'400px'}}>

                <Card.Title>Register</Card.Title>
                <Card.Body></Card.Body>

            </Card>

        </div>
    );

}

export default Register;