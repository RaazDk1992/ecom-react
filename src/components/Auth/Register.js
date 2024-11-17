import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import InputField from "../utils/InputField";

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

                <Card.Header as="h4">Register</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputField label="First Name"
                     type="text"
                     id="reg_first_name" 
                     required="First Name required"
                     register={register}
                     errors={errors}/>

                     <InputField label="Last Name"
                     type="text"
                     id="reg_last_name"
                     required="Last Name is required"
                     register={register}
                     errors={errors}
                     />
                     <InputField label="E-mail"
                     type="text"
                     id="reg_email"
                     required="email is required"
                     register={register}
                     errors={errors}
                     />
                     <InputField label="UserName"
                     type="text"
                     id="reg_username"
                     required="username is required"
                     register={register}
                     errors={errors}
                     />
                     <InputField label="Password"
                     type="password"
                     id="reg_password"
                     required="This field is required"
                     register={register}
                     errors={errors} />

                    <Button variant="primary" type="submit" className="d-block mx-auto">Signup</Button>
                    </Form>
                </Card.Body>

            </Card>

        </div>
    );

}

export default Register;